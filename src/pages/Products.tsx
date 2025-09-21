import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

type Product = {
  id: string;
  name: string;
  price?: number;
  description?: string;
  imageUrl?: string;
  category?: string;
  active?: boolean;
};

export default function Products() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const snap = await getDocs(collection(db, "products"));
        const data: Product[] = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as any),
        }));
        const visible = data
          .filter((p) => p.active !== false)
          .sort((a, b) => (a.name || "").localeCompare(b.name || ""));
        setItems(visible);
      } catch (e: any) {
        console.error(e);
        setError(e?.message ?? "Failed to load products");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-base-100 p-8 shadow-lg">
      {/* dotted overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none [background-image:radial-gradient(closest-side,theme(colors.emerald.300),transparent_70%)] [background-size:20px_20px] [background-position:center]" />
      <div className="relative">
        <h1 className="text-3xl font-bold mb-6">Products</h1>

        {loading && (
          <div className="flex gap-3 items-center">
            <span className="loading loading-spinner loading-md" />
            <span>Loading products…</span>
          </div>
        )}

        {error && (
          <div className="alert alert-error mt-4">
            <span>{error}</span>
          </div>
        )}

        {!loading && !error && items.length === 0 && (
          <div className="alert mt-4">
            <span>No products yet—check back soon.</span>
          </div>
        )}

        {!loading && !error && items.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <div key={p.id} className="card bg-base-100 shadow-xl">
                {p.imageUrl ? (
                  <figure className="aspect-square overflow-hidden">
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                ) : null}
                <div className="card-body border-t-4 border-emerald-200">
                  <h2 className="card-title">
                    {p.name}
                    {typeof p.price === "number" ? (
                      <div className="badge badge-outline">
                        ${p.price.toFixed(2)}
                      </div>
                    ) : null}
                  </h2>
                  {p.description ? (
                    <p className="opacity-80">{p.description}</p>
                  ) : null}
                  <div className="card-actions justify-end mt-2">
                    <button className="btn btn-outline">
                      Message to order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
