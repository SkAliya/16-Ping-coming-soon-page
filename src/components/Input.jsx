function Input() {
  return (
    <form className="space-x-4">
      <input
        name="email"
        className="w-[450px] rounded-full border border-color-input-field px-6 py-3.5 text-lg placeholder:text-color-input-field"
        placeholder="Your email address..."
      />
      <button className="rounded-full bg-primary-color px-14 py-3.5 text-lg text-white shadow-lg shadow-primary-color/30 transition-colors duration-300 hover:bg-blue-400">
        Notify Me
      </button>
    </form>
  );
}

export default Input;
