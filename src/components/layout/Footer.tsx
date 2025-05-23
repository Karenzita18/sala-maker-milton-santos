"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaAngleDoubleRight,
  FaMapPin,
  FaClock,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

const Footer = () => {
  const data = new Date(Date.now());
  return (
    <footer className={`bg-brand-500`}>
      <div className="row md:py-8 py-3 px-5">
        <div className="container">
          <div className="grid grid-cols-4 md:gap-3">
            <div className="col-span-4 md:col-span-1 mb-3">
              <div className="md:max-w-[11rem] max-w-[12rem] ">
                <Link
                  href="/"
                >
                  <Image
                    src="/img/logooficial1.png"
                    width={400}
                    height={400}
                    alt="Logo Footer" 
                  />
                </Link>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3 grid md:grid-cols-3 gap-5">
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Links Importantes</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Home
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/blog">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Contato</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <a
                      href="https://www.instagram.com/emefpraiazul/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-2xl"/>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Endereço</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <p className="text-white">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaMapPin />
                      </span>
                      R. Felício Zamperlin, 200 - Parque Dom Pedro II, Americana - SP, 13476-622
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-300 py-1 px-5">
        <div className="container flex place-content-center gap-1 py-3">
          <div className="flex items-center text-center">
            <p className="text-white text-md">
               © {data.getFullYear()} Todos os direitos reservados. Desenvolvido por <span className="hover:underline">
                <a href="https://www.karencode.com.br/" target="_blank" rel="noopener noreferrer"> Karen Souza</a>
               </span>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
