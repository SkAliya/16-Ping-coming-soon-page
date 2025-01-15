function Header() {
  return (
    <header>
      <h2 className="text-color-dark-blu mb-3 text-2xl font-bold uppercase sm:mb-4 sm:text-3xl md:mb-8 md:text-4xl">
        ping<span className="text-primary-color">.</span>
      </h2>
      <h1 className="mb-3 text-2xl font-extralight tracking-normal text-color-gray-light sm:mb-4 sm:text-3xl md:text-4xl md:text-5xl">
        We are launching{' '}
        <span className="font-bold text-color-dark-blue">soon!</span>
      </h1>
      <p className="md:text-exlg mb-8 sm:mb-5 md:mb-6">
        Subscribe and get notified
      </p>
    </header>
  );
}

export default Header;
