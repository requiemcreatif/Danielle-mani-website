import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" items-stretch">
      <div className="mx-auto grid justify-center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-md font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              Contact
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            info@daniellemani.com
          </p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>0642879373</p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-md font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              Localisation{" "}
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            53 Boulevard de Pesaro 92000 Nanterre
          </p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-md font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              Siret{" "}
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            53168632700028
          </p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-md font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              Social
            </span>
          </h2>
          <div className="m-0 max-w-[30ch] flex gap-2 justify-center font-mono lg:justify-start  text-2xl opacity-50 text-balance">
            <FaInstagram />
            <FaFacebookSquare />
            <FaSquareXTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
