const mapping: Record<string, string> = {
  clients: 'client',
  notes: 'note',
  therapists: 'therapist',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
