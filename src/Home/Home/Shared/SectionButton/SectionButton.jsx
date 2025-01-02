const SectionButton = ({ btnTitle }) => {
  return (
    <div className="flex justify-center items-center my-3">
      <button className="btn btn-outline  mt-4 border-0 border-b-4">
        {btnTitle}
      </button>
    </div>
  );
};

export default SectionButton;
