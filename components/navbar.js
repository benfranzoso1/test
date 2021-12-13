import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import logobig from '../public/logo.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="container mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                    {/* <svg width="auto" height="2rem" className="block lg:hidden" viewBox="0 0 83 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M74.93 38.3201H65.74V32.0801H80.19L74.83 24.5801H80.19L63.22 0.830078L46.25 24.5801H51.61L46.25 32.0801H60.7V38.3201H48.98C41.33 37.9701 35.22 31.6499 35.22 23.9199C35.22 21.1899 36 18.65 37.32 16.47C38.26 14.92 39.49 13.56 40.93 12.46C39.59 10.28 37.92 8.38008 35.98 6.83008C32.17 3.77008 27.39 2.03003 22.28 2.03003C10.21 2.03003 0.380005 11.8499 0.380005 23.9199C0.380005 35.9899 10.2 45.8101 22.28 45.8101L82.44 45.8301C82.44 41.6801 79.07 38.3201 74.93 38.3201ZM61.41 19.53H56.05L63.22 9.5L70.39 19.53H65.03L70.39 27.03H56.05L61.41 19.53ZM22.27 38.3401C14.32 38.3401 7.85001 31.8699 7.85001 23.9199C7.85001 15.9699 14.32 9.5 22.27 9.5C25.51 9.5 28.54 10.5599 31 12.4399C28.93 15.7799 27.74 19.7099 27.74 23.9199C27.74 29.4299 29.79 34.4701 33.16 38.3201L22.27 38.3401Z" fill="#00BBB4"/>
                    </svg> */}
                  <svg width="auto" height="1.5rem" className="lg:block" viewBox="0 0 336 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.38 22.43C32.12 21.31 27.14 22.35 27.6 19.56C27.99 17.33 31.46 16.21 35.45 16.21C40.47 16.21 45.09 17.8 48.18 19.56L53.96 4.81C49.86 2.82 43.24 0.580017 35.26 0.580017C23.22 0.580017 10.61 5.92 7.96001 19C5.74001 29.53 12.08 34.47 19.54 36.31C25.99 37.9 32.11 36.63 31.81 39.5C31.59 41.57 28.19 42.85 23.48 42.85C16.45 42.93 10.89 40.46 7.44001 38.38L0.0400085 52.66C4.57001 55.13 12.51 58.48 22.64 58.48C36.28 58.48 48.91 52.1 51.49 39.66C53.89 28.18 45.9 23.79 38.38 22.43Z" fill="black"/>
                    <path d="M95.54 32.56C94.42 37.89 90.12 41.65 84.7 41.65C79.68 41.65 76.58 38.44 77.81 32.8L84.52 1.63H64.9L58.15 33.19C54.46 50.89 68.09 58.49 82.53 58.49C96.89 58.49 111.3 51.05 114.98 33.51L121.76 1.63H102.14L95.54 32.56Z" fill="black"/>
                    <path d="M175.38 57.44H194.84L198.53 39.82H217.59L220.4 26.66H201.26L203.27 17.49H228.87L232.21 1.62H187.15L175.38 57.44Z" fill="black"/>
                    <path d="M150.99 1.21998C145.74 1.05998 131.02 1.54001 129.42 1.62001L117.65 57.44H137.27L145.75 17.01C146.95 17.01 148.56 16.85 150.29 17.09C153.13 17.41 156.33 18.76 155.77 22.59C154.84 28.51 147.65 28.75 146.41 34.71C145.16 40.67 148.69 57.44 148.69 57.44H169.82L164.75 38.14C169.83 34.55 173.64 29.45 175.11 23.07C178.19 9.51002 168.33 1.61998 150.99 1.21998Z" fill="black"/>
                    <path d="M324.67 1.62H324L319.12 24.51H292.76H292.09L296.97 1.62H296.92H296.25H285.68H285H284.88H284.21L276.56 37.35L276.37 38.22L256.05 1.62H245.08H244.41L232.64 57.44H233.31H244.6L252.46 20.6L252.95 21.47L273.23 57.44H273.91H284.48H285.15H285.2L289.84 35.27H290.51H316.87L312.23 57.44H312.9H324.19L335.96 1.62H324.67Z" fill="#00BBB4"/>
                  </svg>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="border-[#00BBB4] text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium"
                  >
                    News
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Surf
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Vacation
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Real Estate
                  </a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00BBB4]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <button
                  type="button"
                  className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BBB4]"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-4 relative flex-shrink-0">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BBB4]">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-[#00BBB4] text-[#00BBB4] block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                News
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Surf
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Vacation
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Real Estate
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Ben Franzoso</div>
                  <div className="text-sm font-medium text-gray-500">ben@example.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}