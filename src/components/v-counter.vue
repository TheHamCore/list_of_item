<template>
    <div class="stepper">
        <input 
            class="product__count stepper-input" 
            type="text" 
            :value="product"
        >

        <button 
            class="stepper-arrow up"
            @click="$emit('increment')"
        >   
        </button>                                   
        <button 
            :disabled="minValueProduct"
            class="stepper-arrow down"
            @click="$emit('decrement')"
        >
        </button>                                   
    </div>
</template>

<script>
export default {
    name: 'v-counter',
    emit: ['increment', 'decrement'],
    props: ['product', 'minValueProduct']   
}
</script>

<style lang="scss" scoped>

</style>