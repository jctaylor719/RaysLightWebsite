import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-base-100">
        <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:radial-gradient(closest-side,theme(colors.emerald.300),transparent_70%)] [background-size:20px_20px] [background-position:center]" />
        <div className="relative px-6 py-16 md:px-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Ray’s Light
            </h1>
            <p className="mt-4 text-lg opacity-80">
              Green, clean, and simple hairstyling—cuts, color, and styling that
              put healthy hair first.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/booking" className="btn btn-primary">
                Book Now
              </Link>
              <Link to="/products" className="btn btn-outline">
                View Products
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-6 flex items-center gap-3 text-sm">
              <div className="flex gap-1 text-emerald-400">
                <span className="mask mask-star-2 w-4 h-4 bg-emerald-400"></span>
                <span className="mask mask-star-2 w-4 h-4 bg-emerald-400"></span>
                <span className="mask mask-star-2 w-4 h-4 bg-emerald-400"></span>
                <span className="mask mask-star-2 w-4 h-4 bg-emerald-400"></span>
                <span className="mask mask-star-2 w-4 h-4 bg-emerald-400"></span>
              </div>

              <span className="opacity-70">Loved by clients in Indy</span>
            </div>
          </div>

          {/* Hero image (replace with real salon photo later) */}
          <div className="aspect-[4/3] md:aspect-[5/4] rounded-xl overflow-hidden shadow-xl bg-base-200">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
              alt="Salon styling"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* SERVICES QUICK GRID */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Popular Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Haircut",
              desc: "Tailored cuts for your texture and lifestyle.",
              price: "$45+",
            },
            {
              title: "Color",
              desc: "Dimensional color, low-maintenance blends.",
              price: "$90+",
            },
            {
              title: "Styling",
              desc: "Blowouts, waves, and event styling.",
              price: "$40+",
            },
          ].map((s) => (
            <div key={s.title} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">{s.title}</h3>
                <p className="opacity-80">{s.desc}</p>
                <div className="card-actions justify-between items-center pt-2">
                  <div className="badge badge-outline">{s.price}</div>
                  <Link to="/booking" className="btn btn-sm btn-primary">
                    Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="rounded-2xl bg-base-100 shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Ready for a refresh?</h3>
          <p className="opacity-80">
            Appointments fill quickly—grab your spot.
          </p>
        </div>
        <Link to="/booking" className="btn btn-primary">
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}
