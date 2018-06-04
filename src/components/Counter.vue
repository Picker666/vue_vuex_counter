<template>
    <section class="counterCls">
        <h3 v-text="title"></h3>
        <span v-text="value || 0"></span>&#x3000;
        <button @click="increase">increase</button>&#x3000;
        <button @click="decrease">decrease</button>&#x3000;
        <button @click="increaseAsync">increaseAsync</button>&#x3000;
        <span v-text="oddOrEven"></span>
    </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'counter',
  data: function () {
    return {
      title: 'this is counter for pratice...'
    }
  },
  methods: {
    // increase () {
    //     this.$store.commit('increase');
    // },
    // decrease () {
    //     this.$store.commit('decrease');
    // }

    // increase: function () {
    //     this.$store.dispatch('increase');
    // },
    // decrease: function () {
    //     this.$store.dispatch('decrease');
    // },
    // increaseAsync: function () {
    //     this.$store.dispatch('increaseAsync')
    // }
    // 与上面等价
    ...mapActions([
      'increase', // increase: () => this.$store.dispatch('inrease')
      'decrease',
      'increaseAsync'
    ])
  },
  computed: {
    value: function () {
      return this.$store.state.counter
    },
    oddOrEven: function (value) {
      return (this.value % 2 && 'odd') || 'even'
    }
  }
}
</script>

<style scoped>
.counterCls {
  padding: 10px;
  background-color: lightblue;
}
</style>
