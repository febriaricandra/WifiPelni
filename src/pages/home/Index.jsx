import { useState } from "react";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Index() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

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
            <div
              className={`flex flex-col bg-[#F1F1F1] border p-2 rounded-lg justify-center items-center w-full ${
                selectedItem === "1 Jam" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("1 Jam")}
            >
              <h1
                className={`font-bold ${
                  selectedItem === "1 Jam" ? "text-red-500" : "text-black"
                }`}
              >
                Rp 20.000
              </h1>
              <p
                className={`text-gray-500 text-sm ${
                  selectedItem === "1 Jam" ? "text-red-500" : ""
                }`}
              >
                1 Jam
              </p>
            </div>
            <div
              className={`flex flex-col bg-[#F1F1F1] border p-2 rounded-lg justify-center items-center w-full ${
                selectedItem === "2 Jam" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("2 Jam")}
            >
              <h1
                className={`font-bold ${
                  selectedItem === "2 Jam" ? "text-red-500" : "text-black"
                }`}
              >
                Rp 20.000
              </h1>
              <p
                className={`text-gray-500 text-sm ${
                  selectedItem === "2 Jam" ? "text-red-500" : ""
                }`}
              >
                2 Jam
              </p>
            </div>
            <div
              className={`flex flex-col bg-[#F1F1F1] border p-2 rounded-lg justify-center items-center w-full ${
                selectedItem === "3 Jam" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("3 Jam")}
            >
              <h1
                className={`font-bold ${
                  selectedItem === "3 Jam" ? "text-red-500" : "text-black"
                }`}
              >
                Rp 20.000
              </h1>
              <p
                className={`text-gray-500 text-sm ${
                  selectedItem === "3 Jam" ? "text-red-500" : ""
                }`}
              >
                3 Jam
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-2">
          <h1 className="font-bold text-black">Pembayaran</h1>

          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            class="flex flex-col bg-[#F1F1F1] p-4 rounded-md"
            type="button"
            onClick={toggleDropdown}
          >
            <div className="flex flex-row gap-2 items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <img src="src/assets/image/gopay.svg" alt="img" />
                Gopay
              </div>
              {isDropdownOpen ? (
                <RiArrowDownSLine color="red" size={32} />
              ) : (
                <RiArrowRightSLine color="red" size={32} />
              )}
            </div>
            {isDropdownOpen && (
              <div id="dropdownHover" data-dropdown-content className="">
                <div class="flex flex-row gap-2 items-center my-2">
                  <img src="src/assets/image/gopay.svg" alt="img" />
                  <h1>Gopay</h1>
                </div>
                <div class="flex flex-row gap-2 items-center my-2">
                  <img src="src/assets/image/ovo.svg" alt="img" />
                  <h1>Ovo</h1>
                </div>
              </div>
            )}
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
