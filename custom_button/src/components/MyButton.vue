<template>
  <button v-bind="$attrs" :type="type" :class="classes" v-on="type=='switch' ? {click:onClick} : {}" ref="button">
    <slot></slot>
  </button>
</template>

<script>
import {ref, reactive, onMounted} from 'vue';
export default {
  props: {
    type:{
      default: 'button',
      validator: (value) =>{
        const allowed = ['button', 'submit', 'reset', 'switch']
        return allowed.includes(value)
      },
    },
    sm: Boolean,
    md: {
      type: Boolean,
      default: true,
    },
    lg: Boolean,
    pill: Boolean,
    active:  Boolean,
  },
  emits: ['update:active'],
  setup (props, context) {
    const classes = ref([])
    const button = ref(null)
    const active = ref(props.active)

    if(props.sm) classes.value.push('sm')
    else if(props.lg) classes.value.push('lg')
    else if(props.md) classes.value.push('md')
    else if(props.pill) classes.value.push('pill')
    else if(props.active) classes.value.push('deactive')

    const changeBrightness = () =>{
      if(props.type=='switch') {
        if(active.value) classes.value.push('deactive')
        else classes.value = classes.value.filter(i=>i!='deactive')

        console.log(classes)
      }
    }
    changeBrightness()

    const onClick = () =>{
      active.value= !active.value
      changeBrightness()
      context.emit('update:active', active.value)
    }

    onMounted(() => {      
      Object.keys(context.attrs).forEach((attr)=>{
        if(attr.startsWith('text-')) button.value.style.color = attr.substring(5)
        if(attr.startsWith('background-')) button.value.style.backgroundColor = attr.substring(11)
      })
    })

    return {
      classes,
      button,
      onClick
    }
  }
}

</script>

<style scoped>
button{
  outline: none;
}
.sm{
  height: 20px;
  font-size: 13px;
}

.md{
  height: 30px;
  font-size: 22px;
}

.lg{
  height: 40px;
  font-size: 31px;
}

.pill{
  border-radius: 16px;
}
.deactive{
  filter:brightness(50%);
}
</style>