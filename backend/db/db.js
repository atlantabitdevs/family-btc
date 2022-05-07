import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = require("../service-account.json");
console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
utils.info(`Connection to GCP Project ${db.projectId} successful!`);
export default db;

export const getFamily = async (familyName) => {
  const querySnapshot = await getDocs(collection(db, "families"));
  let res = null;
  const docs = await querySnapshot.forEach((doc) => {
    if (doc.data()["family-name"] === familyName) {
      res = doc.data();
    }
  });
  return res;
};
