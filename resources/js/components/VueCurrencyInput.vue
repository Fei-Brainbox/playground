<script>
import { useCurrencyInput } from 'vue-currency-input';

export default {
    emits:['add-one'],

    props: {
        options: Object
    },
    methods: {
        callFather() {
            this.$emit('add-one')
        }
    },
    setup(props) {
        const { inputRef } = useCurrencyInput(props.options);
        return { inputRef }
    }
}
</script>
<template>
    <input 
        ref="inputRef"
        type="text"
    />
    <button @click="callFather()"> test </button>
</template>