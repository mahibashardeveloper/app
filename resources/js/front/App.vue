<template>
    <router-view></router-view>
</template>
<script>
import { defineComponent} from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default defineComponent({
    name: 'App',
})
</script>
<style>
    @import "../../scss/front/style.scss";
</style>
