import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" items-stretch bg-[#21272a] text-white py-5 mt-10">
      <div className="mx-auto grid justify-center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left lg:gap-2">
        <div
          id="contact"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-[#7d0323] hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-md font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none hover:text-[#7d0323]">
              Contact
            </span>
          </h2>
          <a
            href="mailto:info@daniellemani.com"
            className={`m-0 max-w-[30ch] text-sm opacity-50`}
          >
            info@daniellemani.com
          </a>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>0642879373</p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-[#7d0323] hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-md font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none hover:text-[#7d0323]">
              Siret{" "}
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            53168632700028
          </p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-[#7d0323] hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-md font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none hover:text-[#7d0323]">
              Social
            </span>
          </h2>
          <div className="m-0 max-w-[30ch] flex gap-2 justify-center font-mono lg:justify-start  text-2xl opacity-50 text-balance">
            <Link
              className="hover:text-[#7d0323] cursor-pointer"
              href="https://www.instagram.com/dan_man_78?igsh=MTl2ZmVoZ2pyYnJ3bQ=="
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              className="hover:text-[#7d0323] cursor-pointer"
              href="https://www.facebook.com/daniela.roncin"
              target="_blank"
            >
              <FaFacebookSquare />
            </Link>

            {/* <FaSquareXTwitter />
            <FaLinkedin /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
