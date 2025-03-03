<template>
    <swiper :slides-per-view="1" :space-between="0">
        <swiper-slide v-for="(rate, index) in this.rates" :key="index">
            <div class="card card-rate">
                <span class="flag">Your <span class="text-uppercase">thaaa</span> Rate</span> <!---->
                <div class="card-body">
                    <div class="card-rate-quotes">
                        <h1 class="quote"><sup>$</sup>{{ rate.premium_annually}}<small>/ Year</small></h1>
                    </div> 
                    <img width="120" height="36" src="https://cblq.brainbox.test/images/logo_brokerlink.png" 
                        role="presentation"
                        class="logo-provider" />
                    <button type="button" class="btn btn-primary" tabindex="0" @click="setSelectedRate(rate, index)">
                        Purchase Program
                    </button>
                </div>
            </div>
        </swiper-slide>
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
        
    },
    data() {
        return {
            rates: [],
        }
    },
    mounted() {
        this.rates = [
            {
                "carrier_code": "TRI",
                "carrier_name": "Trisura",
                "premium_annually": 433,
                "premium_monthly": 36,
                "coverages": {
                    "professional_liability": {
                        "title": "Professional Liability",
                        "cost": "122.00",
                        "attributes": {
                            "limit": "$10,000,000 per loss/$10,000,000 per policy period",
                            "cost": "122",
                            "items": [
                                {
                                    "title": "Professional Liability",
                                    "limit": "$10,000,000",
                                    "description": "each claim and aggregate"
                                },
                                {
                                    "title": "Penal Legal Costs",
                                    "limit": "$300,000",
                                    "description": ""
                                },
                                {
                                    "title": "Disciplinary Legal Costs",
                                    "limit": "$300,000",
                                    "description": ""
                                }
                            ],
                            "label": "Plan 1"
                        }
                    },
                    "general_liability": {
                        "title": "Commercial General Liability",
                        "cost": "136.00",
                        "attributes": {
                            "label": "Option 1"
                        }
                    },
                    "cyber_liability": {
                        "title": "Cyber Liability",
                        "cost": "25.00",
                        "attributes": {
                            "limit": null,
                            "cost": "25",
                            "items": [
                                {
                                    "title": "1st Party Expense Coverage (TEOE.080)",
                                    "limit": "$25,000",
                                    "description": "Aggregate Limits of Liability"
                                },
                                {
                                    "title": "3rd Party Expense Coverage (TEOE.083)",
                                    "limit": "$23,000",
                                    "description": "Aggregate Limits of Liability"
                                }
                            ],
                            "label": "Package 1"
                        }
                    },
                    "commercial_property": {
                        "title": "Commercial Property",
                        "cost": 150,
                        "attributes": {
                            "limit": "$25,000",
                            "cost": "150",
                            "items": [
                                {
                                    "title": "Contents of every description.",
                                    "limit": "$25,000",
                                    "description": ""
                                }
                            ],
                            "label": "Package 1"
                        }
                    }
                },
                "carrier_id": 33,
                "carrier_description": null,
                "has_discount": false,
                "discount": 0,
                "group_code": "",
                "group_name": ""
            }
        ]
    },
    methods: {
        setSelectedRate() {
            console.log('rate choosen !');
        },
    }
};
</script>

<style>
.swiper-slide {
    border: 2px solid #F8D172;
}
</style>