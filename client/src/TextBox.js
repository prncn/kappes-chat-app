export default function TextBox({ bottom, search, send, color, placeholder }) {
  return (
    <form method="GET" className={'w-full ' + (bottom ? 'mt-auto' : '')}>
      <div class="relative text-gray-600 focus-within:text-gray-400 w-full">
        {search && (
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              class="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
        )}
        {send && (
          <span class="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              type="submit"
              class="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </span>
        )}
        <input
          type="search"
          name="q"
          className={
            'p-3 text-sm text-gray-500 rounded-lg pl-10 focus:outline-none w-full bg-gray-100 ' +
            color
          }
          placeholder={placeholder}
          autocomplete="off"
        />
      </div>
    </form>
  );
}
