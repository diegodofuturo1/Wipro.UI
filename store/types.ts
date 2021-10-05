import { MutationTree } from 'vuex'
import { User } from '~/model'


export interface State {
    currentLocator?: User
}

export interface Getters {
    fetchCurrentLocator: (state: State) => User | undefined
}

export enum MutationType {
    SET_CURRENT_USER = 'SET_CURRENT_USER'
}

export type RootState = ReturnType<() => State>

export interface Mutations extends MutationTree<RootState> {
    [MutationType.SET_CURRENT_USER](state: State, locator: User): void    
}