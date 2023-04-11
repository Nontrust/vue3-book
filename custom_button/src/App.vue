<template>
  <div>
    <MyButton> My button</MyButton>
    <MyButton sm> My button</MyButton>
    <MyButton lg background-white> My button</MyButton>
    <MyButton sm pill text-red background-black> My button</MyButton>
    <MyButton md pill text-green background-pink> My button</MyButton>
    <MyButton lg pill @click.prevent="onClick"> My button</MyButton>
    <MyButton type="switch" background-blue text-white v-model:active="active">switch</MyButton>
  </div>
</template>

<script>
import MyButton from './components/MyButton.vue'
export default {
  name: 'app',
  methods: {
    onClick(event) {
        alert('click')
    },
  },
  components: {
    MyButton,
  },
}
</script>