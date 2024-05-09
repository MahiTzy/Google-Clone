function App() {
  return (
    <>
      <div className="h-screen flex flex-col items-center">
        <header className="flex w-full h-15 justify-end">
          <div className="flex space-x-4 items-center p-3">
            <p className="hover:cursor-pointer hover:underline text-black-500">
              Gmail
            </p>
            <p className="hover:cursor-pointer hover:underline text-black-500">
              Images
            </p>
            <svg
              className="w-8 h-8 p-1 text-gray-500 hover:cursor-pointer hover:bg-gray-300 rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M14 10V14H10V10H14ZM16 10H21V14H16V10ZM14 21H10V16H14V21ZM16 21V16H21V20C21 20.5523 20.5523 21 20 21H16ZM14 3V8H10V3H14ZM16 3H20C20.5523 3 21 3.44772 21 4V8H16V3ZM8 10V14H3V10H8ZM8 21H4C3.44772 21 3 20.5523 3 20V16H8V21ZM8 3V8H3V4C3 3.44772 3.44772 3 4 3H8Z"></path>
            </svg>
            <img
              className="w-8 h-8 rounded-full border-1 hover:border-4 hover:border-gray-300 cursor-pointer"
              src="src\assets\pikaso-composition(1).png"
            ></img>
          </div>
        </header>
        <form className="h-40 flex flex-col mt-36 w-4/5 items-center">
          <div>
            <img className="h-24" src="src\assets\klipartz.com.png" />
          </div>
          <div className="w-full flex border border-gray-200 rounded-full py-3 px-5 hover:shadow-lg max-w-xl mt-6 items-center">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
            </svg>
            <input
              className="flex grow focus:outline-none ml-2"
              type="text"
              name=""
            ></input>
            <svg
              className="h-5 text-gray-400 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M11.9998 3C10.3429 3 8.99976 4.34315 8.99976 6V10C8.99976 11.6569 10.3429 13 11.9998 13C13.6566 13 14.9998 11.6569 14.9998 10V6C14.9998 4.34315 13.6566 3 11.9998 3ZM11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z"></path>
            </svg>
          </div>
          <div className="mt-8 space-x-2 flex flex-col space-y-2 lg:space-y-0 lg:flex-row">
            <button className="p-2 ring-gray-200 text-black-400 rounded-md hover:ring-1 bg-gray-50">
              Google Search
            </button>
            <button className="p-2 ring-gray-200 text-black-400 rounded-md hover:ring-1 bg-gray-50">
              I&rsquo;am Feeling Lucky
            </button>
          </div>
        </form>
        <footer className="flex flex-col w-full text-sm bg-gray-100 absolute bottom-0">
          <div className="p-3 mx-4 ">
            <p></p>India
          </div>
          <hr />
          <div className="grid md:grid-cols-2 sm:grid-cols-1 mx-5 p-3">
            <div className="flex space-x-5">
              <p className="cursor-pointer hover:underline">About</p>
              <p className="cursor-pointer hover:underline">Advertising</p>
              <p className="cursor-pointer hover:underline">Business</p>
              <p className="cursor-pointer hover:underline">How Search works</p>
            </div>
            <div className="flex md:justify-end justify-center space-x-5 ">
              <p className="cursor-pointer hover:underline">Privacy</p>
              <p className="cursor-pointer hover:underline">Terms</p>
              <p className="cursor-pointer hover:underline">Settings</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
