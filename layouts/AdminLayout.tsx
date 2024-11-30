import Link from "next/link"
import { useRouter } from "next/router"
import * as React from "react"

export interface IAdminLayoutProps {
  children?: React.ReactNode
}

export default function AdminLayout(props: IAdminLayoutProps) {
  const { children } = props
  const router = useRouter()
  const [collapseShow, setCollapseShow] = React.useState<string>("hidden")

  return (
    <>
      {/* Sidebar */}
      <nav className="relative z-10 flex flex-wrap items-center justify-between bg-white px-6 py-4 shadow-xl md:fixed md:bottom-0 md:left-0 md:top-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
          {/* Toggler */}
          <button
            className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <p className="text-blueGray-600 m-0 mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase md:block md:pb-2">
              Notus NextJS
            </p>
          </Link>
          {/* User */}
          <ul className="flex list-none flex-wrap items-center md:hidden">
            <li className="relative inline-block">{/* <NotificationDropdown /> */}</li>
            <li className="relative inline-block">{/* <UserDropdown /> */}</li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "absolute left-0 right-0 top-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="border-blueGray-200 mb-4 block border-b border-solid pb-4 md:hidden md:min-w-full">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <p className="text-blueGray-600 mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase md:block md:pb-2">
                      Notus NextJS
                    </p>
                  </Link>
                </div>
                <div className="flex w-6/12 justify-end">
                  <button
                    type="button"
                    className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mb-4 mt-6 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 h-12 w-full rounded border border-solid bg-white px-3 py-2 text-base font-normal leading-snug shadow-none outline-none focus:outline-none"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="text-blueGray-500 block pb-4 pt-1 text-xs font-bold uppercase no-underline md:min-w-full">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="flex list-none flex-col md:min-w-full md:flex-col">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <p
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1 ? "opacity-75" : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </p>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/settings">
                  <p
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1 ? "opacity-75" : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Settings
                  </p>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/tables">
                  <p
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/admin/tables") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1 ? "opacity-75" : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Tables
                  </p>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/maps">
                  <p
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/admin/maps") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/maps") !== -1 ? "opacity-75" : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Maps
                  </p>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="text-blueGray-500 block pb-4 pt-1 text-xs font-bold uppercase no-underline md:min-w-full">
              Auth Layout Pages
            </h6>
            {/* Navigation */}
            <ul className="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col">
              <li className="items-center">
                <Link href="/auth/login">
                  <p className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i> Login
                  </p>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register">
                  <p className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
                    <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i> Register
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Sidebar */}
      <div className="bg-blueGray-100 relative md:ml-64">
        {/* Navbar */}
        <nav className="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent p-4 md:flex-row md:flex-nowrap md:justify-start">
          <div className="mx-autp flex w-full flex-wrap items-center justify-between px-4 md:flex-nowrap md:px-10">
            {/* Brand */}
            <a
              className="hidden text-sm font-semibold uppercase text-white lg:inline-block"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Dashboard
            </a>
            {/* Form */}
            <form className="mr-3 hidden flex-row flex-wrap items-center md:flex lg:ml-auto">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="text-blueGray-300 absolute z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pl-3 text-center text-base font-normal leading-snug">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="placeholder-blueGray-300 text-blueGray-600 relative w-full rounded border-0 bg-white px-3 py-3 pl-10 text-sm shadow outline-none focus:outline-none focus:ring"
                />
              </div>
            </form>
            {/* User */}
            <ul className="hidden list-none flex-col items-center md:flex md:flex-row">{/* <UserDropdown /> */}</ul>
          </div>
        </nav>
        {/* End Navbar */}
        <div className="mx-auto min-h-screen w-full px-4 pt-20 md:px-10">{children}</div>
      </div>
    </>
  )
}
