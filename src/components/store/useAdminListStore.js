import { create } from 'zustand';

export const useAdminListStore = create(set => ({
  admins: [],
  addAdmin: admin =>
    set(state => ({
      admins: [...state.admins, admin],
    })),
  removeAdmin: id =>
    set(state => ({
      admins: state.admins.filter(admin => admin.id !== id),
    })),
}));
