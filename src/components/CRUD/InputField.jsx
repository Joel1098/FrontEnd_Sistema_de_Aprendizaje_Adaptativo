

function InputField({ label, placeholder, value, onChange }) {
  return (
    <div className="w-full max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <label className="text-sm font-medium leading-none text-gray-700">
          {label}
        </label>
        <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D5D7DA)] max-md:max-w-full">
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default InputField;
