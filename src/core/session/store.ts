import { createStore } from "effector";

import { Session } from "./model";

export const $session = createStore<Session | null>({
  id: "1",
  userInfo: {
    firstName: "John",
    lastName: "Smith",
    userName: "Jooooohn",
    avatar: ".",
  },
  role: "moder",
});
