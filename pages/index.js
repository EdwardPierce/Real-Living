import Properties from "@/components/Properties";
import fetchApi from "@/utils/fetchApi";

const Home = ({ allRealty }) => {
  return <Properties allRealty={allRealty} />;
};

export async function getServerSideProps({ query }) {
  const property_type = query.property_type || "House";
  const allRealty = await fetchApi("property_type", property_type);

  return {
    props: {
      allRealty,
    },
  };
}

export default Home;
