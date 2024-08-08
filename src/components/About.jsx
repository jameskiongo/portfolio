function About() {
  return (
    <>
      <section
        id="about-section"
        name="about-section"
        className="container mx-auto space-x-4 min-h-screen  md:pt-0 flex flex-col justify-center items-center text-center"
      >
        <div className=" w-full my-0 mt-12 flex flex-col items-center text-center">
          <h1 className="text-sm font-normal">Get to know more</h1>
          <h2 className="text-7xl mb-6 mt-2 font-extrabold">About me</h2>
        </div>
        <div className="hero-content py-0 flex-col lg:flex-row">
          <img
            src="https://nbackchallenge.com/images/raiseYourIQ.svg"
            className="max-w-sm"
          />
          <div className="hero-content flex flex-col text-center">
            <div className="flex w-full flex-row gap-4 md:gap-10">
              <div className="card w-full flex flex-col items-center text-center py-6 shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm0-2h16V8H4zm6-13h4V4h-4zM4 19V8z"
                  ></path>
                </svg>
                <h3 className="font-extrabold text-lg">Experience</h3>
                <p className="font-normal text-sm">
                  2+ years <br />
                  Backend Development
                </p>
              </div>

              <div className="card w-full flex flex-col items-center text-center py-6 shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-8"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z"
                  ></path>
                </svg>
                <h3 className="font-extrabold text-lg">Education</h3>
                <p className="font-normal text-sm">
                  B.Sc. Bachelors Degree
                  <br />
                  Information Technology
                </p>
              </div>
            </div>
            <p className="py-6">
              I am a graduate with a Bachelor's degree in Information Technology
              from Africa International University, specializing in Software
              Engineering. My passion for programming has driven me to master a
              variety of skills and technologies. I specialize in building
              websites from the ground up, using Django and Flask for
              server-side development, MongoDB or MySQL for databases, and React
              for client-side interfaces.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
