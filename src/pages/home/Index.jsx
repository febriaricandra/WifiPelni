import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Index() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col h-screen justify-between m-4">
      <div className="">
        <div className="flex flex-row gap-1 items-center">
          <img
            className="w-12"
            src="src/assets/image/Logo Light.svg"
            alt="logo light"
          />
          <h1 className="font-bold text-red-500">Asianet.id</h1>
        </div>
        <div className="flex flex-col my-2">
          <h1 className="font-bold text-black">Hai, Anna Lubin!</h1>
          <p className="text-gray-500">081273817293</p>
        </div>

        <div className="flex flex-col bg-[#F1F1F1] border p-2 rounded-lg my-2">
          <div className="flex flex-row justify-between my-2">
            <div className="flex flex-col">
              <p className="text-sm text-gray-400">Paket layanan</p>
              <h1 className="font-bold text-black">Free Access</h1>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-400">Harga</p>
              <h1 className="font-bold text-black">Rp 0</h1>
            </div>
          </div>
          <div className="flex flex-row justify-between my-2">
            <div className="flex flex-col">
              <p className="text-sm text-gray-400">Tersisa</p>
              <h1 className="font-bold text-black">10 Menit</h1>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-400">Durasi Paket</p>
              <h1 className="font-bold text-black">15 Menit</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-2">
          <h1 className="font-bold text-black">Pembelian Paket</h1>
          <div className="flex flex-row w-full gap-2 justify-around">
            <div className="flex flex-col bg-[#F1F1F1] border p-2 rounded-lg justify-center items-center w-full">
              <h1 className="font-bold text-black">Rp 20.000</h1>
              <p className="text-gray-500 text-sm">1 Jam</p>
            </div>
            <div className="flex flex-col bg-[#F1F1F1] border p-2 rounded-lg justify-center items-center w-full">
              <h1 className="font-bold text-black">Rp 20.000</h1>
              <p className="text-gray-500 text-sm">2 Jam</p>
            </div>
            <div className="flex flex-col bg-[#F1F1F1] border p-2 rounded-lg justify-center items-center w-full">
              <h1 className="font-bold text-black">Rp 20.000</h1>
              <p className="text-gray-500 text-sm">3 Jam</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-2">
          <h1 className="font-bold text-black">Pembayaran</h1>

          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            class="flex flex-row bg-[#F1F1F1] p-4 justify-between items-center rounded-md"
            type="button"
          >
            <div className="flex flex-row items-center gap-2">
              <img src="src/assets/image/gopay.svg" alt="img" />
              Gopay
            </div>
            <RiArrowRightSLine color="red" size={32} />
          </button>
        </div>
      </div>
      <div className="">
        <Link to="/payment-success">
          <button className="bg-red-500 rounded-lg p-2 text-white w-full">
            <p className="mx-4">Beli Paket</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
