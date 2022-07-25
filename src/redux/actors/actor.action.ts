import { createAction } from '@ngrx/store';

export const fetchAllActors = createAction('[Actor Component] Fetch All Actors');
export const searchActor = createAction('[Actor Component] Search Actor');
export const createActor = createAction('[Actor Component] Create Actor');
export const updateActor = createAction('[Actor Component] Update Actor');
export const deleteActor = createAction('[Actor Component] Delete Actor');