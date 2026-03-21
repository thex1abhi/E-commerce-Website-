import { footerList } from "@/data/data";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
} from "@remixicon/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-10 pb-6">
      <div className="container mx-auto px-6">

        {/* {FOOTER TOP } */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-10 border-b border-neutral-800">

          {/* Column 1 — Description */}
          <div className="space-y-3">
            <span className="text-xl font-semibold text-amber-600 ">Royalwoods</span>
            <p className="text-neutral-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur officiis sed ipsum dicta!
            </p>
          </div>

          {/* Column 2 & 3 — Footer Lists */}
          {footerList.map((item) => (
            <div key={item.id}>
              <p className="font-semibold mb-3">{item.title}</p>

              <ul className="space-y-2 text-sm text-neutral-400">
                {item.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-white transition">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4 — Contact + Social */}
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">Get In Touch</p>
              <p className="text-sm text-neutral-400">
                Email:{" "}
                <a href="mailto:yabhishekk480@gmail.com" className="hover:text-white">
                  yabhishekk480@gmail.com
                </a>
              </p>
              <p className="text-sm text-neutral-400">
                Phone:{" "}
                <a href="tel:99674XXXX" className="hover:text-white">
                  99674XXXX
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[RiFacebookFill, RiInstagramLine, RiTwitterXLine].map(
                (Icon, index) => (
                  <a key={index} href="#" className="hover:text-neutral-300">
                    <Icon size={20} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM  */}
        <p className="text-center text-sm text-neutral-500 pt-6">
          &copy; {new Date().getFullYear()} Royalwoods. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;