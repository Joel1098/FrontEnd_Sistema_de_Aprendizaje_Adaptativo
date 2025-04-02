

function ModalHeader({ title, onClose }) {
  return (
    <header className="relative w-full bg-white max-md:max-w-full">
      <div className="z-0 px-6 pt-6 w-full text-lg font-semibold leading-loose text-gray-900 bg-white max-md:px-5 max-md:max-w-full">
        <h2 className="w-full max-md:max-w-full">{title}</h2>
      </div>
      <button
        onClick={onClose}
        className="flex overflow-hidden absolute bottom-3 right-4 z-0 justify-center items-center p-2.5 w-11 rounded-lg"
        aria-label="Close modal"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e262cfe952744dc6e06452b382abb0aa30c53feb?placeholderIfAbsent=true&apiKey=a73b68a54705491597344db5d49d250e"
          className="object-contain self-stretch my-auto w-6 aspect-square"
          alt="Close"
        />
      </button>
      <div className="flex z-0 w-full min-h-5 max-md:max-w-full" />
    </header>
  );
}

export default ModalHeader;
