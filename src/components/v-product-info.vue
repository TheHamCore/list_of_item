<template>
    <div>
        <v-product-price
            :productItem="productItem"
        >
        </v-product-price>
        
        <div class="product_price_points">
            <p class="ng-binding">Можно купить за {{(productItem.priceGold / 2).toFixed()}} балла</p>
        </div>
        <div class="list--unit-padd"></div>
        <div class="list--unit-desc">
            <div class="unit--info">
                <div class="unit--desc-i"></div>
                <div class="unit--desc-t">
                    <p>
                        <span class="ng-binding">Продается упаковками:</span>
                        <span class="unit--infoInn">1 упак. = 2.47 м. кв. </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vProductPrice from './v-product-price'


export default {
    props: ['productItem'],
    components: {
        vProductPrice
    }
}
</script>

<style lang="scss" scoped>

</style>