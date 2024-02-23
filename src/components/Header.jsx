import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-8 md:mb-16">
      <img src={logo} alt="A canvas" className="mb-8 w-44 h-44" />
      <h1 className="text-2xl md:text-4xl mb-2 font-semibold text-center uppercase text-amber-900 font-title">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
