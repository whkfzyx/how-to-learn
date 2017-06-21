<template>
  <div class="page1">
    <router-view></router-view>
    <group>
      <cell title="push"
            @click.native="$router.push('/page1/123/todo')"></cell>
      <cell title="pop"
            @click.native="$router.go(-1)"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  mounted () {
    // console.log(this.$route.meta)
  },
  beforeRouteEnter (to, from, next) {
    // does NOT have access to `this` component instance
    console.log(to)
    console.log(this)
    next(vm => {
      console.log(vm)
    })
  }
}
</script>

<style>

</style>
