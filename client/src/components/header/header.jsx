

function Header(){
    return(
        <header class="bg-white bg-slate-900">
  <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" class="hidden md:block">
        <ul class="flex items-center gap-6 text-sm">
          <li>
            <a
              class="text-neutral-50 transition hover:text-purple-500/75 text-white dark:hover:text-white/75"
              href="#"
            >
              Categorias
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
          {/* <a
            class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
            href="#"
          >
            Login
          </a> */}

<a
  className="group inline-block rounded bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="#"
>
  <span className="block rounded-sm bg-black px-8 py-2 text-sm font-medium text-white group-hover:bg-transparent ">
    Login
  </span>
</a>

          <a
            class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Register
          </a>
        </div>

        <button
          class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
    )
}

export default Header;