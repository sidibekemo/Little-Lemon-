import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">
          <span>Little Lemon</span>
        </div>
        <Nav />
      </div>
    </header>
  );
}
