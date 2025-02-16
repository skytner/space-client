export const getPermissionsByRole = (role: Role): RolePermissions => {
  switch (role) {
    case 'guest':
      return { view: true, add: false, edit: false, delete: false }
    case 'common':
      return { view: true, add: true, edit: false, delete: false }
    case 'moder':
      return { view: true, add: true, edit: true, delete: false }
    case 'admin':
      return { view: true, add: true, edit: true, delete: true }
    case 'super-admin':
      return { view: true, add: true, edit: true, delete: true }
    default:
      return { view: false, add: false, edit: false, delete: false }
  }
}
