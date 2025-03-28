import React from "react";
import {
  FaGithub,
  FaX,
  FaLinkedin,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <ul className="flex space-x-5">
                              <li>
                                <a href="https://github.com/vivek-singh-123" target="_blank">
                                  <FaGithub className="text-2xl cursor-pointer" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.linkedin.com/in/vivek-singh-03b99824a/" target="_blank">
                                  <FaLinkedin className="text-2xl cursor-pointer" />
                                </a>
                              </li>
                              <li>
                                <a href="https://x.com/viveksi28344569?s=21" target="_blank">
                                  <FaX className="text-2xl cursor-pointer" />
                                </a>
                              </li>
                            </ul>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025, All rights reserved.
              </p>
              <p className="text-sm">Vivek Singh</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;