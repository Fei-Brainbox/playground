<template>
    <swiper-component
        :modules="modules"
        :space-between="20"
        :initialSlide=1
        :breakpoints="breakpoints"
        :pagination="{
            clickable: true,
        }"
        navigation
    >
        <swiper-slide>
            <div class="card card-coverage">
                <span class="badge badge-pill">Selected</span>
                <button type="button" class="icon-help icon-help-clickable border-0"
                    aria-label="Hint for Coverage Option" tabindex="0" data-toggle="tooltip" data-placement="top"
                    title="This option gives you the minimum coverage required to get on the road."></button>
                <div class="card-body">
                    <h2><span>Standard </span>Coverage</h2>
                    <table class="table table-borderless table-coverages text-left">
                        <tbody>
                            <tr>
                                <td><span class="icon-checkmark-black"></span></td>
                                <td>Third party liability</td>
                                <td>1M</td>
                            </tr>
                            <tr>
                                <td><span class="icon-checkmark-black"></span></td>
                                <td>Collision deductible</td>
                                <td>$1000</td>
                            </tr>
                            <tr>
                                <td><span class="icon-checkmark-black"></span></td>
                                <td>Comprehensive deductible</td>
                                <td>$1000</td>
                            </tr>
                            <tr class="icon-disabled">
                                <td><span class="icon-times-disabled"></span></td>
                                <td>Rental car coverage</td>
                                <td>No</td>
                            </tr>
                            <tr class="icon-disabled">
                                <td><span class="icon-times-disabled"></span></td>
                                <td>Reduced glass coverage</td>
                                <td>No</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-footer">
                    <button @click="setSelectedRate()" type="button" class="btn btn-secondary btn-block"
                        dusk="auto-coverage-basic">
                        <img src="https://cblq.brainbox.test/images/checkmark.svg" alt="" class="checkmark-coverages">
                        <span>Get Basic</span>
                    </button>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card card-coverage card-most-popular-coverage">
                <button type="button" class="icon-help icon-help-clickable border-0" tabindex="0" data-toggle="tooltip"
                    data-placement="top" title="This option gives you a higher level of coverage for peace of mind."
                    aria-label="This option gives you a higher level of coverage for peace of mind."></button>
                <div class="card-body">
                    <h2><span class="text-tertiary">Premium </span>Coverage</h2>
                    <table class="table table-borderless table-coverages text-left">
                        <tbody>
                            <tr>
                                <td><span class="icon-checkmark-tertiary"></span></td>
                                <td>Third party liability</td>
                                <td>2M</td>
                            </tr>
                            <tr>
                                <td><span class="icon-checkmark-tertiary"></span></td>
                                <td>Collision deductible</td>
                                <td>$500</td>
                            </tr>
                            <tr>
                                <td><span class="icon-checkmark-tertiary"></span></td>
                                <td>Comprehensive deductible</td>
                                <td>$500</td>
                            </tr>
                            <tr>
                                <td><span class="icon-checkmark-tertiary"></span></td>
                                <td>Rental vehicle coverage</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td><span class="icon-checkmark-tertiary"></span></td>
                                <td>Reduced glass coverage</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-footer">
                    <button @click="setPremiumCoverage()" type="button" class="btn btn-tertiary btn-block"
                        dusk="auto-coverage-premium">
                        <img src="https://cblq.brainbox.test/images/checkmark.svg" alt="" class="checkmark-coverages">
                        <span>Get Premium</span>
                    </button>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card card-coverage">
                <button type="button" class="icon-help icon-help-clickable border-0"
                    aria-label="Hint for Coverage Option" tabindex="0" data-toggle="tooltip" data-placement="top"
                    title="This option is customized to cover your unique needs."></button>
                <div class="card-body">
                    <h2><span>Customized </span>Coverage</h2>
                    <img src="https://cblq.brainbox.test/images/questions_answers_bubbles.png" width="108" height="88" role="presentation">
                    <p class="card-coverage-hint">Let’s start question & answer to customize your coverage</p>
                </div>
                <div class="card-footer">
                    <button @click="selectCustomized()" type="button" class="btn btn-primary btn-block"
                        dusk="auto-coverage-customize">
                        <img src="https://cblq.brainbox.test/images/checkmark.svg" alt="" class="checkmark-coverages">
                        <span>Start to customize</span>
                    </button>
                </div>
            </div>
        </swiper-slide>
    </swiper-component>
    
</template>
<script>
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/vue';
export default {
    components: {
        SwiperComponent,
        SwiperSlide,
    },
    setup() {
        const breakpoints = {
            320:{
                slidesPerView: 1,
                centeredSlides: true,
                
            },
            768: {
                slidesPerView: 1.5,
                centeredSlides: true,
            },
            1024: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        };
        return {
            breakpoints,
            modules: [Pagination, Navigation],
        }
    },
    data() {
        return {
            rates: [],
        }
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style scoped>
    .swiper-pagination-bullet{
        margin: 0 10px;
    }
    .swiper-pagination-bullet-active{
        background-image: url("https://cblq.brainbox.test/images/carousel_slide_control_active.svg");
    }

</style>