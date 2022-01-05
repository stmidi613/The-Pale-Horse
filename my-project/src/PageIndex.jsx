import { Fragment } from "react/cjs/react.production.min";

export default function PageIndex() {
  return (
    <Fragment>
      <div className="px-4 py-10 flex items-center justify-center sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <a
            href="/#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="/#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="/#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-crimson bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <div className="h-5 w-5" aria-hidden="true"></div>
              </a>
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
              <a
                href="/#"
                aria-current="page"
                className="z-10 bg-indigo-50 border-crimson text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                1
              </a>
              <a
                href="/#"
                className="bg-white border-crimson text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                2
              </a>
              <a
                href="/#"
                className="bg-white border-crimson text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-crimson bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="/#"
                className="bg-white border-crimson text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              >
                8
              </a>
              <a
                href="/#"
                className="bg-white border-crimson text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                9
              </a>
              <a
                href="/#"
                className="bg-white border-crimson text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                10
              </a>
              <a
                href="/#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-crimson bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <div className="h-5 w-5" aria-hidden="true"></div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
