import GithubIcon from "./Icons/GithubIcon";
function Contact() {
  return (
    <>
      <section className="container mx-auto min-h-screen  md:pt-0 flex flex-col justify-center items-center">
        <div className="mx-auto w-full my-0 mt-12 items-center text-center">
          <h1 className="text-sm font-normal">Get In Touch</h1>
          <h2 className="text-7xl mb-6 mt-2 font-extrabold">Contact Me</h2>
        </div>
        <div className="card w-full flex flex-col gap-4 items-center">
          <article className="flex justify-around gap-2 items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
              ></path>
            </svg>
            <a href="mailto:njihiakiongo@gmail.com" className="text-lg">
              NjihiaKiongo@Gmail.com
            </a>
          </article>
          <article className="flex justify-around gap-2 items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              ></path>
            </svg>
            <a
              href="https://www.linkedin.com/in/jameskiongo/"
              className="text-lg"
            >
              LinkedIn
            </a>
          </article>

          <article className="flex justify-around gap-2 items-center text-center">
            <GithubIcon />
            <a href="https://github.com/jameskiongo" className="text-lg">
              Github
            </a>
          </article>

          <article className="flex justify-around gap-2 items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
              ></path>
            </svg>
            <a href="https://x.com/JamesNj33424546" className="text-lg">
              Twitter
            </a>
          </article>
        </div>
      </section>
      <div className="flex flex-row justify-center py-4">
        <p>
          Copyright © {new Date().getFullYear()} James Kiongo. All Rights
          Reserved.
        </p>
      </div>
    </>
  );
}

export default Contact;
