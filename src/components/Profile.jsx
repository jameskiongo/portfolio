function Profile() {
  return (
    <>
      <section className="container mx-auto h-100 pt-20 flex flex-col md:flex-row justify-center items-center">
        <div className="w-full flex md:justify-end md:w-1/2 justify-center">
          <img
            src="https://www.softrizon.com/wp-content/uploads/2020/12/RAD.svg"
            alt="Hero Image"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 flex flex-col items-center text-center sm:mt-0 pb-5">
          <h1 className="text-sm font-normal">Hello, I'm</h1>
          <h2 className="text-7xl mt-2 font-extrabold">James Kiongo</h2>
          <p className="text-3xl font-bold">Backend Developer</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="btn btn-outline rounded-3xl">Download Cv</button>
            <button className="btn btn-outline rounded-3xl">
              Contact Info
            </button>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-9"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
                ></path>
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-9"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336a9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          {/* <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"> */}
          {/*   Call to Action */}
          {/* </button> */}
        </div>
      </section>
    </>
  );
}

export default Profile;
