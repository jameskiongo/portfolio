import DjangoIcon from "../Icons/DjangoIcon";
import GithubIcon from "../Icons/GithubIcon";
import PostgresIcon from "../Icons/PostgresIcon";
import ReactIcon from "../Icons/ReactIcon";
import TailwindIcon from "../Icons/TailwindIcon";
function AmazonProject() {
  return (
    <>
      <div className="w-full py-6">
        <img
          src="https://notify-me.rs/static/media/trackPriceChangesOnWebsitesEssentialsTips.2666437be83a11f1605d.jpg"
          alt=""
          className=" h-81 w-full"
        />
      </div>
      <div className="w-full flex justify-between">
        <div>
          <a href="">
            <p className="text-3xl text-left font-bold">Amazon Price Tracker</p>
          </a>
        </div>
        <div className="">
          <a className="cursor-pointer">
            <GithubIcon />
          </a>
        </div>
      </div>
      {/* <div className="flex justify-start mt-4"> */}
      {/* <p className="text-left"> */}
      {/*   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem */}
      {/*   ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod */}
      {/*   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim */}
      {/*   veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex */}
      {/*   ea commodo consequat. Duis aute irure dolor in reprehenderit in */}
      {/*   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur */}
      {/*   sint occaecat cupidatat non proident, sunt in culpa qui officia */}
      {/*   deserunt mollit anim id est laborum. */}
      {/* </p> */}
      {/* </div> */}
      <div className="flex justify-start py-4 gap-6 w-full">
        <ReactIcon />
        <TailwindIcon />
        <DjangoIcon />
        <PostgresIcon />
      </div>
    </>
  );
}

export default AmazonProject;
