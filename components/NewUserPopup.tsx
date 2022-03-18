export default function NewUserPopup() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg mb-10">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Your account is ready!
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          You can now start using the app.
        </p>
        <div className="mt-6 grid grid-cols-1 row-gap-4 col-gap-4 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-sm leading-5">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                >
                  View profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
