<template>
    <div>
        <Multiselect 
            v-model="value" 
            mode="tags" 
            :options=options 
            :close-on-select="false"
            :create-option="true"
            :searchable="true"
            :max=3
            :placeholder="placeholder"
            ref="myMultiSelect"
            @select="checkGroup()"
        />

        <span class="pl-4" v-if="reachMaximum">{{ this.custom_message }}</span>
        
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
            group: [],
            options: [],
            reachMaximum: false,
            custom_message: 'You can only add up to 3 groups.',
            placeholder:'Start typing...',
        }
    },

    mounted() {
        axios.get('https://cblq.brainbox.test/api/groups')
            .then(response => {
               this.group = response.data.payload.data;
               this.group.forEach(element => {
                    const item = {};
                    item.value = element.code;
                    item.label = element.name;
                    item.id = element.id;

                    this.options.push(item)
               });
            }).catch(()=>{
                console.log('errors');
            })
    },

    methods:{
        checkGroup() {
            this.reachMaximum = this.value.length >= 3 ? true : false;

            if(this.reachMaximum) this.$refs.myMultiSelect.close();
        }
    }
}
</script>

<style src="@vueform/multiselect/themes/default.css">
</style>