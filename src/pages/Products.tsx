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
        // Show only active items first; sort by name for a stable order
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

  if (loading) {
    return (
      <section className="container mx-auto p-6">
        <div className="flex gap-3 items-center">
          <span className="loading loading-spinner loading-md" />
          <span>Loading products…</span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto p-6">
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="container mx-auto p-6">
        <div className="alert">
          <span>No products yet—check back soon.</span>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <div key={p.id} className="card bg-base-100 shadow-xl">
            {p.imageUrl ? (
              <figure className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </figure>
            ) : null}
            <div className="card-body">
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
                <button className="btn btn-outline">Message to order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
