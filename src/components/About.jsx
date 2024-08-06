function About() {
  return (
    <>
      <div className=" w-full mt-12 flex flex-col items-center text-center">
        <h1 className="text-sm font-normal">Get to know more</h1>
        <h2 className="text-7xl mt-2 font-extrabold">About me</h2>
      </div>
      <section className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://nbackchallenge.com/images/raiseYourIQ.svg"
            className="max-w-sm"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
