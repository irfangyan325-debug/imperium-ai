// src/config/routes.ts
import type { MentorKey } from "./mentors";

export const ROUTES = {
  selectionHall: "/selection-hall",
  hall: "/hall",
  mentor: (key: MentorKey) => `/mentor/${key}`,
  council: "/council",
} as const;
