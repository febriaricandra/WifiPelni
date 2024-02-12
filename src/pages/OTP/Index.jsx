import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col h-screen">
      <div className="border-b">
        <div className="flex flex-row gap-1 m-4 items-center">
          <GoArrowLeft size={26} />
          <h1 className="text-black">Kode OTP</h1>
        </div>
      </div>

      <div className="m-4">
        <p className="text-gray-400">
          Masukan kode OTP yang kami kirimkan melalui WhatsApp Anda yang
          terdaftar +62 81273817293
        </p>
        <div className="flex flex-row justify-center items-center">
          <input
            class="m-2 border h-12 w-12 text-center form-control rounded"
            type="text"
            id="first"
            maxlength="1"
          />
          <input
            class="m-2 border  h-12 w-12 text-center form-control rounded"
            type="text"
            id="second"
            maxlength="1"
          />
          <input
            class="m-2 border h-12 w-12  text-center form-control rounded"
            type="text"
            id="third"
            maxlength="1"
          />
          <input
            class="m-2 border h-12 w-12  text-center form-control rounded"
            type="text"
            id="fourth"
            maxlength="1"
          />
          <input
            class="m-2 border h-12 w-12  text-center form-control rounded"
            type="text"
            id="fifth"
            maxlength="1"
          />
          <input
            class="m-2 border  h-12 w-12  text-center form-control rounded"
            type="text"
            id="sixth"
            maxlength="1"
          />
        </div>
        <p className="text-right font-bold">kirim ulang kode</p>
      </div>

      <div className="m-4">
        <div className="button">
        <Link to="/success">
          <button className="bg-red-500 rounded-lg p-2 text-white w-full">
            <p className="mx-4">Verifikasi</p>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
