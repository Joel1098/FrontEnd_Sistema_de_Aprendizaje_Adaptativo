
function LearningUnitItem({ unit }) {
  const { name, modules, topics, evaluations, description } = unit;

  return (
    <div className="grid items-center p-5 bg-white grid-cols-[2fr_1fr_1fr_1fr_3fr_1fr] max-md:text-xs max-sm:gap-2.5 max-sm:grid-cols-[1fr]">
      <div className="text-sm text-center text-black max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
        {name}
      </div>
      <div className="text-sm text-center text-black max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
        {modules}
      </div>
      <div className="text-sm text-center text-black max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
        {topics}
      </div>
      <div className="text-sm text-center text-black max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
        {evaluations}
      </div>
      <div className="text-sm text-center text-black max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
        {description}
      </div>
      <div className="text-sm text-center text-black max-sm:px-0 max-sm:py-1.5 max-sm:text-left">
        <button aria-label="Edit unit">
          <i className="ti ti-edit text-2xl cursor-pointer text-stone-900" />
        </button>
        <button aria-label="Delete unit">
          <i className="ti ti-trash text-2xl cursor-pointer text-stone-900" />
        </button>
      </div>
    </div>
  );
}

export default LearningUnitItem;
