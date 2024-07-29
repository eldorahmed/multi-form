import { Form, Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function Home() {
  return (
    <div className="pt-14 w-full">
      <h1 className="text-4xl font-bold mb-3">Personal info</h1>
      <p className="text-xl opacity-50 mb-9">
        Please provide your name, email address, and phone number.
      </p>
      <Form className="w-full mb-10">
        <FormInput
          type="text"
          label="Name"
          name="name"
          placeholder="e.g. Stephen King"
        />
        <FormInput
          type="email"
          label="Email Address"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <FormInput
          type="number"
          label="Phone Number"
          name="phoneNumber "
          placeholder="e.g. +1 234 567 890"
        />
      </Form>
      <div className="flex justify-end">
        <Link
          to="/selectPlan"
          className="group relative bg-[#022959] inline-flex items-center justify-center
          overflow-hidden rounded-lg border border-current px-8 py-3 text-white focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          <span className="absolute -start-full transition-all ">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
          <span className="text-sm font-medium transition-all ">
            Next Step
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
