// import Modal1 from "./modals/Modal1";
import { useRef } from "react";
import Modal from "./modals/Modal";
// import { useState } from "react";

function Project() {
  const modalRef = useRef();
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <div>
      <section className="container mx-auto min-h-screen  md:pt-0 flex flex-col justify-center items-center">
        <div className="mx-auto w-full my-0 mt-12 items-center text-center">
          <h1 className="text-sm font-normal">Recent</h1>
          <h2 className="text-7xl mb-6 mt-2 font-extrabold">Projects</h2>
        </div>
        <div className="flex w-full lg:flex-row gap-4 md:gap-10 flex-col">
          <div className="card w-full flex flex-col p-6 items-center text-center py-6 shadow-xl">
            <div className="w-full py-6">
              <img
                src="https://scrapfly.io/blog/content/images/how-to-build-a-price-tracker-using-python-web-scraping_banner_light.svg"
                className="rounded-lg"
                alt=""
              />
            </div>
            <div className="w-full flex justify-between">
              <div>
                <p className="text-3xl text-left font-bold">
                  Amazon Price Tracker
                </p>
              </div>
              <div className="">
                <a className="cursor-pointer" onClick={openModal}>
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
                <Modal ref={modalRef} />
              </div>
            </div>
            {/* <Modal1 isOpen={isModalOpen} onClose={closeModal} /> */}
            <div className="flex justify-start mt-4">
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
          </div>
          <div className="card w-full flex flex-col p-6 items-center text-center py-6 shadow-xl">
            <div className="w-full py-6">
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
                <a href="">
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
          </div>
          <div className="card w-full flex flex-col p-6 items-center text-center py-6 shadow-xl">
            <div className="w-full">
              <div className="carousel rounded-box w-full">
                <img
                  src="https://scrapfly.io/blog/content/images/how-to-build-a-price-tracker-using-python-web-scraping_banner_light.svg"
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
                <a href="">
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
