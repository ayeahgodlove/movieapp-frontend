import { createAction } from '@ngrx/store';

export const fetchAllUsers = createAction('[User Component] Fetch All Users');
export const searchUser = createAction('[User Component] Search User');
export const createUser = createAction('[User Component] Create User');
export const updateUser = createAction('[User Component] Update User');
export const deleteUser = createAction('[User Component] Delete User');