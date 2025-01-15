import { useState } from 'react';

function validateEmail(email) {
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // or
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function Input() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email)
      setErrorMessage('Whoops! It looks like you forgot to add your email');
    if (!validateEmail(email) && email)
      setErrorMessage('Please provide a valid email address');
    if (validateEmail(email)) {
      setEmail('');
      setErrorMessage('');
    }
  }

  return (
    <form
      className={`relative flex w-72 flex-wrap items-center gap-4 sm:w-96 md:w-fit ${errorMessage ? 'gap-14 sm:gap-14 md:gap-4' : ''}`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        name="email"
        className={`w-[300px] grow rounded-full border border-color-input-field px-4 py-2.5 text-sm outline-none placeholder:text-color-input-field focus:border-primary-color focus:caret-primary-color sm:w-[450px] sm:px-6 sm:py-3.5 sm:text-lg ${errorMessage ? 'border-color-error-message' : ''}`}
        placeholder="Your email address..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {errorMessage && (
        <p className="absolute left-[1.8rem] top-[3rem] text-sm text-color-error-message sm:left-[2rem] sm:top-[4.3rem] sm:text-sm md:left-5 md:top-16 md:text-lg">
          {errorMessage}
        </p>
      )}
      <button className="grow rounded-full bg-primary-color px-8 py-2.5 text-sm text-white shadow-lg shadow-primary-color/30 transition-all duration-300 hover:bg-blue-400 active:translate-y-1 sm:px-14 sm:py-3.5 sm:text-lg">
        Notify Me
      </button>
    </form>
  );
}

export default Input;
