export type SessionRoleModelAPI =
  | "sudo-admin"
  | "admin"
  | "moder"
  | "writer"
  | "common";

type SessionUserInfoModelAPI = {
  first_name: string;
  last_name: string;
  user_name: string;
  avatar: string;
};

export interface SessionModelAPI {
  id: string;
  user_info: SessionUserInfoModelAPI;
  role: SessionRoleModelAPI;
}
