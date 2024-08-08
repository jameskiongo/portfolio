import AmazonProject from "./Projects/AmazonProject";
import RecipeProject from "./Projects/RecipeProject";
import ChatProject from "./Projects/ChatProject";
function Project() {
  return (
    <div>
      <section
        id="project-section"
        name="project-section"
        className="container mx-auto min-h-screen  md:pt-0 flex flex-col justify-center items-center"
      >
        <div className="mx-auto w-full my-0 mt-12 items-center text-center">
          <h1 className="text-sm font-normal">Recent</h1>
          <h2 className="text-7xl mb-6 mt-2 font-extrabold">Projects</h2>
        </div>
        <div className="flex w-full lg:flex-row gap-4 md:gap-10 flex-col lg:py-6">
          <div className="card w-full flex flex-col p-6 items-center text-center py-6 shadow-xl">
            <AmazonProject />
          </div>
          <div className="card w-full flex flex-col p-6 items-center text-center py-6 shadow-xl">
            <RecipeProject />
          </div>
        </div>
        <div className="flex w-full lg:flex-row gap-4 md:gap-10 flex-col lg:py-6">
          <div className="card w-full flex flex-col p-6 items-center text-center py-6 shadow-xl">
            <ChatProject />
          </div>
          <div className="card w-full flex flex-col p-6 items-center text-center py-6 shadow-xl">
            <ChatProject />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
