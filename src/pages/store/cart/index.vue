<template>
        <div class="page-section">
          <div class="container">
            <div class="cart_table" id="kang">
                <p><strong style="color:black;margin-top:30px">장바구니</strong><img src="@/assets/images/offMeeting/paw-print.png"/></p>
                <ul class="cart_list">
                  <!--맨 위 전체선태그 삭제 버튼-->
                  <li> 
                        <div class="checkbox">
                            <!-- <input type="checkbox" name="all_chk" id="all_chk"  @click="checkAll($event.target.checked)"> -->
                            <input type="checkbox" name="all_chk" id="all_chk" v-model="allChecked" @click="checkedAll($event.target.checked)">
                            <label for="all_chk" style="margin-left:5px">전체선택</label>
                        </div>
                        <div class="del_btn">삭제 (<span class="num">0</span>)</div>
                  </li>
                    
  
                    <!--장바구니 리스트-->
                <div>
                </div>

                  <div v-for="(cart, index) in carts" :key="cart.cartnum" >
                      <li class="cell">
                          <!--상품 체크박스 부분-->
                          <div class="checkbox">
                              <input type="checkbox" :id="'check_' + cart.cartnum" 
                              value="cart.cartnum" v-model="item_selected" :key="index" @click="selected($event)">
                              <label :for="cart" :key="index + '1'"></label>
                          </div>
                    
                          <div class="item_detail">
                              <tr>
                                  <td class="td_width cart_info_td">
                                      <!--상품 개당 가격,  상품 갯수, 상품 갯수에 맞는 가격 -->
                                      <!-- <input class="productPrice" type="hidden"><span>{{ cart.price }}</span>
                                      <input class="productQuantitiy" type="hidden"><span>{{ cart.quantity }}</span> -->
                                      <!-- <input class="productTotalPrice" type="hidden"><span>{{ cart.price * cart.price }}</span> -->
                                          <!-- <div class="productPrice"><span>{{ cart.price }}</span></div>
                                          <div class="productQuantitiy"><span>{{ cart.quantity }}</span></div>
                                          <div class="productTotalPrice"><span>{{ cart.product_price * cart.quantity }}</span></div> -->
                                  </td>
                              </tr>
                              <!--상품 이미지, 상품 이름-->
                              <img class="cart-img" src="@/assets/images/onMeeting/map-icon.png">
                              <p class="productName"><span>{{ cart.productName }}</span></p>
                          </div>
                          <!--상품 갯수 변경하는 버튼과 상품 갯수에 따른 가격 변동-->
                          <div class="opt_info">
                              <div class="price_btn" style="white-space:nowrap">
                                  <strong class="price_unit">{{ cart.productPrice }}</strong>원
                                  <input type="button" class="minus_btn" @click="minusBtn(cart)"> 
                                  <span class="product_count" style="margin-left:10px">{{ cart.quantity }}</span>
                                  <!-- <input type="text" class="product_count" style="margin-left:10px">{{ cart.quantity }} -->
                                  <input type="button" class="plus_btn" style="margin-left:10px" @click="plusBtn(cart)">
                                <span class="total_p">
                                  <strong class="price_amount" style="margin-left:10px" v-modal="totalKang"><span>{{ cart.productPrice * cart.quantity }}</span></strong><span style="margin-left:10px">원</span>
                                  <!-- <strong class="price_amount"><span>{{ cart.productList[index].price}}</span></strong>원 -->
                                  <span type="button" @click="deleteBtn(cart, index)" class="del_li_btn"><img src="https://tictoc-web.s3.ap-northeast-2.amazonaws.com/web/img/icon/btn_del_circle.svg"></span>
                                </span>
                              </div>
                          </div>
                      </li>
                  </div> <!-- for 문 끝남 -->
                  <span></span>
                </ul>
    
                <!--밑에 결제 정보 텍스트-->
                <div class="cart_total_area">
                    <p>결제 정보</p>
    
                    <div class="cart_total_price">
                        <p>총 상품금액 <strong class="item_price" style="color:#87cefa"><span>{{totalKang}}</span></strong>원<span class="plus_ic"></span></p>
                        <p><strong class="total_price color-red" style="color:#87cefa">무료배송</strong></p>
                    </div>
                </div>
    
                <!--밑에 계속 쇼핑하기, 결제하기 버튼-->
                <div class="btn_box">
                    <button type="button" onclick="history.go(-1);return false;" class="btn wh-btn" style="border-color:#87cefa">계속 쇼핑하기</button>
                    <button type="button" onclick="order()" class="btn black-btn" style="background-color:#87cefa">구매하기</button>
                </div>
              </div>
            </div>
        </div>
    
      <div class="agree"></div> <!-- 이거 지우지 마세요! -->
  </template>
  <script>
  import { ref } from "vue";
  import axios from 'axios';
  export default {
        data () {

        },
        setup() {
            const cart = ref("");

            const carts = ref([
                {
                    cartIdx:1,
                    productName:"샐러드",
                    productPrice:3000,
                    quantity:1,

                }
            ])


        let count = ref(1);
        const cartList = ref([]);
        let allChecked = false;

        let total = ref(0);

        const minusBtn = (cart) => {
            return --cart.quantity;
            //   axios.patch('/cart', {quantity: --count})
            //     .then(res => {
            //           console.log(`HYE!! :     ${res.data}`)
            //     })
            //     .catch((error) => {
            //       console.log(error);
            //     });
        };
    
        const plusBtn = (cart) => {
            return ++cart.quantity;
            //   axios.patch('/cart', {quantity: ++count.value})
            //     .then(res => {
            //       console.log(res.data)
            //     })
            //     .catch((error) => {
            //       console.log(error);
            //     });
        };
    
        const deleteBtn = (cart, index) => {
            console.log(`KANG1111111111 ${JSON.stringify(cart, null, 2)}`)
            console.log(`KANG2222222222 ${JSON.stringify(cartList.value[index], null, 2)}`)
            console.log(`KANG$$$$$$$$$ ${typeof cartList.value[0]}`)
            delete cartList.value[index];
            console.log(`KANG999999999 ${JSON.stringify(cartList.value, null, 2)}`)

        //  getTotalPrice(cartList.value);
        // console.log(`KANG33333333 ${JSON.stringify(cartList.value, null, 2)}`)

        
            //   axios.delete('/cart')
            //   .then(res => {
            //     console.log(res.data)
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   });
        };
    
        const getCartProductList = async() => {
            
            await axios.get('/cart', {})
                .then((response) => {
                console.log(`KANG!!!!!! ${JSON.stringify(response, null, 2)}`);
                    cartList.value = {...response.data}
                //   getTotalPrice(cartList.value);
                
                // for (let i = 0 ; i < Object.keys(cartList.value).length; i++) {
                //     console.log(`%%3%%  ${JSON.stringify(cartList.value[i].productList[0].price, null, 2)}`);
                //     const cart = cartList.value[i];
                //     console.log(`*************** ${cart.productList[0].price}`)
                //     total += cart.productList[0].price; // 장바구니에 담긴 제품들 모두 합친 가격.
                // }

                // console.log(`TOTAL!!!!: ${total}` )
                // console.log(`TOTAL9999999999999: ${this.total}` )
                // this.total.value = total;

                // list.forEach((cart) => {
                //     console.log(`TOTAL: ${cart}`)
                //     total += cart.value[0].productList[0].price; // 장바구니에 담긴 제품들 모두 합친 가격
                // });
                // this.total = total.value;

                })
                .finally(() => {
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        //getCartProductList();


        const getTotalPrice = (cartListValue) => {
            console.log(`GETTTTTTTTTT: ${Object.keys(cartListValue).length}`);
            let total = 0;
            for (let i = 0 ; i < Object.keys(cartListValue).length; i++) {
                console.log(`GYEIGN: ${cartListValue[i].productList[0].price}`)
                    console.log(`%%3%%  ${JSON.stringify(cartListValue[i].productList[0].price, null, 2)}`);
                    const cart = cartListValue[i];
                    console.log(`*************** ${cart.productList[0].price}`)
                    total += cart.productList[0].price; // 장바구니에 담긴 제품들 모두 합친 가격.
                }
                console.log(`@@@@KANG@@@@ ${total}`);
                return total;
        // this.total.value = total;
        }


        const checkedAll = (checked) => {
            this.allChecked = checked
                for (let i in this.cartList) {
                    this.cartList[i].selected = this.allChecked;
                }
        };

        const selected = (event) => {
            for (let i in this.boardList) {
                    if(! this.boardList[i].selected) {
                        this.allChecked = false;
                        return;
                    } else {
                        this.allChecked = true;
                    }
                }
        };

    

        return {
            cart,
            carts,
            count,
            minusBtn,
            plusBtn,
            deleteBtn,
            getCartProductList,
            cartList,
            total,
            selected,
            checkedAll,
            allChecked,
            getTotalPrice,
        
        };
        },
        computed() {



        }
        
  };
  </script>
  <style scoped>
    .cart_table {
        padding-top: 4.5rem;
    }
    .cart_table > p {
        margin-top: 60px;
        font-size: 3rem;
        border-bottom: 3px solid #87cefa;
        padding-bottom: 10px;
        padding: 0 0 10px 40px;
    }
    .cart_table  > p > img{
        width: 70px;
        height: 70px;
    }
    .cart_table .cart_list {
        padding: 4rem;
        font-size: 14px;
    }
    .cart_table .cart_list li > div {
        display: inline-block;
        position: relative;
    }
    .cart_table .cart_list li:first-of-type .del_btn {
        float: right;
        background: url(https://tictoc-web.s3.ap-northeast-2.amazonaws.com/web/img/icon/icon_trash.svg)
        no-repeat 5px;
        border: 1px solid #222;
        margin-bottom: 1.5rem;
        padding: 2px 5px 2px 25px;
    }
    .cart_table .cart_list li {
        border-bottom: 1px solid #ccc;
        padding: 15px 0;
        position: relative;
    }
    .cart_table .cart_list li > div.item_detail span {
        display: inline-block;
        font-size: 20px;
        width: 60%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin-left: 100px;
        color: #666;
    }
    .cart_table .cart_list li > div.item_detail .txt {
        margin-top: 1rem;
    }
    
    
    .cart_table .cart_list li > div.opt_info {
        position: absolute;
        right: 0;
        top: 34%;
        max-width: 39%;
        width: 300px;
    }
    
    .cart_table .cart_list li > div.opt_info .price_btn input {
        font-size: 25px;
        margin-left: -1px;
        cursor: pointer;
        color: #ccc;
        width: 30px;
        height: 30px;
        border: 0;
        outline: 0;
        display: inline-block;
        text-align: center;
        vertical-align: top;
        background-size: cover !important;
    }
    .cart_table .cart_list li > div.opt_info .price_btn input.minus_btn {
        background: url(https://tictoc-web.s3.ap-northeast-2.amazonaws.com/web/img/icon/btn_minus.svg)
        no-repeat center;
    }
    .cart_table .cart_list li > div.opt_info .price_btn input.plus_btn {
        background: url(https://tictoc-web.s3.ap-northeast-2.amazonaws.com/web/img/icon/btn_plus.svg)
        no-repeat center;
    }
    .cart_table .cart_list li > div.opt_info .price_btn span.number .price_unit {
        padding-bottom: 20px;
        font-size: 25px;
        background: #f5f5f5;
        color: #666;
        margin: 0 5px;
    }
    .cart_table .cart_list li > div.opt_info > div.price_unit div.price {
        display: inline-block;
        padding-bottom: 20px;
    }
    .cart_table .cart_list li > div.opt_info > div.price_btn > span.total_p text{
        font-size: 22px;
        /* float: right; */
        margin-left: 20px;
        padding-bottom: 20px;
    }
    .cart_table .cart_list li > div.opt_info > div.price_btn > span.total_p strong {
        vertical-align: sub;
        margin-right: 30px;
        font-size: 20px;
        padding-bottom: 20px;
    }
    .cart_table .cart_list li > div.opt_info > div.price_btn > span.total_p span {
        width: 30px;
        display: inline-block;
        padding-bottom: 20px;
    }
    .cart_table .cart_list li > div.item_detail {
        width: 60%;
    }
    
    .cart_table .cart_list li > div.item_detail img {
        max-width: 150px;
        width: 25%;
        margin: 0 5%;
        float: left;
    }
    .cart_table .cart_total_area {
        padding: 0 4rem;
    }
    .cart_table .cart_total_area > p {
        font-size: 20px;
    }
    .cart_table .cart_total_area .cart_total_price {
        border: 2px solid #707070;
        padding: 2rem;
        margin: 2rem auto;
        text-align: center;
    }
    .cart_table .cart_total_area .cart_total_price p {
        display: inline-block;
        text-align: left;
    }
    .cart_table .cart_total_area .cart_total_price p > span {
        width: 22px;
        height: 22px;
        display: inline-block;
        vertical-align: middle;
        margin: 0 20px;
        background-size: cover !important;
    }
    .plus_ic {
        background: url(https://tictoc-web.s3.ap-northeast-2.amazonaws.com/web/img/icon/ic_plus_sqaure.svg);
    }
    .equal_ic {
        background: url(https://tictoc-web.s3.ap-northeast-2.amazonaws.com/web/img/icon/ic_equal_square.svg);
    }
    .cart_table .cart_total_area .cart_total_price p > strong {
        display: inline-block;
        margin-left: 10px;
        margin: 0 5px 0 10px;
        font-size: 30px;
        vertical-align: unset;
    }
    .cart_table .btn_box {
        padding: 4rem;
        text-align: center;
    }
    .cart_table .btn_box .btn {
        padding: 10px 0;
        width: 24%;
        margin: 0 1%;
    }
    .cart_table .btn_box .black-btn {
        float: none;
    }
  </style>