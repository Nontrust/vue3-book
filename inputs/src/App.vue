<template>
  <label for="name">이름 : </label>
  <input type="text" id="name" v-model="result.name" placeholder="이름" /><br />
  <label for="age">나이 : </label>
  <input type="number" id="age" v-model="result.age" placeholder="나이" /><br />
  <label for="gender">성별 : </label>
  <label>남성</label>
  <input type="radio" name="gender" v-model="result.gender" value="male" />
  <label>여성</label>
  <input type="radio" name="gender" v-model="result.gender" value="female" /><br />
  <label for="hobby">취미 : </label>
  <span v-for="hobby in hobby_options" :key="hobby">
    <label for=""> {{ hobby }}</label>
    <input type="checkbox" v-model="result.hobby" :value="hobby" />
  </span><br />

  <div>
    <h3>결과</h3>
    <hr />
    {{result}}
  </div>

  
</template>

<script>
import { reactive } from 'vue'

export default {
  setup () {
    const name = ''
    const age = 0
    const gender = 'male'
    const hobby = ['스포츠']

    const hobby_options = ['스포츠', '그림', '음악', '코딩']

    const result = reactive({name, age, gender, hobby})

    return {
      result,
      hobby_options
    }
  }
}
</script>

<style lang="scss" scoped>

</style>