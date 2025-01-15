function Button({ children }) {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-color-input-field text-primary-color hover:bg-primary-color hover:text-white">
      {children}
    </button>
  );
}

export default Button;
