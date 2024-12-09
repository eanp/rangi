export type User = { roles: Role[]; id: string }

type Role = keyof typeof ROLES
type Permission = (typeof ROLES)[Role][number]

const ROLES = {
  admin: [
    "view:comments",
    "create:comments",
    "update:comments",
    "delete:comments",
  ],
  user: ["view:comments", "create:comments","update:self","delete:self"],
} as const

export function hasPermission(user: User, permission: Permission) {
  return user.roles.some(role =>
    (ROLES[role] as readonly Permission[]).includes(permission)
  )
}