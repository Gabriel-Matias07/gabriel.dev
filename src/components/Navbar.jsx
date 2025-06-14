export default function Navbar() {
  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/pic.jpeg" className="h-8 rounded-full" alt="User Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Gabriel</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            title="Conheça o meu portifolio com um belo passeio"
            type="button"
            className="text-white cursor-pointer hover:scale-120 transition-all duration-300 ease-in-out"
          >
            Fazer Tour Pelo Site ➩
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:scale-125 transition-all duration-300 ease-in-out"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:scale-125 transition-all duration-300 ease-in-out"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:scale-125 transition-all duration-300 ease-in-out"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:scale-125 transition-all duration-300 ease-in-out"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
