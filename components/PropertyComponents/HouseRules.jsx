import React from "react";

const HouseRules = ({house_rules}) => {
  return (
    <div>
      {house_rules && (
        <div className="py-12">
          <section>
            <div>
              <h2 className="text-[22px] font-semibold">Things to know</h2>
            </div>

            <div className="mt-5">
              <div className="font-light">{house_rules}</div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default HouseRules;
