import { Link } from "react-router-dom";
import Thanks from "../../public/images/icon-thank-you.svg";

function Finishing() {
  return (
    <div className="pt-14 w-full">
      <h1 className="text-4xl font-bold mb-3">Finishing up</h1>
      <p className="text-xl opacity-50 mb-10">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-[#F8F9FF] p-6 w-full rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Arcade (Monthly)</h2>
          <span className="text-lg font-bold">$9/mo</span>
        </div>
        <Link to="/selectPlan" className="hover:text-blue-600 underline pb-6">
          Change
        </Link>
        <hr className="mb-4 mt-6" />
        <div className="flex justify-between mb-2">
          <span>Online service</span>
          <span>+$1/mo</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Larger storage</span>
          <span>+$2/mo</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-20 px-2">
        <p className="opacity-50">Total (per month)</p>
        <div className="flex justify-end">
          <span className="text-xl font-bold text-blue-600">+$12/mo</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link
          to="/pickAddOns"
          className="opacity-50 font-medium hover:opacity-100"
        >
          Go Back
        </Link>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-primary hover:bg-[#928CFF] hover:border-none px-8"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Confirm
        </button>
        <dialog
          id="my_modal_5"
          className="modal modal-bottom w-full sm:modal-middle"
        >
          <div className="modal-box text-center">
            <div className="flex justify-center w-full mb-8">
            <img src={Thanks} alt="" />

            </div>

            <h3 className="font-bold text-3xl texr-[#022959] mb-4">
              Thank you!
            </h3>
            <p className="opacity-60">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Finishing;
