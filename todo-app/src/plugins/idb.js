import { openDB } from 'idb'

const idbPlugin = {
    install(app) {
        const dbPromise = openDB('todo-app', 1, {
            upgrade(db) {
                const objectStore = db.createObjectStore('todos', {keyPath:'id', autoIncrement:true})
                // objectStore.createIndex('completed', {unique: false})
            }
        })
        console.log(dbPromise)
        app.config.globalProperties.$db = dbPromise;
        // provide('$idb', dbPromise)
    }
}

export default idbPlugin