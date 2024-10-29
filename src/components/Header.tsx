import mohLogo from "../assets/Logo.webp";
import gitHub from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import x from "../assets/twitter.webp";
import moon from "../assets/cil_moon.webp";

function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img className="h-8 w-24" src={mohLogo} alt="" />
            </a>
          </div>

          <div className="hidden md:block ">
            <nav aria-label="Global">
              <ul className="flex items-center gap-10 text-xl">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Skills{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-10">
            <div className="hidden sm:gap-4 md:flex  ">
              <a href="https://github.com/Moh7ven">
                <img src={gitHub} alt="" className="h-[30] w-[30]" />
              </a>

              <a href="https://www.linkedin.com/in/mohamed-sangare-980743208">
                <img src={linkedin} alt="" className="h-[30] w-[30]" />
              </a>

              <a href="https://x.com/Moh7ven">
                <img src={x} alt="" className="h-[30] w-[30]" />
              </a>
            </div>

            <div>
              <button className="rounded-full h-12 w-12 bg-green-500 bg-opacity-30 border-[1px] border-green-500 flex items-center justify-center">
                <img src={moon} alt="" />
              </button>
            </div>
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
