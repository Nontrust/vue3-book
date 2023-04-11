import {reactive, toRefs} from 'vue'

export const useIdb = async () =>{
    const db = await this.$db
    const KEY = 'todos'
    const storage_reactive = reactive({id:0})

    const transaction = db.transaction(KEY, 'readwrite')
    const objectStore = transaction.objectStore('todos');

    const loadTodos = async (initTodos) => {
        const todos = await objectStore.getAll();

        /** 
         * todo의 last id 를 가져올 예정
         * */ 
        storage_reactive.id = todos.length

        console.log('todos', todos)
        initTodos(todos)
    }
    const saveTodo = async (todo) => {
        return await objectStore.add(todo);
    }
    const saveTodos = async (todos) => {
        await todos.array.forEach(todo => {
            objectStore.add(todo);
        });
    }

    return {
        ...toRefs(storage_reactive),
        loadTodos,
        saveTodo,
        saveTodos,
    }

}