//Parent Account Requests

// CreateNewAccount
// - ManageChildren
//     - GetChildren
//     - InviteChild
//         - Role (1-4)
//     - TransitionChildRole
//     - SetChildAllowance
//     - TransferFunds

import db, { getFamily } from "../db/db";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const GetFamily = async (familyName) => {
  console.log("Getting Family");
  return await getFamily(familyName);
};

export const CreateNewFamily = async (familyName) => {
  await setDoc(doc(db, "families", familyName), {
    familyName: familyName,
    children: [],
  });
  return { success: true };
};
export const GetChildren = async (familyId) => {
  return { children };
};

export const InviteChild = async (familyId, childName, role) => {
  return { success: true };
};

export const AddChild = async (
  familyName,
  childName,
  role,
  balance,
  allowance
) => {
  const coll = collection(db, "families");
  const docs = await getDocs(coll);
  console.log("getDocs", docs);
  let famDoc = null;
  await docs.forEach((doc) => {
    console.log("snap", doc);
    famDoc = doc;
  });

  await updateDoc(famDoc, {
    children: arrayUnion({
      allowance: allowance,
      name: childName,
      role: role,
      balance: balance,
    }),
  });
  return { success: true, familyDoc };
};

export const TransitionChildRole = async (familyId, childId, newRole) => {
  return { success: true };
};

export const SetChildAllowance = async (familyId, childId, allowance) => {
  return { success: true };
};

export const TransferFunds = async (familyId, childId, amount) => {
  return { success: true };
};

export const ExportChild = async (familyId, childId) => {
  return { success: true };
};
