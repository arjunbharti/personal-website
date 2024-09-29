import Link from "next/link";
import MaxWidthContainer from "./MaxWidthContainer";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm">
      <MaxWidthContainer>
        <div className="flex flex-wrap items-center gap-y-2 justify-between">
          <Link href='/' className="text-sm lg:text-2xl font-bold">Arjun Bharti</Link>
          <nav className="flex gap-1">
            <Link href="/work">
              work
            </Link>
            <span>
              {`/`}
            </span>
            <Link href="/projects">
              projects
            </Link>
            <span>
              {`/`}
            </span>
            <Link href="/blog">
              blog
            </Link>
          </nav>
        </div>
      </MaxWidthContainer>
    </header>
  );
};

export default Header;
