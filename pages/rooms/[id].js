import React, { useMemo } from "react";
import fetchApi from "@/utils/fetchApi";
import PropertyDetails from "@/components/PropertyDetails";

const RoomsById = ({ propertyDetailsData }) => {
  const data = useMemo(() => propertyDetailsData, [propertyDetailsData]);
  return (
    <section>
      <PropertyDetails propertyDetailsData={data} />
    </section>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const propertyDetailsData = await fetchApi("_id", id);

  return {
    props: {
      propertyDetailsData: propertyDetailsData[0],
    },
  };
}

export default RoomsById;
