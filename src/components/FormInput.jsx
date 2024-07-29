function FormInput({ label, type, name, placeholder }) {
  return (
    <label className="form-control w-full mb-6">
      <div className="label">
        <span className="label-text text-[#022959] font-medium mb-2">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </label>
  );
}

export default FormInput;
