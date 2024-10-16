import one from "../../assets/blog-shots/six.png";
import two from "../../assets/blog-shots/three.png";
import three from "../../assets/blog-shots/five.png";
import { register } from "swiper/element/bundle";
import GithubIcon from "../Icons/GithubIcon";
register();
function BlogModal() {
  return (
    <>
      <div>
        <div>
          <swiper-container
            slides-per-view="1"
            navigation="true"
            classname="w-full flex justify-center items-center"
          >
            <swiper-slide className="flex justify-center items-center w-full h-[400px]">
              <img src={two} alt="" className=" w-full h-full object-contain" />
            </swiper-slide>
            <swiper-slide className="flex justify-center items-center w-full h-[400px]">
              <img
                src={three}
                alt=""
                className=" w-full h-full object-contain"
              />
            </swiper-slide>
            <swiper-slide className="flex justify-center items-center w-full h-[400px]">
              <img src={one} alt="" className="w-full h-full object-contain" />
            </swiper-slide>
          </swiper-container>
        </div>
        <div className="flex w-full flex-col justify-center items-center mt-3">
          <div className="flex flex-row justify-between w-5/6 pb-3">
            <h3 className="font-bold text-lg text-left underline">
              Blog Application
            </h3>
            <a href="" className="">
              <GithubIcon />
            </a>
          </div>
          <div className="text-left w-5/6">
            <p className="">
              This web application allows users to create, view, edit, and
              manage blog posts and comments. Users can also view and update
              their profiles. The app features:
            </p>
            <ul className="list-disc list-inside pt-1 pl-5">
              <li>
                <strong>Post Management</strong>: Users can create and edit blog
                posts with ease.
              </li>
              <li>
                <strong>Commenting System</strong>: Users can interact by adding
                and editing comments on posts.
              </li>
              <li>
                <strong>User Profiles</strong>: Each user has a personalized
                profile page, with the ability to update personal information.
              </li>
            </ul>
            <p className="pt-3">
              <strong>Technologies used</strong>: Django, Django REST Framework,
              React
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogModal;
