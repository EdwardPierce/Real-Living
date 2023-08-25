import mongoose from "mongoose";

export default async function fetchApi(name, type) {
  let isConnected = false;

  try {
    if (!isConnected) {
      await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "sample_airbnb",
      });
      isConnected = true;
    }

    let documents = await mongoose.connection
      .collection("listingsAndReviews")
      .find({ [name]: type })

      .limit(20)
      .toArray();

    documents = JSON.stringify(documents);
    documents = JSON.parse(documents);

    return documents;
  } catch (error) {
    console.log(error);
  }
}
