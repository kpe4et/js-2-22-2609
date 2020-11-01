<template>
    <div>
        <template v-if="type == 'catalog' || type == 'realCatalog'">
            <div class="catalog__item">
                <button 
                    class="catalog__bucket" 
                    name="add" 
                    @click="$parent.$parent.$emit('add', item)"
                >
                    <img class="catalog__hidden_img" 
                    src="https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg" alt="#">
                    <span class="catalog__hidden_text">Add to Cart</span>
                </button>
                <div class="catalog__photo">
                    <img class="catalog__img" :src="item.productImg" alt="#">
                </div>
                <div class="catalog__content">
                    <a class="catalog__name" href="#">{{item.productName}}</a>
                    <div class="catalog__price">${{item.productPrice}}.00</div>
                </div>
            </div>
        </template>

        <!-- <template v-if="type=='realCatalog'">
            <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems">
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button class="add">
                                <div class="add"><i class="add fas fa-shopping-cart"></i>Add to Cart</div>
                            </button>
                        </div>
                        <img class="feturedProduct" :src="item.productImg" alt="product1">
                    </div>
                    <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                        <div class="feturedItemName">{{ item.productName }}</div>
                        <div class="feturedItemPrice">${{ item.productPrice }}</div>
                    </div>
                </div>
            </div>
        </template> -->

        <template v-if="type == 'basket'">
            <div class="drop__box">
                <a class="drop__img" href="single.html"><img :src="item.productImg" alt="#" width="72" height="85"></a>
                <div class="drop__info">
                    <a href="single.html" class="drop__title">{{item.productName}}</a>
                    <img src="../../src/assets/imgs/drop_cart/stars.png" alt="#">
                    <div class="drop__price"><span class="drop__count">{{item.amount}}</span><span class="drop__span">
                    x
                    </span>${{item.productPrice}}</div>
                </div>
                <button class="drop__cancel fas fa-times-circle" name="remove" 
                @click="$parent.remove(item.productId)">
                </button>
            </div>
        </template>
        
        <template v-if="type == 'cart'">
            <div class="productDetailsProduct">
                <div class="productDetailsDescription">
                    <img :src="item.productImg" alt="Product1">
                    <div class="productDescription">
                        <div class="productDescriptionTitle">{{item.productName}}</div>
                        <!-- <div>
                            <div class="productDescriptionFeature">Color: <span>Red</span></div>
                            <div class="productDescriptionFeature">Size: <span>Xll</span></div>
                        </div> -->
                    </div>
                </div>
                <div class="productDetailsRight">
                    <div class="productDetailsPrice">${{item.productPrice}}</div>
                    <div class="productDetailsQuantity">
                        <form>
                            <input type="number" min="0" max="9999" 
                            :value="item.amount"
                            @input="$parent.change(item, $event.target.value)">
                        </form>
                    </div>
                    <div class="productDetailsShipping">Free</div>
                    <div class="productDetailsSubtotal">${{item.productPrice * item.amount}}</div>
                    <div class="productDetailsAction"><i class="fas fa-times-circle" @click="$parent.remove(item.productId)"></i></div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        item: { type: Object },
        type: { type: String, default: 'catalog' }
    }
}
</script>

<style>

</style>