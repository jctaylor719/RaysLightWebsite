import { useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Booking() {
  const [status, setStatus] = useState<"idle" | "writing" | "ok" | "error">(
    "idle"
  );
  const [msg, setMsg] = useState<string>("");

  async function smokeTest() {
    try {
      setStatus("writing");
      await addDoc(collection(db, "diagnostics"), {
        message: "Hello from Ray's Light",
        ts: serverTimestamp(),
      });
      const q = query(
        collection(db, "diagnostics"),
        orderBy("ts", "desc"),
        limit(1)
      );
      const snap = await getDocs(q);
      const doc = snap.docs[0];
      setMsg(doc?.data()?.message ?? "(no message)");
      setStatus("ok");
    } catch (e: any) {
      console.error(e);
      setMsg(e?.message ?? "Unknown error");
      setStatus("error");
    }
  }

  return (
    <section className="container mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Book an Appointment</h2>
          <p className="opacity-70">
            Click the test button to verify Firestore connectivity.
          </p>
          <div className="card-actions items-center gap-3">
            <button className="btn btn-primary" onClick={smokeTest}>
              Firestore Test
            </button>
            {status === "writing" && (
              <span className="loading loading-spinner loading-sm" />
            )}
            {status === "ok" && (
              <span className="badge badge-success">OK: {msg}</span>
            )}
            {status === "error" && (
              <span className="badge badge-error">Error: {msg}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
