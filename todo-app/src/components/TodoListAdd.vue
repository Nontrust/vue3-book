<template>
    <section class="md-5">
        <div class="container">
            <div class="row justify-content-center m2">
                <div class="col border border-primary rounded">
                    <input 
                        v-model="job"
                        type="text"
                        id="todo_input"
                        class="form-control my-2"
                        placeholder="여기에 할 일을 적으세요"
                    />
                    <div class="row my-2">
                        <div class="col-6">
                            <input
                                v-model="date"
                                type="date"
                                :min="today" 
                            />
                        </div>
                        <div>
                            <button type="button" class="btn btn-primary btn-sm float-end" @click="onAddTodo">
                                작업 추가
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { reactive, toRefs, inject,ref } from 'vue'

export default {
    name: 'TodoListAdd',
    setup () {
        const today = inject('today')
        const addTodo = inject('addTodo')

        const reactive_todo = reactive({job:'', date: today, today: today})

        const onAddTodo = () => {
            if (reactive_todo.length > 0) { 
                addTodo(reactive_todo.job, reactive_todo.date)
                reactive_todo.job = ''
                reactive_todo.date = today
            }
        }

        return {
            ...toRefs(reactive_todo),
            onAddTodo
        }
    }
}
</script>

<style lang="scss" scoped>

</style>