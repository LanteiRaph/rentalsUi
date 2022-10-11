import Image from 'next/image';
import { NextPageWithLayout } from '../page';
import { signIn} from 'next-auth/react';
//Icons
import {RiLockPasswordFill} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'

const Login:NextPageWithLayout = () => {
  //const 
  return (
    <>
      <div className="flex justify-between min-h-screen font-sans">
        <div
          className="hidden relative w-1/2 bg-center bg-cover lg:block"
          style={{ backgroundImage: "url('/img/hero.png')" }}
        >
          <div className="flex absolute bottom-20 justify-center w-full">
            <div className="max-w-md text-center">
              <span className="text-3xl font-bold leading-loose text-gray-900">
                Control Bussiness
              </span>
              <p className="font-light leading-7 text-gray-500">
                MyCareTaker is the most comprehensive field service & rental managament
                platform with combining flexibility.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 mx-auto max-w-2xl">
          <div className="flex flex-col px-8 pt-10 lg:px-14 xl:px-24">
            <div className="pt-20 pb-6">
              <h1 className="text-3xl font-bold tracking-wide leading-loose whitespace-nowrap">
                Hi, Welcome back!
              </h1>
              <span className="font-light text-gray-500">
                Login now to access your account.
              </span>
              <div className="flex flex-wrap gap-y-4 gap-x-6 justify-between items-center pt-10 whitespace-nowrap">
                <button
                  onClick={() => signIn('google', {callbackUrl:'http://localhost:3000'})}
                  type="button"
                  className=" w-full hover:bg-green/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium border border-gray-800 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
                    className="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Sign in with Google
                </button>
                <button
                  type="button"
                  className="w-full text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                >
                  <svg
                    className="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                    ></path>
                  </svg>
                  Sign in with Facebook
                </button>
              </div>
              <div className="flex justify-between items-center pt-6">
                <hr className="w-full border-gray-400" />
                <span className="px-4 font-light tracking-wider text-gray-500">
                  or
                </span>
                <hr className="w-full border-gray-400" />
              </div>
              <form action="">
                <div className="pt-6">
                  <label
                    htmlFor="email-address-icon"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <AiOutlineMail   className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                    </div>
                    <input
                      type="text"
                      id="email-address-icon"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                    />
                  </div>
                </div>
                <div className="pt-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your Password
                  </label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <RiLockPasswordFill className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                    </div>
                    <input
                      type="password"
                      id="passowrd"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="w-5 h-5 text-orange-500 bg-white rounded border border-gray-400 focus:outline-none focus:ring-orange-500"
                    />
                    <label
                      htmlFor="remember"
                      className="pl-4 font-light text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-teal-500 hover:text-teal-600">
                    {' '}
                    Forgot password
                  </a>
                </div>
                <div className="pt-8">
                  <button
                    type="submit"
                    className="py-4 px-8 w-full text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-red-100 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="pt-4">
                <div className="font-light text-center text-gray-500">
                  Not registered yet?
                  <a
                    href="#"
                    className="font-normal text-teal-500 hover:text-teal-600"
                  >
                    Create an Account
                  </a>
                </div>
                <div className="flex flex-wrap gap-y-2 justify-between items-center pt-14 text-center whitespace-nowrap">
                  <span className="flex-1 text-gray-500">
                    © 2021 Lansan Tech. All rights reserved.
                  </span>
                  <span className="flex flex-1 justify-center items-center space-x-1">
                    <a href="#" className="text-gray-500 hover:text-gray-600">
                      Terms of Service
                    </a>
                    <span className="text-gray-500">&#183;</span>
                    <a href="#" className="text-gray-500 hover:text-gray-600">
                      Privacy Policy
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

Login.getLayout = (page) => {
  return <>{page}</>;
};
