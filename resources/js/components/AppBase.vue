<script>
import SwiperComponent from './SwiperComponent.vue';
import AutoSuggestionComponent from './AutoSuggestionComponent.vue';

export default {
    components: {
      SwiperComponent,
      AutoSuggestionComponent
    },
    data() {
        return {
            property_value: 0,
        }
    },
    methods: {
       
    },
    
}
</script>
<template>
    <div class="container">
        <AutoSuggestionComponent />
    </div>
    <div class="mt-5">
        <swiper-component />
    </div>
</template>

