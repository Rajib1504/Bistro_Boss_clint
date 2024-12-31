const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center  w-4/12 mx-auto my-8">
      <p className="text-[#D99904] mb-2">{subHeading}</p>
      {/* <div className="divider"></div> */}
      <h3 className="md:text-xl text-xl border-y-4 py-2 font-light ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
