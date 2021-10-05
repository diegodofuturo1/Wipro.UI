import { State, Getters, MutationType, Mutations } from './types'

export const state = (): State => ({
    currentLocator: undefined
})

export const getters: Getters =  {
    fetchCurrentLocator: state => state.currentLocator
}

export const mutations: Mutations = {
    SET_CURRENT_USER: (state, locator) => state.currentLocator = locator
} 