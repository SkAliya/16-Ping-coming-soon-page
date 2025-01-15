import { useState } from 'react';

function Input() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email)
      setErrorMessage('Whoops! It looks like you forgot to add your email');
    // if () setErrorMessage("Please provide a valid email address");
  }

  return (
    <form
      className="relative flex w-72 flex-wrap items-center gap-4 sm:w-96 md:w-fit"
      onClick={() => handleSubmit}
    >
      <input
        name="email"
        className="w-[300px] grow rounded-full border border-color-input-field px-4 py-2.5 text-sm outline-none placeholder:text-color-input-field focus:border-primary-color focus:caret-primary-color sm:w-[450px] sm:px-6 sm:py-3.5 sm:text-lg"
        placeholder="Your email address..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="absolute text-sm text-color-error-message sm:left-8 sm:top-16 sm:text-sm md:left-5 md:top-16 md:text-lg">
        Please provide a valid email address
      </p>
      <button className="grow rounded-full bg-primary-color px-8 py-2.5 text-sm text-white shadow-lg shadow-primary-color/30 transition-all duration-300 hover:bg-blue-400 active:translate-y-1 sm:px-14 sm:py-3.5 sm:text-lg">
        Notify Me
      </button>
    </form>
  );
}

export default Input;
