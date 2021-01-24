<template>
    <div class="product product_horizontal">                    
        <span class="product_code">Код: 147268</span>
        <div class="product_status_tooltip_container">
            <span class="product_status">Наличие</span>
        </div>                                
        <div class="product_photo">
            <a href="#" class="url--link product__link">
                <img :src="productItem.primaryImageUrl" alt="img">
            </a>                                    
        </div>
        <div class="product_description">
            <a href="#" class="product__link">{{productItem.title}}</a>
        </div>
        <div class="product_tags hidden-sm">
            <p>Могут понадобиться:</p>
            <a href="#" class="url--link" v-for="link in arrayOfLink" :key="link.id"> 
                {{link}} 
            </a>
        </div>
        <v-product-info
            :productItem="productItem"
        >

        </v-product-info>
        <div class="product__wrapper">
            <div class="product_count_wrapper">
                <v-counter
                    @increment="incrementProduct"
                    @decrement="decrementProduct"
                    :product="product"
                    :minValueProduct="minValueProduct"
                >
                </v-counter>
            </div>
            <button class="btn btn_cart" data-url="/cart/" data-product-id="productItem.">
                <svg class="ic ic_cart">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
                </svg>
                <span class="ng-binding">В корзину</span>
            </button>
        </div>
    </div>
</template>

<script>
import vCounter from './v-counter'
import vProductInfo from './v-product-info'


export default {
    name: 'v-product',
    props: ['productItem', 'productArray'],
    components: {
        vCounter,
        vProductInfo
    },
    data () {
        return {
            product: 1,
            arrayOfLink: this.productItem.assocProducts.split('\n'),
            srcModificated: this.productItem.primaryImageUrl.split('/'),
        }
    },
    methods: {
        incrementProduct () {
            this.product ++
        },
        decrementProduct () {
            this.product --
        },

    },
    computed: {
        minValueProduct: (vm) => vm.product <= 1,
        computedSrc0: (vm) => vm.srcModificated.splice(-1,1, '_220x220_1.jpg'),
        computedSrc2: (vm) => vm.srcModificated.join('/')
    }
    
}
</script>

<style lang="scss" scoped>

</style>

