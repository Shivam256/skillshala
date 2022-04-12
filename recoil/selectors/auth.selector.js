import { selector } from "recoil";
import { authState } from "../atoms/auth.atom";

export const getUserStatus = selector({
  key: "getUserStatus",
  get: ({ get }) => {
    const data = get(authState);
    return {
      user: data.user,
      isLoggedIn: user.isLoggedIn,
    };
  },
});
