import type { NextPage } from "next";
import DashboardHeader from "../../../components/DashboardHeader";
import DetailsGrid from "../../../components/DetailsGrid";
import AvatarSet from "../../../components/AvatarSet";
import DonateModal from "../../../components/DonateModal";
import SelectBox from "../../../components/SelectBox";
import { Fragment, useState } from "react";
// import { GetProjectByIdQuery } from "../../../generated/graphql";
import { GetProjectByIdQuery } from "../../../services/queries";
import { useQuery } from "urql";
import ProgressBar from "../../../components/ProgressBar";

const features = [
  {
    name: "Contributors",
    description: () => {
      return (
        <>
          <AvatarSet />
          <p>+1377 others have contributed to the project.</p>
        </>
      );
    },
  },
  {
    name: "Mission",
    description: () =>
      "To reduce the number of malnourished children around the world",
  },
  { name: "Deadline", description: () => "May 2010" },
];

const paymentOptions = [
  { name: "ETH", desc: "Ethereum" },
  { name: "BNB", desc: "Binance Coin" },
  { name: "SOL", desc: "Solana" },
];

export default function Project() {
  // const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [features, setFeatures] = useState([
    {
      name: "Contributors",
      description: () => {
        return (
          <>
            <AvatarSet />
            <p>0 others have contributed to the project.</p>
          </>
        );
      },
    },
  ]);
  const [result, reexecuteQuery] = useQuery({
    query: GetProjectByIdQuery,
    variables: { id: "d1c1f4aa-4cbb-40e6-af78-62508770e1c8" },
  });
  const { data, fetching, error } = result;
  data.project = data?.project?.projects_by_pk
  const updateFeatures = (features: any) => {
    let contributors: { name: string; description: () => JSX.Element } = {
      name: "Contributors",
      description: () => {
        return (
          <>
            <AvatarSet />
            <p>
              +
              {features.contributors.length > 5
                ? features.contributors.length - 5
                : features.contributors.length}{" "}
              others have contributed to the project.
            </p>
          </>
        );
      },
    };
    let mission = {
      name: "Mission",
      description: () =>
        features.mission,
    };
    let deadline = { name: "Deadline", description: () => features.deadline };

    setFeatures([contributors, mission, deadline]);
  };

  let [currency, setCurrency] = useState(paymentOptions[0]);

  if (fetching)
    return (
      <div>
        <p className="text-2xl text-gray-600">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="h-3/4 w-full flex items-center justify-center">
        <p className="text-2xl text-gray-600">Oh no... {error.message}</p>
      </div>
    );
    console.log(data.project)
      // updateFeatures(data.project);
  return (
    <main>
      {console.log(data)}
      <DashboardHeader title={data.projects_by_pk.title} />
      <div className="flex flex-col">
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-24 px-4 pt-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
            <div>
              {/* <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Details</h2> */}
              <p className="mt-4 text-gray-500">{data.projects_by_pk.desc}</p>
              <div className="desc_side">
                <ProgressBar
                  currentAmount={data.projects_by_pk.current_amount}
                  targetAmount={data.projects_by_pk.target_amount}
                />
                <div className="desc_donate">
                  <p className="text-gray-500">
                    How much would you like to donate?
                  </p>
                  <div className="flex items-end gap-2 mb-4">
                    <div className="flex-1">
                      <div className="relative ">
                        <label
                          htmlFor="amount"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Amount in {currency.name}
                        </label>
                        <input
                          type="number"
                          id="amount"
                          name="amount"
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="">
                      {/* <SelectBox options={paymentOptions} callback={setCurrency}/> */}
                    </div>

                    <div className="">
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ">
                        Donate
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-green-600">Donation Sucessfull</p>

                  <DonateModal />
                </div>
                {/* <div className="flex gap-8 text-gray-500">
                  <div className="">Ethereum</div>
                  <div className="">Binance Smart Chain</div>
                </div> */}
                <div className="shareLink my-4">
                  <div className="flex items-center gap-2 mb-4">
                    <p className="text-gray-500">Share this project</p>
                    <button className="inline-flex text-black bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg border">
                      Share
                    </button>
                  </div>
                </div>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description()}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="bg-gray-100 rounded-lg"
              />
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="bg-gray-100 rounded-lg"
              />
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="bg-gray-100 rounded-lg"
              />
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="bg-gray-100 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
