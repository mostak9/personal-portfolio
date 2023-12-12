import PropTypes from "prop-types";
import AnimationProvider from "../../../Provider/AnimationProvider/AnimationProvider";

const Title = ({ text }) => {
  return (
    <div>
      <AnimationProvider>
        <h1 className="text-3xl   font-bold py-4 px-2 my-5 border-l-8 border-l-green-500">
          {text}
        </h1>
      </AnimationProvider>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
