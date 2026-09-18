export const SERVICE_PREFIXES = {
  identity: [
    '/auth',
    '/users',
    '/profiles',
    '/roles',
    '/permissions',
    '/audit-logs',
    '/school-units',
    '/school-unit-addresses',
    '/school-unit-social-medias',
    '/school-unit-types',
    '/religions',
    '/blood-types',
  ],

  portal: [
    '/files',
  ],
} as const

export const UNROUTED_PREFIXES: readonly string[] = []

export const HEALTH_ROUTES = [
  { path: '/health/identity', service: 'identity' },
  { path: '/health/portal', service: 'portal' },
] as const
