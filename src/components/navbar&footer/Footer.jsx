import React from "react";
import { Link } from "react-router-dom";

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="m-auto px-20 pt-24 pb-20 ">
        <div className="flex flex-row gap-y-5">
          <div className="w-3/4"></div>
          <div className="w-40 ">
            <ul>
              <li className="text-sm font-normal">Placing an order</li>
              <li className="mt-6 text-sm font-normal">Delivery options</li>
              <li className="mt-6 text-sm font-normal">Trecking a package</li>
              <li className="mt-6 text-sm font-normal">Country availability</li>
            </ul>
          </div>
          <div className="w-40 ">
            <ul>
              <li>Help Centre</li>
              <li className="mt-6 text-sm font-normal">Contact us</li>
              <li className="mt-6 text-sm font-normal">Device recycling</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex max-h-screen px-20 justify-between">
        <div>
          <ul className="flex flex-row">
            <li>
              <Link to="#">
                <div className="text-xl w-9 h-9">
                  <BsTwitter />
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="text-xl w-9 h-9">
                  <AiOutlineInstagram />
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="text-xl w-9 h-9">
                  <AiFillFacebook />
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="text-xl w-9 h-9">
                  <AiFillYoutube />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="px-3">Indonesia</div>
          <div className="px-3">Privacy</div>
          <div className="px-3">Google Nest</div>
          <div className="px-3">Commitment to Privacy</div>
          <div className="px-3">Sales Terms</div>
          <div className="px-3">Terms of service</div>
        </div>
      </div>
    </>
  );
}
