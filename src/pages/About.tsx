import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="space-y-10">
      {/* HEADER with dots */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-base-100 p-8 shadow-lg">
        <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:radial-gradient(closest-side,theme(colors.emerald.300),transparent_70%)] [background-size:20px_20px] [background-position:center]" />
        <div className="relative">
          <h1 className="text-4xl font-bold">About Ray’s Light</h1>
          <p className="mt-3 text-lg opacity-80 max-w-2xl">
            At Ray’s Light, we believe healthy hair is the foundation for every
            look. Expect calm, clean, and considered care—cuts, color, and
            styling tailored to your texture, lifestyle, and goals.
          </p>
        </div>
      </section>

      {/* Bio + Portrait with dotted background */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-base-100 p-8 shadow-lg grid gap-8 md:grid-cols-[1fr,380px] items-start">
        <div className="absolute inset-0 opacity-10 pointer-events-none [background-image:radial-gradient(closest-side,theme(colors.emerald.300),transparent_70%)] [background-size:24px_24px]" />
        <div className="relative card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Meet Ray</h2>
            <p className="opacity-80">
              Ray is an Indianapolis stylist specializing in soft, dimensional
              color and lived-in cuts with an emphasis on hair health. Clients
              love her gentle approach, clear communication, and results that
              grow out beautifully.
            </p>
            <p className="opacity-80 mt-3">
              Whether you’re refreshing your shape, exploring a new shade, or
              getting event-ready styling, Ray designs a plan that fits your
              hair and your routine.
            </p>
            <div className="mt-4 flex gap-3">
              <Link to="/booking" className="btn btn-primary">
                Book Now
              </Link>
              <Link to="/products" className="btn btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </div>

        <figure className="relative rounded-2xl overflow-hidden shadow-xl bg-base-100">
          <img
            src="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1200&auto=format&fit=crop"
            alt="Ray at work in the salon"
            className="w-full h-full object-cover"
          />
        </figure>
      </section>

      {/* Hours + Location with dotted background */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-base-100 p-8 shadow-lg grid gap-8 md:grid-cols-2">
        <div className="absolute inset-0 opacity-10 pointer-events-none [background-image:radial-gradient(closest-side,theme(colors.emerald.300),transparent_70%)] [background-size:24px_24px]" />
        <div className="relative card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Hours</h3>
            <ul className="mt-2 space-y-1">
              <li className="flex justify-between">
                <span>Mon</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Tue–Fri</span>
                <span>10:00a–6:00p</span>
              </li>
              <li className="flex justify-between">
                <span>Sat</span>
                <span>9:00a–3:00p</span>
              </li>
              <li className="flex justify-between">
                <span>Sun</span>
                <span>Closed</span>
              </li>
            </ul>
            <p className="text-xs opacity-60 mt-2">
              * Hours may vary by appointment. Please request your preferred
              time on the Booking page.
            </p>
          </div>
        </div>

        <div className="relative card bg-base-100 shadow-xl overflow-hidden">
          <div className="card-body">
            <h3 className="card-title">Location</h3>
            <p className="opacity-80">
              Indianapolis, IN • Exact address provided upon booking
              confirmation.
            </p>
          </div>
          <div className="h-56 bg-base-200 grid place-items-center text-sm opacity-70">
            Map embed coming soon
          </div>
        </div>
      </section>

      {/* Philosophy / What to Expect */}
      <section className="rounded-2xl bg-base-100 shadow-lg p-8">
        <h3 className="text-2xl font-bold">What to Expect</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="font-semibold">Consultation First</h4>
            <p className="opacity-80">
              We discuss hair history, goals, and maintenance to align on a look
              that feels like you.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Hair-Health Minded</h4>
            <p className="opacity-80">
              Techniques and products are chosen to protect integrity and
              support long-term results.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Low-Stress Care</h4>
            <p className="opacity-80">
              A calm, welcoming appointment with clear guidance for at-home
              styling.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-2xl bg-gradient-to-br from-emerald-50 to-base-100 p-8 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none [background-image:radial-gradient(closest-side,theme(colors.emerald.300),transparent_70%)] [background-size:20px_20px]" />
        <div className="relative space-y-4">
          <h3 className="text-2xl font-bold">FAQ</h3>

          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How do I book an appointment?
            </div>
            <div className="collapse-content opacity-80">
              <p>
                Use the Booking page to submit a request with your preferred
                date/time. You’ll receive a confirmation or alternate options by
                text or email.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              What should I bring to my color consultation?
            </div>
            <div className="collapse-content opacity-80">
              <p>
                Photos of your hair now and your inspiration are helpful. We’ll
                align on expectations, maintenance, and aftercare before we
                begin.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Do you offer wedding or event styling?
            </div>
            <div className="collapse-content opacity-80">
              <p>
                Yes—onsite or in-salon styling is available. Share details on
                the Booking form and we’ll follow up with availability and
                rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="rounded-2xl bg-base-100 shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for your next appointment?
          </h3>
          <p className="opacity-80">
            Request your preferred time and we’ll confirm shortly.
          </p>
        </div>
        <Link to="/booking" className="btn btn-primary">
          Request Booking
        </Link>
      </section>
    </div>
  );
}
