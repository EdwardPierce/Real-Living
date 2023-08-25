import React from "react";

const Location = ({ address, neighborhood_overview }) => {
  return (
    <div className="after:block after:border-b after:border-gray-300">
      <div className="py-12">
        <section>
          <div>
            <h2 className="text-[22px] font-semibold">Where you`ll be</h2>
          </div>
          <div className="mt-4">
            <div>
              <h2 className="font-medium">
                {address.street.split(",", 1) + ", " + address.country}
              </h2>
            </div>
            <div className="mt-4 font-light">{neighborhood_overview} </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Location;
