import type { Participant } from "@/types/participant";

export function filterParticipants(participants: Participant[], query: string): Participant[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return participants;
  return participants.filter((p) => p.name.toLowerCase().includes(trimmed));
}
