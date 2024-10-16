import DjangoIcon from "../Icons/DjangoIcon";
import GithubIcon from "../Icons/GithubIcon";
import PostgresIcon from "../Icons/PostgresIcon";
import ReactIcon from "../Icons/ReactIcon";
import TailwindIcon from "../Icons/TailwindIcon";
import one from "../../assets/blog-shots/one.png";
import ResizeIcon from "../Icons/ResizeIcon";
import SqLiteIcon from "../Icons/SqLiteIcon";
import DrfIcon from "../Icons/DrfIcon";
import BlogModal from "../modals/BlogModal";
// import { blogShots } from "../../assets/blog-shots";
function BlogApp() {
  return (
    <>
      <div className="w-full py-6">
        <img src={one} className="h-81 w-full" alt="" />
      </div>
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="text-3xl text-left font-bold">Blog Application</p>
        </div>
        <div className="">
          <a
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="cursor-pointer"
          >
            <ResizeIcon />
          </a>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box max-w-2xl">
              <BlogModal />
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
      <div className="flex justify-start py-4 gap-6 w-full">
        <div className="group flex relative">
          <span className="">
            <DjangoIcon />
          </span>
          <span
            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
          >
            Django
          </span>
        </div>
        <div className="group flex relative">
          <span className="">
            <ReactIcon />
          </span>
          <span
            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
          >
            React
          </span>
        </div>
        <div className="group flex relative">
          <span className="">
            <DrfIcon />
          </span>
          <span
            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
          >
            DjangoRestFramework
          </span>
        </div>
        <div className="group flex relative">
          <span className="">
            <TailwindIcon />
          </span>
          <span
            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
          >
            TailwindCss
          </span>
        </div>
        <div className="group flex relative">
          <span className="">
            <SqLiteIcon />
          </span>
          <span
            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
          >
            SQLite
          </span>
        </div>
      </div>
    </>
  );
}

export default BlogApp;
