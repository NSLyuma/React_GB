import { ENDPOINT } from "../constants";

export const chatsApi = {
  get: async () => {
    const response = await fetch(ENDPOINT + "/chats");
    if (!response.ok) {
      throw new Error(response);
    }
    return response.json();
  },
  getCount: () => {},
  getById: () => {},
  create: () => {},
  update: () => {},
  delete: () => {},
};
