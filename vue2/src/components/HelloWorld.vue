<template>
  <div class="hello">
    <div @click="click">click</div>
    <div>{{ list.a }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      list: {
        a: { c: 3 },
        b: 2
      }
    }
  },
  methods: {
    click() {
      console.log(1);
      this.list.a.c = 4
    }
  }
}
</script>

<style scoped></style>
