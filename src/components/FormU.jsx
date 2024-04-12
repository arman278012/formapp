import React, { useState } from 'react';
import axios from 'axios';

const FormU = () => {

  const [formData, setFormData] = useState({
    Zürich: false,
    Genève: false,
    Lugano: false,
    name: '',
    Contact_Person: '',
    Reference: '',
    Phone: '',
    email: '',
    SWIFT: '',
    Correspondent_Bank: '',
    Irrevocable: false,
    Irrevocable_and_transferable: false,
    Irrevocable_Standby: false,
    Credit_Suisse: false,
    Correspondent_Bank_checkbox: false,
    Any_Bank: false,
    Any_Bank_in: false,
    Beneficiary_Name: '',
    Full_Address: '',
    Currency_and_Amount: '',
    Credit_Amount_specification: '',
    Maximum: false,
    Tolerance: false,
    About: false,
    specify: false,
    Available_Credit_Suisse: false,
    Available_Correspondent_Bank: false,
    Available_Any_Bank: false,
    Available_Any_Bank_in: false,
    Available_specify: false,
    Payment_at_sight: false,
    Negotiation: false,
    Deferred_payment: false,
    Mixed_payment: false,
    Acceptance: false,
    At_days_after: false,
    Date_of_shipment: '',
    Date_of_Invoice: "",
    Sight: false,
    define: '',
    Drawee: "",
  });

  const handleChange = (e) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Do whatever you want with the form data
    try {
      const response = await axios.post('http://localhost:9090/post', formData);
      // toast.success("Form Submmitted...")
      setFormData({
        Zürich: false,
        Genève: false,
        Lugano: false,
        name: '',
        Contact_Person: '',
        Reference: '',
        Phone: '',
        email: '',
        SWIFT: '',
        Correspondent_Bank: '',
        Irrevocable: false,
        Irrevocable_and_transferable: false,
        Irrevocable_Standby: false,
        Credit_Suisse: false,
        Correspondent_Bank_checkbox: false,
        Any_Bank: false,
        Any_Bank_in: false,
        Beneficiary_Name: '',
        Full_Address: '',
        Currency_and_Amount: '',
        Credit_Amount_specification: '',
        Maximum: false,
        Tolerance: false,
        About: false,
        specify: false,
        Available_Credit_Suisse: false,
        Available_Correspondent_Bank: false,
        Available_Any_Bank: false,
        Available_Any_Bank_in: false,
        Available_specify: false,
        Payment_at_sight: false,
        Negotiation: false,
        Deferred_payment: false,
        Mixed_payment: false,
        Acceptance: false,
        At_days_after: false,
        Date_of_shipment: '',
        Date_of_Invoice: "",
        Sight: false,
        define: '',
        Drawee: "",
      });

    } catch (error) {
      console.error("Error in posting data:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className='text-center font-bold text-2xl text-red-600 mb-5'>Form To be Stored in Database</h1>
      <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            To CREDIT SUISSE (Switzerland) Ltd. Trade Finance Service Center:
          </label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Zürich"
                value={formData.Zürich}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Zürich</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Genève"
                value={formData.Genève}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Genève</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Lugano"
                value={formData.Lugano}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Lugano</span>
            </label>
            {/* Add more checkboxes as needed */}
          </div>
        </div>
        <p>We request you to issue on our behalf and for our account the following Irrevocable Documentary Credit as per the instructions given
          below. This credit is to be subject to the "Uniform Customs and Practice for Documentary Credits" published by the International
          Chamber of Commerce in force at the time of the issuance</p>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name and Address of
            Applicant
            to appear in the credit
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Contact Person
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Contact Person"
            type="text"
            name="Contact_Person"
            placeholder="Contact Person"
            value={formData.Contact_Person}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Our Reference
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Reference"
            type="text"
            name="Reference"
            placeholder="Our Reference"
            value={formData.Reference}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Phone no
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Phone"
            type="tel"
            name="Phone"
            placeholder="Phone No"
            value={formData.Phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            E-Mail address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correspondent Bank
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Correspondent_Bank"
            type="text"
            name="Correspondent_Bank"
            placeholder="Correspondent Bank"
            value={formData.Correspondent_Bank}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            SWIFT CODE
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="SWIFT"
            type="text"
            name="SWIFT"
            placeholder="SWIFT CODE"
            value={formData.SWIFT}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Form of documentary credit
          </label>
          <div className='flex flex-col'>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Irrevocable"
                value={formData.Irrevocable}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Irrevocable</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Irrevocable_and_transferable"
                value={formData.Irrevocable_and_transferable}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Irrevocable and transferable</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Irrevocable_Standby"
                value={formData.Irrevocable_Standby}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Irrevocable Standby</span>
            </label>
            {/* Add more checkboxes as needed */}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Place of expiry with
          </label>
          <div className='flex flex-col'>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Credit_Suisse"
                value={formData.Credit_Suisse}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Credit Suisse</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Correspondent_Bank_checkbox"
                value={formData.Correspondent_Bank_checkbox}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Correspondent Bank</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Any_Bank"
                value={formData.Any_Bank}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Any Bank
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Any_Bank_in"
                value={formData.Any_Bank_in}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Any Bank in:
              </span>
            </label>
            {/* Add more checkboxes as needed */}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Beneficiary
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Beneficiary_Name"
            type="text"
            name="Beneficiary_Name"
            placeholder="Beneficiary Name"
            value={formData.Beneficiary_Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Full Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Full_Address"
            type="text"
            name="Full_Address"
            placeholder="Full Address"
            value={formData.Full_Address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Currency and Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Currency_and_Amount"
            type="text"
            name="Currency_and_Amount"
            placeholder="Currency and Amount"
            value={formData.Currency_and_Amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Credit Amount specification
          </label>
          <div className='flex flex-col'>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Credit_Amount_specification"
                value={formData.Credit_Amount_specification}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Exactly</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Maximum"
                value={formData.Maximum}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Tolerance of + /- %</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Tolerance"
                value={formData.Tolerance}
                onChange={handleChange}
                required
              />
              <span className="ml-2">About (+/- 10 %) </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="specify"
                value={formData.specify}
                onChange={handleChange}
                required
              />
              <span className="ml-2">specify:</span>
            </label>
            {/* Add more checkboxes as needed */}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Available with
            (Place of presentation of
            documents)
          </label>
          <div className='flex flex-col'>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Available_Credit_Suisse"
                value={formData.Available_Credit_Suisse}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Credit Suisse</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Available_Correspondent_Bank"
                value="Available_Correspondent_Bank"
                onChange={handleChange}
                required
              />
              <span className="ml-2">Correspondent Bank</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Available_Any_Bank"
                value={formData.Available_Any_Bank}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Any Bank</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Available_Any_Bank_in"
                value={formData.Available_Any_Bank_in}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Any Bank in:</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Available_specify"
                value={formData.Available_specify}
                onChange={handleChange}
                required
              />
              <span className="ml-2">specify:</span>
            </label>
            {/* Add more checkboxes as needed */}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Available by
          </label>
          <div className='flex flex-col'>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Payment_at_sight"
                value={formData.Payment_at_sight}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Payment at sight</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Negotiation"
                value={formData.Negotiation}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Negotiation (specify below)</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Deferred_payment"
                value={formData.Deferred_payment}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Deferred payment (specify below)</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Mixed_payment"
                value={formData.Mixed_payment}
                onChange={handleChange}
              />
              <span className="ml-2">Mixed payment (specify below)
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="Acceptance"
                value={formData.Acceptance}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Acceptance (specify below)</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 h-5 w-5"
                name="At_days_after"
                value={formData.At_days_after}
                onChange={handleChange}
                required
              />
              <span className="ml-2">At days after</span>
            </label>
            {/* Add more checkboxes as needed */}
          </div>
        </div>
        <div className="mb-4">
          <div className='flex flex-col'>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
                name="radio"
                value={formData.Date_of_shipment}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Date of shipment</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
                name="radio"
                value={formData.Date_of_Invoice}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Date of Invoice</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
                name="radio"
                value={formData.Sight}
                onChange={handleChange}
                required
              />
              <span className="ml-2">Sight</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
                name="radio"
                value={formData.define}
                onChange={handleChange}
                required
              />
              <span className="ml-2">(define)</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Drawee
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Drawee"
            type="text"
            name="Drawee"
            placeholder="Drawee"
            value={formData.Drawee}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormU;
