import React from "react";

const Contribute = () => {
  return (
    <div className="p-5">
      <div className="row">

        <div className="col border-black m-3 p-3">
        <h1>
        Here is the {" "}
        <a
          href="https://github.com/taaaf/Totemgen/"
          style={{ color: "#2B2A29" }}
          target="_blank"
        >
          GitHub page
        </a>
        {" "} if you want to contribute to the coding.
        <br />   <br /> <br /></h1>
        <h4>


        </h4>
        </div>

        <div className="col border-black my-3 me-3 p-3">
        <h1>
        To give feedback write me on this {" "}
        <a
          href="https://www.instagram.com/form____plusmemories/"
          style={{ color: "#2B2A29" }}
          target="_blank"
        >
          IG page
        </a> {" "}
        or leave a message on this {" "}
        <a
          href="https://github.com/taaaf/Totemgen/discussions"
          style={{ color: "#2B2A29" }}
          target="_blank"
        >
          Discussions page
        </a>.
        </h1>
        </div>

        <div className="col-lg-4 col-md-12 border-black my-3 ms-3 p-3">
        <h3>
        CONTRIBUTORS:
        </h3>
        </div>


      </div>
    </div>
  );
};

export default Contribute;
