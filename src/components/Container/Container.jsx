// import T from "prop-types";
import "../Container/Container.css";

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

// Container.propTypes = {
//   children: T.node.isRequired,
// };

export default Container;
