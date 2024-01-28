interface SignInAction {
  type: "SIGNIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = SignInAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === "SIGNIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

export default authReducer;
