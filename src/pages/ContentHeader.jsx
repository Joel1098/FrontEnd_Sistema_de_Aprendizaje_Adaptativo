import PropTypes from "prop-types";

function ContentHeader({ title, subtitle }) {
  return (
    <header className="flex flex-col items-start px-16 py-7 text-white bg-cyan-600 max-md:px-5 max-md:max-w-full">
      <h1 className="text-5xl max-md:max-w-full">{title}</h1>
      <p className="mt-1.5 text-2xl">{subtitle}</p>
    </header>
  );
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.func.isRequired
};

export default ContentHeader;
