

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-4/12 my-8 mx-auto text-center">
            <p className=" text-xl text-[#D99904] pb-2">---{subHeading}---</p>
            <h3 className="text-2xl lg:text-5xl uppercase border-y-2 py-5">{heading}</h3>
        </div>
    );
};

export default SectionTitle;