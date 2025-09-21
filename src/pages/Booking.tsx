import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

// simple service list for now; you can change later
const SERVICES = [
  { id: "haircut", label: "Haircut" },
  { id: "color", label: "Color" },
  { id: "style", label: "Styling / Blowout" },
  { id: "treatment", label: "Conditioning Treatment" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  // form fields
  const [name, setName] = useState("");
  const [contact, setContact] = useState(""); // phone or email
  const [serviceId, setServiceId] = useState(SERVICES[0].id);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [notes, setNotes] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // very basic validation
    if (!name.trim() || !contact.trim() || !preferredDate) {
      setError("Please fill in your name, contact, and preferred date.");
      return;
    }

    try {
      setStatus("submitting");
      await addDoc(collection(db, "bookingRequests"), {
        name: name.trim(),
        contact: contact.trim(),
        serviceId,
        preferredDate, // YYYY-MM-DD
        preferredTime, // HH:MM (optional)
        notes: notes.trim() || null,
        status: "pending", // for your admin workflow later
        createdAt: serverTimestamp(),
        source: "rays-light-web", // helpful for analytics
      });

      setStatus("success");
      // clear form after success
      setName("");
      setContact("");
      setServiceId(SERVICES[0].id);
      setPreferredDate("");
      setPreferredTime("");
      setNotes("");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setError(err?.message ?? "Submission failed");
    }
  }

  return (
    <section className="container mx-auto p-6 max-w-2xl">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Request an Appointment</h2>
          <p className="opacity-70">
            Fill this out and we’ll confirm your time via text or email.
          </p>

          <form onSubmit={submit} className="grid gap-4 mt-4">
            <label className="form-control">
              <span className="label-text">Your name *</span>
              <input
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                required
              />
            </label>

            <label className="form-control">
              <span className="label-text">
                Best contact (phone or email) *
              </span>
              <input
                className="input input-bordered"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="555-123-4567 or you@example.com"
                required
              />
            </label>

            <label className="form-control">
              <span className="label-text">Service</span>
              <select
                className="select select-bordered"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="form-control">
                <span className="label-text">Preferred date *</span>
                <input
                  type="date"
                  className="input input-bordered"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  required
                />
              </label>

              <label className="form-control">
                <span className="label-text">Preferred time</span>
                <input
                  type="time"
                  className="input input-bordered"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                />
              </label>
            </div>

            <label className="form-control">
              <span className="label-text">Notes (optional)</span>
              <textarea
                className="textarea textarea-bordered"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Anything we should know (hair length, goals, allergies, etc.)"
              />
            </label>

            {error && (
              <div className="alert alert-error">
                <span>{error}</span>
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  "Request Appointment"
                )}
              </button>

              {status === "success" && (
                <span className="badge badge-success">Request sent!</span>
              )}
              {status === "error" && (
                <span className="badge badge-error">Couldn’t send</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
