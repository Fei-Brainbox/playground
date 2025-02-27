<template>
    <swiper 
        :slides-per-view="3" 
        :space-between="50" 
        @swiper="onSwiper" 
        @slideChange="onSlideChange"
    >
        <swiper-slide @click="chooseRate()">Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
    methods: {
        chooseRate(){
            console.log('rate choosen !');
        }
    }
};
</script>

<style>
    .swiper-slide{
        min-height: 500px;
        border: 3px solid black;
    }
</style>