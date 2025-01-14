function Header() {
  return (
    <header>
      <h2 className="text-color-dark-blu mb-8 text-3xl font-bold uppercase md:text-4xl">
        ping<span className="text-primary-color">.</span>
      </h2>
      <h1 className="mb-4 text-4xl font-extralight tracking-normal text-color-gray-light md:text-5xl">
        We are launching{' '}
        <span className="font-bold text-color-dark-blue">soon!</span>
      </h1>
      <p className="md:text-exlg mb-6">Subscribe and get notified</p>
    </header>
  );
}

export default Header;
