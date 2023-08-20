import React from "react";
import noDataIMg from "../no-datadownload.png";
const NoPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
      }}
    >
      <img src={noDataIMg} />
      <h3>404 No Page Found</h3>
    </div>
  );
};

export default NoPage;
