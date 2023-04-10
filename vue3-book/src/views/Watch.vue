<template>
    <p>{{ count_c_1 }}</p>
    <button @click="count_c_1++">count_c_1 증가</button>
    <p>{{ count_c_2 }}</p>
    <button @click="count_c_2++">count_c_2 증가</button>
    <p>{{ state }}</p>
    <button @click="onStop()">watch Effect stop</button>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'
export default {
    setup () {
        const count_c_1 = ref(0)
        const count_c_2 = ref(0)
        const state = ref('실행 중')

        watch(
            count_c_1,
            (cur, prev) =>{
                console.log(`Composition API watch : ${prev} => ${cur}`)
            },
            {
                immediate: true,
            }
        )

        watch([count_c_1, count_c_2], (cur, prev) => {
            console.log(`Composition API multiple watch : ${prev} => ${cur}`)
        })

        const stop = watchEffect(
            () => {
                console.log(`Composition API watchEffect Call ${count_c_2.value}`)
            },
            {
              flush: 'post', // post, pre
            }
        )

        const onStop = () => {
          stop.value = '중지'
          stop()
        }

        return {
            count_c_1,
            count_c_2,
            state,
            onStop
        }
    }
}
</script>

<style lang="scss" scoped>

</style>