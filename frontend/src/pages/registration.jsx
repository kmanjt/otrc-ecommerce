import React from "react";

const counties = [
  "Antrim",
  "Armagh",
  "Carlow",
  "Cavan",
  "Clare",
  "Cork",
  "Derry",
  "Donegal",
  "Down",
  "Dublin",
  "Fermanagh",
  "Galway",
  "Kerry",
  "Kildare",
  "Kilkenny",
  "Laois",
  "Leitrim",
  "Limerick",
  "Longford",
  "Louth",
  "Mayo",
  "Meath",
  "Monaghan",
  "Offaly",
  "Roscommon",
  "Sligo",
  "Tipperary",
  "Tyrone",
  "Waterford",
  "Westmeath",
  "Wexford",
  "Wicklow",
];

const Registration = (props) => {
  return (
    <div className="w-1/2 max-h-screen mx-auto flex flex-col">
      <div className="gap-8  sm:grid grid-cols-2">
        <div className="flex flex-auto flex-col col-span-2 mt-8">
          <label className="block mb-2 text-base font-medium" for="email">
            Email address
          </label>
          <input
            type="text"
            id="email"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-otrc-green"
            placeholder="example@mail.com"
            required
          />
        </div>
        <div className="flex flex-auto flex-col">
          <label
            className="block mb-2 mt-8 sm:mt-0 text-base font-medium"
            for="password"
          >
            password
          </label>
          <input
            type="password"
            id="password"
            className="px-4 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-otrc-green"
            placeholder="enter password*"
            required
          />
        </div>
        <div className="flex flex-auto flex-col">
          <label
            className="block mb-2  mt-8 sm:mt-0 text-base font-medium"
            for="password2"
          >
            password again
          </label>
          <input
            type="password"
            id="passowrd2"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-otrc-green"
            placeholder="re-enter password*"
            required
          />
        </div>

        <div className="flex flex-auto flex-col">
          <label
            className="block mb-2  mt-8 sm:mt-0  text-base font-medium"
            for="input_id"
          >
            First Name*
          </label>
          <input
            type="email"
            id="first_name"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-otrc-green"
            placeholder="enter First Name"
            required
          />
        </div>
        <div className="flex flex-auto flex-col">
          <label
            className="block mb-2  mt-8 sm:mt-0 text-base font-medium"
            for="last_name"
          >
            Last Name*
          </label>
          <input
            type="text"
            id="last_name"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-otrc-green"
            placeholder="enter Last Name"
            required
          />
        </div>
        <div className="flex flex-auto flex-col col-span-2 ">
          <label
            className="block mb-2 mt-8 sm:mt-0 text-base font-medium"
            for="address1"
          >
            Address 1*
          </label>
          <input
            type="text"
            id="address1"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-otrc-green"
            placeholder="enter address"
            required
          />
        </div>
        <div className="flex flex-auto flex-col col-span-2 ">
          <label
            className="block mb-2  mt-8 sm:mt-0 text-base font-medium"
            for="address2"
          >
            Address 2
          </label>
          <input
            type="text"
            id="address2"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-otrc-green"
            placeholder="enter address"
          />
        </div>
        <div className="flex flex-auto flex-col">
          <label
            className="block mb-2 mt-8 sm:mt-0 text-base font-medium"
            for="phone"
          >
            Phone number*
          </label>
          <input
            type="tel"
            id="phone"
            className="px-4 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-otrc-green"
            placeholder="enter phone number"
            required
          />
        </div>
        <div className="flex flex-auto flex-col">
          <label
            className="block mb-2 mt-8 sm:mt-0 text-base font-medium"
            htmlFor="fruit"
          >
            select County*
          </label>
          <select
            className="px-4 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-otrc-green"
            id="fruit"
            name="fruit"
            onChange={props.onChange}
          >
            <option value="">Select County</option>
            {counties.map((counties) => (
              <option key={counties} value={counties}>
                {counties}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="button"
        className="bg-otrc-green  text-white mb-12 mt-12 hover:bg-otrc-green/75 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-24 py-2.5 text-center "
      >
        Submit
      </button>
    </div>
  );
};

export default Registration;
