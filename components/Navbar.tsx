const navigation = [
  { href: "#discover", label: "Discover" },
  { href: "#library", label: "Library" },
  { href: "#about", label: "About" }
];

export default function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Noveli home">
        noveli<span>.</span>
      </a>

      <nav aria-label="Main navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button-small" href="#discover">
        Start reading
      </a>
    </header>
  );
}
