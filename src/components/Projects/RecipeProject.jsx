import ExpressIcon from "../Icons/ExpressIcon";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 21.308L8.442 17.75l.714-.713L11.5 19.38V14.5h1v4.875l2.339-2.344l.719.719zm-5.75-5.75L2.692 12l3.552-3.552l.714.714L4.619 11.5H9.5v1H4.625l2.344 2.339zm11.5 0l-.713-.714L19.38 12.5H14.5v-1h4.875l-2.344-2.339l.719-.719L21.308 12zM11.5 9.5V4.62L9.156 6.963l-.714-.714L12 2.692l3.558 3.558l-.714.714L12.5 4.618V9.5z"
              ></path>
            </svg>
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
