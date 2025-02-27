<template>
    <div>
        <Multiselect v-model="value" :options="options" mode="tags" @select="console.log(value)" />
    </div>
</template>

<script>
import Multiselect from '@vueform/multiselect'

export default {
    components: {
        Multiselect,
    },
    data() {
        return {
            value: null,
            options: []
        }
    },

    mounted() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                json.forEach(element => {
                    this.options.push(element.username)
                });
            })
    },
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>