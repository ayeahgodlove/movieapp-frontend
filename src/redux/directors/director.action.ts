import { createAction } from '@ngrx/store';

export const fetchAllDirectors = createAction('[Director Component] Fetch All Directors');
export const searchDirector = createAction('[Director Component] Search Director');
export const createDirector = createAction('[Director Component] Create Director');
export const updateDirector = createAction('[Director Component] Update Director');
export const deleteDirector = createAction('[Director Component] Delete Director');