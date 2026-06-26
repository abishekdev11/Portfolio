export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          className="p-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400"
          placeholder="Your Name"
        />
        <input
          className="p-3 bg-white/5 border border-white/10 rounded-lg"
          placeholder="Email"
        />
        <textarea
          className="p-3 bg-white/5 border border-white/10 rounded-lg"
          placeholder="Message"
          rows="4"
        />

        <button
          className="bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg transition hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}