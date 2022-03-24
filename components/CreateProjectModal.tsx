import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

type props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function CreateProjectModal(props: props) {
  const [pageCount, setPageCount ] = useState(0)
  const cancelButtonRef = useRef(null);
  const backButtonRef = useRef(null);
  const handleSubmit = () => {
    props.setOpen(false)
    setPageCount(0)
  }
  return (
    // <Transition.Root show={true} as={Fragment}>
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={props.setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Create a new project
                    </Dialog.Title>
                    <div className="mt-2 ">
                      <p className="text-sm text-gray-500">
                        Start your donation or crowdfunding project
                      </p>
                      {pageCount == 0 ? <div className="grid grid-cols-3 w-full gap-6">
                      <div className="col-span-3 sm:col-span-3">
                          <label
                            htmlFor="projectName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Project Name
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm w-full">
                            <input
                              type="text"
                              name="projectName"
                              id="projectName"
                              className="p-3 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder="Project Name"
                            />
                          </div>
                        </div>

                        <div className="col-span-3 sm:col-span-3">
                          <label
                            htmlFor="projectDesc"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Project Description
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm w-full">
                            <input
                              type="text"
                              name="projectDesc"
                              id="projectDesc"
                              className="p-3 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder="About the project"
                            />
                          </div>
                        </div>

                        <div className="col-span-3 sm:col-span-3">
                          <label
                            htmlFor="projectCategory"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Project Category
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm w-full">
                            <input
                              type="text"
                              name="projectCategory"
                              id="projectCategory"
                              className="p-3 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder="Project Category"
                            />
                          </div>
                        </div>
                      </div>
                      : pageCount == 1 ? 
                      <div className="grid grid-cols-3 w-full gap-6">
                      <div className="col-span-3 sm:col-span-3">
                          <label
                            htmlFor="projectMission"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Project Mission
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm w-full">
                            <input
                              type="text"
                              name="projectMission"
                              id="projectMission"
                              className="p-3 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder="Project Mission"
                            />
                          </div>
                        </div>

                        <div className="col-span-3 sm:col-span-3">
                          <label
                            htmlFor="targetAmount"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Target Amount
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm w-full">
                            <input
                              type="text"
                              name="targetAmount"
                              id="targetAmount"
                              className="p-3 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder="3000 ETH"
                            />
                          </div>
                        </div>

                        <div className="col-span-3 sm:col-span-3">
                          <label
                            htmlFor="paymentAddress"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Payment Address
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm w-full">
                            <input
                              type="text"
                              name="paymentAddress"
                              id="paymentAddress"
                              className="p-3 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder="0x839sns9n93aj9"
                            />
                          </div>
                        </div>
                      </div>
                    : <div className="grid grid-cols-3 w-full gap-6">
                    <div className="col-span-3 sm:col-span-3">
                        <label
                          htmlFor="projectName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Project Name
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm w-full">
                          <input
                            type="text"
                            name="projectName"
                            id="projectName"
                            className="p-3 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Project Name"
                          />
                        </div>
                      </div>

                      <div className="col-span-3 sm:col-span-3">
                        <label
                          htmlFor="projectDesc"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Project Description
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm w-full">
                          <input
                            type="text"
                            name="projectDesc"
                            id="projectDesc"
                            className="p-3 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="About the project"
                          />
                        </div>
                      </div>

                      <div className="col-span-3 sm:col-span-3">
                        <label
                          htmlFor="projectCategory"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Project Category
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm w-full">
                          <input
                            type="text"
                            name="projectCategory"
                            id="projectCategory"
                            className="p-3 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Project Category"
                          />
                        </div>
                      </div>
                    </div>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

              {pageCount == 2 ? 
                <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => handleSubmit()}
                >
                  Deactivate
                </button>
                :     
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setPageCount(pageCount + 1)}
                >
                  Next
                </button>
}
                {pageCount == 0 ? <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => props.setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button> : <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setPageCount(pageCount - 1)}
                  // ref={backButtonRef}
                >
                  Back
                </button>}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default CreateProjectModal;
