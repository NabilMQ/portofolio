import Link from "next/link";
import CustomButton from "../element/base_element/custom_button";
import CustomHeaderWithLine from "../element/base_element/custom_header_with_line";
import { Slide, ToastContainer, toast } from 'react-toastify';
import XMarkIcon from "../element/svg_element/xmark";
import CircleCheckIcon from "../element/svg_element/circle_check";
import EmailIcon from "../element/svg_element/email";
import GitHubIcon from "../element/svg_element/github";
import LinkedInIcon from "../element/svg_element/linkedin";
import { useWindowWidth } from "../global_data/window_size_context";

export default function BodyContact() {

  const windowSize = useWindowWidth();

  const contactData = [
    {"icon": <EmailIcon className="md:w-6 md:h-6 w-[25px] h-[25px] fill-light-inverse-surface dark:fill-dark-inverse-surface" />, "contact": "nabilmq13@gmail.com", "link": "mailto:nabilmq13@gmail.com?subject=&body="},
    {"icon": <GitHubIcon className="md:w-6 md:h-6 w-[25px] h-[25px] fill-light-inverse-surface dark:fill-dark-inverse-surface" />, "contact": "NabilMQ", "link": "https://github.com/NabilMQ"},
    {"icon": <LinkedInIcon className="md:w-6 md:h-6 w-[25px] h-[25px] fill-light-inverse-surface dark:fill-dark-inverse-surface" />, "contact": "Nabil Mutawakkil Qisthi", "link": "https://www.linkedin.com/in/nabil-mutawakkil-qisthi-191b9729a/"},
  ];
  
  return (
    <section className="w-full space-y-6" id="Contact">
      <ToastContainer />
      <CustomHeaderWithLine text={"Contact"} />
      <div className="max-w-[1280px] flex xsm:flex-wrap xsm:flex-row flex-col mx-auto gap-3 items-center justify-center-safe box-border px-4">
        {
          contactData.map(contact => (
            <Link className="xsm:w-[220px] w-full" key={contact.link} href={contact.link} target="_blank">
              <CustomButton onTap={() => {
                if (contact.contact.includes("gmail")) {
                  navigator.clipboard.writeText("nabilmq13@gmail.com");
                  toast.dismiss()
                  toast(
                    <div className="w-full flex flex-row space-x-2 justify-between items-center-safe">
                      <div className="flex flex-row space-x-2 items-center-safe">
                        <CircleCheckIcon className="md:w-6 md:h-6 w-[25px] h-[25px]" />
                        <p className="text-[#D4F1D4] md-typescale-body-medium">
                          Email Copied!
                        </p> 
                      </div>
                      <button onClick={() => {toast.dismiss()}} className="cursor-pointer hover:bg-[#2cb32c] rounded-[4px] p-1">
                        <XMarkIcon className="md:w-6 md:h-6 w-[25px] h-[25px]" />
                      </button>
                    </div>,
                    {
                      type:"success",
                      position: "top-right",
                      autoClose: 3000,
                      icon: false, 
                      hideProgressBar: true,
                      closeOnClick: false,
                      pauseOnHover: false,
                      draggable: true,
                      transition: Slide,
                      closeButton: false,
                      progress: undefined,
                      theme: "colored",
                    }
                  );
                }
              }} style="xsm:w-[220px] w-full"> 
                <div className="flex flex-row space-x-2 items-center">
                  {contact.icon}
                  {
                    windowSize!.windowWidth >= 768
                      ? <p className="md-typescale-body-medium w-full text-center line-clamp-1 text-light-inverse-surface dark:text-dark-inverse-surface">
                          {contact.contact}
                        </p>
                      : <p className="md-typescale-body-small w-full text-center line-clamp-1 text-light-inverse-surface dark:text-dark-inverse-surface">
                          {contact.contact}
                        </p>
                  }
                </div>
              </CustomButton>
            </Link>
          ))
        }
      </div>
    </section>
  );
}