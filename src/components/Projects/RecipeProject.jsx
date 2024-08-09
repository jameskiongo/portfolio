import ExpressIcon from "../Icons/ExpressIcon";
import GithubIcon from "../Icons/GithubIcon";
import NodeIcon from "../Icons/NodeIcon";
import ReactIcon from "../Icons/ReactIcon";

function RecipeProject() {
  return (
    <>
      <div className=" w-full py-6">
        <img
          src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*zPmZTe5EbzJKFz6kJEWLyQ.jpeg"
          alt=""
          className="rounded-lg"
        />
      </div>

      <div className="w-full flex justify-between">
        <div>
          <p className="text-3xl text-left font-bold">Recipe App</p>
        </div>
        <div className="">
          <a className="cursor-pointer">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="flex justify-start mt-4">
        <p className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex justify-start py-4 gap-6 w-full">
        <NodeIcon />
        <ExpressIcon />
        <ReactIcon />
      </div>
    </>
  );
}

export default RecipeProject;
