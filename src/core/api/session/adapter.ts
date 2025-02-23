import { Session } from "@/core/session/model";
import { SessionModelAPI } from "./model";

export const serverSessionToClient = (
  serverSession: SessionModelAPI
): Session => {
  return {
    id: serverSession.id,
    userInfo: {
      firstName: serverSession.user_info.first_name,
      lastName: serverSession.user_info.last_name,
      userName: serverSession.user_info.user_name,
      avatar: serverSession.user_info.avatar,
    },
    role: serverSession.role,
  };
};
