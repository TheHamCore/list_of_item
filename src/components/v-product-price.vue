<template>
    <div>
         <div class="product_units">
            <div class="unit--wrapper">

                <div 
                    class="unit--select"
                    @click=selectOne
                    :class="activeClassOne"
                >
                    <p class="ng-binding" >за м кв.</p>
                </div>

                <div 
                    class="unit--select"
                    @click=selectTwo
                    :class="activeClassTwo"
                >
                    <p class="ng-binding" >За упаковку</p>
                </div>
            </div>
        </div>
        <p class="product_price_club_card">
            <span class="product_price_club_card_text">По карте<br>клуба</span>

            <span class="goldPrice">   
                {{ priceWithCard }}
            </span>

            <span class="rouble__i black__i">
                <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
                </svg>
                </span>
        </p>
        <p class="product_price_default">

            <span class="retailPrice">   
                {{ priceWithoutCard }}
            </span>

            <span class="rouble__i black__i">
                <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
                </svg>
            </span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'v-product-price',
    data () {
        return {
            isSelectOne: true,
            isSelectTwo: false
        }
    },
    props: ['productItem'],
    methods: {
        selectOne () {
            this.isSelectOne = true
            this.isSelectTwo = false
        },
        selectTwo () {
            this.isSelectTwo = true
            this.isSelectOne = false
 
        },
    },
    computed: {
       activeClassOne: (vm) => vm.isSelectOne ? 'unit--active' : '',
       activeClassTwo: (vm) => vm.isSelectTwo ? 'unit--active' : '',
       priceWithCard (vm) {
           if (vm.activeClassOne) {
               return vm.productItem.priceGoldAlt.toFixed(2)
           } else if (vm.activeClassTwo) {
               return vm.productItem.priceGold.toFixed(2)
           } else {
               return ''
           }
       },
       priceWithoutCard (vm) {
           if (vm.activeClassOne) {
               return vm.productItem.priceRetailAlt.toFixed(2)
           } else if (vm.activeClassTwo) {
               return vm.productItem.priceRetail.toFixed(2)
           } else {
               return ''
           }
       }
    },
}
</script>

<style lang="scss" scoped>

</style>