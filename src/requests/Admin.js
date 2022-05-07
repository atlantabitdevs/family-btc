//Parent Account Requests

// CreateNewAccount
// - ManageChildren
//     - GetChildren
//     - InviteChild
//         - Role (1-4)
//     - TransitionChildRole
//     - SetChildAllowance
//     - TransferFunds

export const GetChildren = async (familyId) => {
  return { children };
};

export const InviteChild = async (familyId, childName, role) => {
  return { success: true };
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
