import { useState } from "react";
import weddingConfig from "../data/weddingConfig";
import Reveal from "./Reveal";

const choices = [
  { id: "yes", label: "Joyfully attending" },
  { id: "no", label: "Unable to attend" },
];

export default function RSVPSection() {
  const { wishes } = weddingConfig;
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(null);

  const submit = (event) => {
    event.preventDefault();
    if (!name.trim() || !attendance) {
      setError("Please add your name and let us know if you can attend.");
      return;
    }
    setError("");
    setSent({ name: name.trim(), attendance, message: message.trim() });
  };

  return (
    <section id="wishes" className="wash-gold px-5 py-16 text-ink sm:px-8 sm:py-20">
      <div className="mx-auto max-w-lg">
        <Reveal className="text-center">
          <p className="font-sans text-[0.72rem] tracking-[0.24em] text-rose uppercase">{wishes.eyebrow}</p>
          <h2 className="script-title mt-3 font-script text-5xl">{wishes.heading}</h2>
          <p className="mt-4 font-serif text-xl text-muted italic">{wishes.message}</p>
          <p className="mt-3 font-sans text-xs leading-relaxed text-rose">{wishes.demoNote}</p>
        </Reveal>

        {sent ? (
          <div className="mt-8 border border-floral bg-ivory px-6 py-8 text-center" role="status">
            <p className="font-script text-4xl text-romantic">Thank you, {sent.name}</p>
            <p className="mt-3 font-serif text-lg text-ink">
              {sent.attendance === "yes"
                ? "We will look forward to seeing you."
                : "You will be missed, and you are still in our thoughts."}
            </p>
            {sent.message ? <p className="mt-3 font-serif text-ink italic">“{sent.message}”</p> : null}
            <p className="mt-4 font-sans text-xs text-rose">{wishes.demoNote}</p>
          </div>
        ) : (
          <form className="mt-8 space-y-5" onSubmit={submit}>
            <label className="block">
              <span className="font-sans text-[0.68rem] tracking-[0.16em] text-rose uppercase">Your name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full border-b border-floral bg-transparent py-2 font-serif text-xl text-ink outline-none"
                autoComplete="name"
              />
            </label>

            <fieldset>
              <legend className="font-sans text-[0.68rem] tracking-[0.16em] text-rose uppercase">Attendance</legend>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {choices.map((choice) => (
                  <label
                    key={choice.id}
                    className={`cursor-pointer border px-3 py-3 text-center font-serif text-lg ${
                      attendance === choice.id ? "border-romantic bg-ivory text-romantic" : "border-floral bg-ivory/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={choice.id}
                      checked={attendance === choice.id}
                      onChange={() => setAttendance(choice.id)}
                      className="sr-only"
                    />
                    {choice.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="block">
              <span className="font-sans text-[0.68rem] tracking-[0.16em] text-rose uppercase">A wish, if you like</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={3}
                className="mt-2 w-full resize-none border border-floral bg-ivory/70 px-3 py-2 font-serif text-lg text-ink outline-none"
              />
            </label>

            {error ? <p className="font-sans text-sm text-romantic">{error}</p> : null}

            <button
              type="submit"
              className="btn-festive w-full cursor-pointer px-6 py-3.5 font-sans text-[0.72rem] tracking-[0.2em] uppercase transition active:scale-[0.99]"
            >
              Send wishes
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
