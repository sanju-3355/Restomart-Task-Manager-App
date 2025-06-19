
import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={styles.container}>
      <Oval
        height={50}
        width={50}
        color="#2563eb"
        secondaryColor="#c7d2fe"
        strokeWidth={4}
        strokeWidthSecondary={4}
        visible={true}
        ariaLabel="oval-loading"
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
  },
};

export default Loader;
