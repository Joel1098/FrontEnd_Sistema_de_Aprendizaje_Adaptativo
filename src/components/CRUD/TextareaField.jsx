

function TextareaField({ label, placeholder, value, onChange }) {
  return (
    <div className="mt-4 w-full min-h-36 max-md:max-w-full">
      <div className="flex-1 w-full max-md:max-w-full">
        <label className="text-sm font-medium leading-none text-gray-700">
          {label}
        </label>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="overflow-hidden flex-1 shrink gap-2 px-3.5 py-3 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-solid shadow-sm basis-0 border-[color:var(--Gray-300,#D5D7DA)] size-full max-md:max-w-full outline-none resize-none"
          rows={4}
        />
      </div>
    </div>
  );
}

export default TextareaField;
