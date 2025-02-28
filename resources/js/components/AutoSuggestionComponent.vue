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
            @select="checkGroup()" />

        <span class="pl-4" v-if="reachMaximum">{{ this.custom_message }}</span>
        <pre>
            {{ value }}
        </pre>
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
            value: [],
            options: [],
            reachMaximum: false,
            custom_message: 'You can only add up to 3 groups.',
            placeholder: 'Start typing...',
            exists: 'EozNljK',
        }
    },

    mounted() {
        axios.get('https://cblq.brainbox.test/api/groups')
            .then(response => {
                this.options = (response.data.payload.data).map(item => {
                    return {
                        text: item.name,
                        value: item,
                        label: item.name,
                        ...item
                    }
                });
                if (this.exists && this.groupExistsInList(this.exists)) {
                    
                    this.value.push(this.options.find(item => item.code == this.exists || item.legacy_code == this.exists))
                    console.log(this.value)
                }
            }).catch(() => {
                console.log('errors');
            });
        
        

    },

    methods: {
        checkGroup() {
            console.log(this.value)
            this.reachMaximum = this.value.length >= 3 ? true : false;
            
            if (this.reachMaximum) this.$refs.myMultiSelect.close();
        },

        groupExistsInList(group_code) {
            if (group_code == null) {
                return false;
            }
            return this.options.some(item => item.code == group_code || item.legacy_code == group_code);
        },

    }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>