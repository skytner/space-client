interface RolePermissions {
  add: boolean
  view: boolean
  edit: boolean
  delete: boolean
}

type Role = 'guest' | 'common' | 'moder' | 'admin' | 'super-admin'

interface User {
  role: Role
  permissions: RolePermissions
}
