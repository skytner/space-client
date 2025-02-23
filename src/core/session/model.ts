import { SessionRoleModelAPI } from "../api/session/model";

type UserInfo = {
  firstName: string;
  lastName: string;
  userName: string;
  avatar: string;
};

export interface Session {
  id: string;
  userInfo: UserInfo;
  role: SessionRoleModelAPI;
}
