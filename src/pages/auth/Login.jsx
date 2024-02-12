import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex flex-col m-4 h-screen">
      <div className="flex flex-row gap-1 items-center">
        <img
          className="w-12"
          src="src/assets/image/Logo Light.svg"
          alt="logo light"
        />
        <h1 className="font-bold text-red-500">Asianet.id</h1>
      </div>

      <div className="flex flex-col items-center my-auto">
        <img
          className="w-1/3"
          src="src/assets/image/Logo Light.svg"
          alt="logo light"
        />
        <h1 className="font-bold text-black text-center">Asianet.id!</h1>
        <p className="text-gray-500 text-center">
          Ayo, masuk untuk pengalaman internet yang lebih baik!
        </p>
        <div class="w-full">
          <form class="">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Nama Pengguna
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Nomor Telepon
              </label>
              <div class="flex border border-gray-300 rounded-md">
                <select class="bg-white px-2 text-gray-700 focus:outline-none rounded-l-md">
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  class="flex-1 px-4 py-2 focus:ring-blue-500 focus:border-blue-500 rounded-r-md"
                  placeholder="Nomor Telepon"
                />
              </div>
            </div>
            <Link to="/verify">
            <button
              class="bg-red-500 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              lanjutkan
            </button>
            </Link>
          </form>
        </div>
      </div>

        <div className="flex flex-row gap-2 justify-center items-center">
          <div class="h-2 w-2 rounded-full bg-gray-500"></div>
          <div class="h-2 w-6 rounded-full bg-red-500"></div>
          <div class="h-2 w-2 rounded-full bg-gray-500"></div>
        </div>
    </div>
  );
}
