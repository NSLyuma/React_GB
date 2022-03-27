import { nanoid } from "nanoid";

export const chats = Array.from({ length: 5 }).map((_, index) => ({
  name: `Chat ${index + 1}`,
  id: nanoid(),
}));
