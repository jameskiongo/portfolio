import { Link } from "react-scroll";
import myPic from "../assets/RAD.svg";
import mail from "../assets/mail.svg";
import Pdf from "../jameskiongo-Cv.pdf";
function Profile() {
  return (
    <>
      <section
        id="profile-section"
        name="profile-section"
        className="container mx-auto pt-24 flex flex-col md:flex-row justify-center items-center"
      >
        <div className="w-full flex md:justify-end md:w-1/2 justify-center">
          <img src={myPic} alt="Hero Image" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 flex flex-col items-center text-center sm:my-4">
          <h1 className="text-sm font-normal">Hi, I'm</h1>
          <h2 className="text-7xl mt-1 font-extrabold">James Kiongo</h2>
          <p className="text-3xl font-bold">Python Backend Developer</p>
          <p className="py-2 w-3/4">
            I'm a software engineer based in Kenya. I build websites using
            Django or Flask for backend development, MongoDB or MySQL for
            databases, and React for the frontend.
          </p>

          <div className="flex justify-center space-x-4 mt-1">
            <a
              href={Pdf}
              target="_blank"
              className="btn btn-outline rounded-3xl"
            >
              Download Cv
            </a>
            {/* <Link */}
            {/*   smooth={true} */}
            {/*   to="contact-section" */}
            {/*   className="btn btn-outline rounded-3xl" */}
            {/* > */}
            {/*   Contact Me */}
            {/* </Link> */}
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/jameskiongo/">
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
            <a href="https://github.com/jameskiongo">
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
            <a href="mailto:njihiakiongo@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={36}
                height={36}
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M6.5 5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5v-13A4.5 4.5 0 0 0 25.5 5zM28 10.403l-12 6.461l-12-6.461V9.5A2.5 2.5 0 0 1 6.5 7h19A2.5 2.5 0 0 1 28 9.5zM4 12.674l11.526 6.207a1 1 0 0 0 .948 0L28 12.674V22.5a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 22.5z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
