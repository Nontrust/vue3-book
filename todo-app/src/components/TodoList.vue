<template>
    <main>
        <div v-for="(todo, index) in data" :key="todo.id">
            <div class="input-group my-2 input-group-sm">
                <div class="input-group-text">
                    <input 
                        type="checkbox"
                        class="form-check-input mt-0"
                        :checked="todo.completed"
                        :disable="todo.completed"
                        @click="completedTodo(todo.id)"
                    />
                </div>
                <div class="input-group-text">
                    <input 
                        type="date"
                        class="form-check-input mt-0"
                        disabled
                        :min="today"
                        :value="todo.date"
                    />
                </div>
                <input type="text" class="form-controle" :value="todo.job" />
                <button
                    type="button"
                    class="btn btn-outline-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                >
                    할일 관리
                </button>

                <ul class="dropdown-menu dropdown-menu-end">
                    <li v-for="item in menu" :key="item.str">
                        <a class="dropdown-item" @click.prevent="item.func(todo.id)">
                            {{item.str}}
                        </a>
                    </li>
                </ul>
            </div>
            <div v-show="(index+1) < data.length" class="col border border-second" />
        </div>
    </main>
</template>

<script>
    import { inject } from 'vue'
    export default {
        name: 'TodoList',
        props: {
            data: {
                type: Array,
                default: [],
            }
        },    
        setup() {
            const removeTodo = inject('removeTodo')
            const completeTodo = inject('completeTodo')
            const today = inject('today')

            const menu = [{str:'할일 삭제', func: removeTodo},{str:'할일 완료', func: completeTodo}]

            return{
                menu,
                today,
                completeTodo
            }
        }
    }

</script>