import { createAction } from '@ngrx/store';

export const fetchAllGenres = createAction('[Genre Component] Fetch All Genres');
export const searchGenre = createAction('[Genre Component] Search Genre');
export const createGenre = createAction('[Genre Component] Create Genre');
export const updateGenre = createAction('[Genre Component] Update Genre');
export const deleteGenre = createAction('[Genre Component] Delete Genre');