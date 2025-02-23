import { createEvent, createStore } from 'effector'

export const $session = createStore<User | null>(null)
export const createSession = createEvent<User>()

$session.on(createSession, (_, payload) => payload)
