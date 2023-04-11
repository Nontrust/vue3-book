import { inject } from 'vue'
import moment from 'moment'

export const useFilter = () => {
    const todayMoment = inject('today')

    const sortDate = (a, b) =>{
        const momentA = moment(a.date)
        const momentB = moment(b.date)

        return momentA.isBefore(momentB) ? 1 
            : momentA.isBefore(momentB) ? 0 
            : a.id-b.id
    }
    
    const getPendingTodos = (todos) => {
        return todos.value
            .filter((todo) => moment(todo.date).isBefore(todayMoment) && !todo.completed)
            .slice()
            .sort(sortDate)
    }

    const getAllTodos = (todos) => todos.value.slice().sort()

    const getActiveTodayTodos = (todos) => {
        return todos.value
            .filter((todo) => moment(todo.date).isSame(todayMoment) && !todo.completed)
            .slice()
            .sort(sortDate)
    }

    const getCompletedTodayTodos = (todos) => {
        return todos.value
            .filter((todo) => moment(todo.date).isSame(todayMoment) && todo.completed)
            .slice()
            .sort(sortDate)
    }

    const getAllTodayTodos = (todos) => {
        return getActiveTodayTodos(todos)
            .concat(getCompletedTodayTodos(todos))
            .slice()
            .sort(sortDate)
    }

    

    return {
        getPendingTodos,
        getAllTodos,
        getActiveTodayTodos,
        getCompletedTodayTodos,
        getAllTodayTodos,
    }
}