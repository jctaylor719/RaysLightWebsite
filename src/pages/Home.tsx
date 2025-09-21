export default function Home() {
  return (
    <section className="container mx-auto p-6">
      <div className="hero bg-base-100 rounded-2xl shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Ray’s Light</h1>
            <p className="py-6">
              Green, clean, and simple hairstyling. Look your best, feel your
              best.
            </p>
            <a className="btn btn-primary" href="/RaysLightWebsite/booking">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
