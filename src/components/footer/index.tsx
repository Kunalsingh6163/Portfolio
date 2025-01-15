import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ArrayData = [
  {
    id: 1,
    text: "Home",
    url: "#",
  },
  {
    id: 2,
    text: "Project",
    url: "#",
  },
  {
    id: 3,
    text: "Contact",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-blue py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="flex flex-col space-y-2 px-8">
          {ArrayData.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className="text-blue-600 hover:underline text-lg font-medium  dark:text-white"
            >
              {item.text}
            </Link>
          ))}
        </div>

        {/* Center Section */}
        <div className="text-center md:text-left py-4">
          <address className="bg-slate-300 text-black font-medium p-3 rounded">
            Address: Gaya, BIHAR
          </address>
          <p className="mt-2">singhkunal2211997@gmail.com</p>
          <p>+91 7739986163</p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 px-8">
          {/* <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </a> */}
          <a
            href="https://github.com/Kunalsingh6163"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white transition"
            aria-label="Twitter"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/singhkunal97/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white transition"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-singh-041423315/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
