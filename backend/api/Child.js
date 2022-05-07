// Children Account Requests
// - GetBalance
// - GetTransactions
// - GetAllowance
// - SendPayment
// - RequestOneTimeAllowance

export const GetBalance = async (familyId, childId) => {
  return { balance: 0 };
};

export const GetTransactions = async (familyId, childId) => {
  return { transactions: [] };
};

export const GetAllowance = async (familyId, childId) => {
  return { allowance: 0 };
};

export const SendPayment = async (familyId, childId, amount) => {
  return { success: true };
};

export const RequestOneTimeAllowance = async (familyId, childId, amount) => {
  return { success: true };
};
