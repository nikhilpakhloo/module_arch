import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { login, logout } from "../reducers/AuthSlice";


export const useAuth = () => {
  const dispatch = useAppDispatch();

  const { user, token, isAuthenticated, loading } = useAppSelector(
    (state) => state.auth
  );

  return {
    user,
    token,
    isAuthenticated,
    loading,

    login: (email: string, password: string) =>
      dispatch(login({ email, password })),

    logout: () => dispatch(logout()),
  };
};
