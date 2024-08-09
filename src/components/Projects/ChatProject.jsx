import DjangoIcon from "../Icons/DjangoIcon";
import MaterialIcon from "../Icons/MaterialIcon";
import GithubIcon from "../Icons/GithubIcon";
import ReactIcon from "../Icons/ReactIcon";
import TailwindIcon from "../Icons/TailwindIcon";

function ChatProject() {
  return (
    <>
      <div className="w-full">
        <div className="rounded-box w-full py-6">
          <img
            src="https://scrapfly.io/blog/content/images/how-to-build-a-price-tracker-using-python-web-scraping_banner_light.svg"
            className="rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div>
          <p className="text-3xl text-left font-bold">
            Online Chat Application
          </p>
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
        <DjangoIcon />
        <ReactIcon />
        <TailwindIcon />
        <MaterialIcon />
      </div>
    </>
  );
}

export default ChatProject;
