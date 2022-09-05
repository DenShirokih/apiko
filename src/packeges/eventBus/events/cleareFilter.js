import eventBus from '../eventsBus'

const eventName = 'cleareFilter'

const subscribe = (callback) => {
    return eventBus.subscribe(eventName ,callback)
}

const broadcast = (data) => {
    eventBus.broadcast(eventName, data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    subscribe,
    broadcast
}