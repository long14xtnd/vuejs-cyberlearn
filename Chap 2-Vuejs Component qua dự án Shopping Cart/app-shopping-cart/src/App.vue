<template>
  <header>
    <the-header
      :cartList="cartList"
      @handle-delete-cart="handleDelete"
      @handle-up-cart="handleUp"
      @handle-down-cart="handleDown"
      @handle-up-or-down-amount="handleUpOrDownAmount"
    />
  </header>
  <main class="container">
    <product-list @handle-buy="handleBuy" />
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ProductList from "./components/ProductList.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    ProductList,
  },
  data() {
    return {
      cartList: [],
    };
  },
  methods: {
    /**Xử lý thêm sản phẩm vào giỏ hàng
     * Đầu tiên nút mua ở trong ProductItem và danh sách sản phẩm mua lại nằm trong CartList
     * cho nên cần dùng prop emit để có thể trao đổi dữ liệu giữa 2 component này
     * sau khi đã truyền dc dữ liệu từ thằng ProductItem sang App.Vue rồi lúc này cần xử lý
     * nếu như sản phẩm đó đã tồn tại trong giỏ hàng thì tăng số lượng của nó lên 1
     * nếu chưa tồn tại trong giỏ thì ta thêm nó vào danh sách CartList trong data đồng thời gán số lượng cho nó bằng 1
     */

    handleBuy(productItem) {
      const index = this.cartList.findIndex(
        (cartItem) => cartItem.id === productItem.id
      );
      if (index !== -1) {
        //tìm thấy productItem trong cartList

        this.cartList[index].amount += 1;
      } else {
        const newProductItem = { ...productItem, amount: 1 };
        this.cartList = [...this.cartList, newProductItem];
      }
      // console.log(productItem);
      // this.cartList.push(productItem);
    },
    /**Xử lý xóa sản phẩm trong giỏ hàng
     * Nút xóa ở trong component CartList,và dữ liệu cần trả về nằm trong App.vue vậy nên ta tiếp tục sử dụng prop emit để có thể trao đổi dữ liệu giữa 2 component
     * khi đã có dữ liệu ở file Vue rồi thì xử lý chức năng xóa,dùng filter
     * 
     */
    handleDelete(cart) {
      this.cartList = this.cartList.filter(
        (cartItem) => cartItem.id !== cart.id
      );
    },
    /**Xử lý chức năng tăng giảm sản phẩm trong giỏ hàng
     * Đầu tiên dùng prop emit để truyền dữ liệu giữa CartList và App.vue,ở đây ta truyền 2 dữ liệu là status và cart
     * status === true tức là tăng,false là giảm
     * cart là sản phẩm ta cần tăng hoặc giảm
     * Tạo 1 biến index để xem xem sản phẩm cần tăng có xuất hiện trong cartList hay ko,nếu nó # -1 tức là có
     * lúc này xử lý tiếp nếu status=true==>xử lý tăng,nếu số lượng cần tăng ko vượt quá số lượng trong kho thì ok,còn ko thì xuất ra thông báo
     * nếu status===false xử lý giảm,chỉ cho nó giảm tối đa về 1,nếu ng dùng cố tình giảm tiếp thì xuất ra cảnh báo 
     * 
     */
    handleUpOrDownAmount(params) {
      const { status, cart } = params;
      const index = this.cartList.findIndex(
        (cartItem) => cartItem.id === cart.id
      );
      if (index !== -1) {
        if (status) {
          //tang
          if (
            this.cartList[index].amount < this.cartList[index].quantityInStock
          ) {
            this.cartList[index].amount += 1;
          } else {
            alert("Không thể thêm vượt quá số lượng trong kho");
          }
        } else {
          //giam
          if (this.cartList[index].amount > 1) {
            this.cartList[index].amount -= 1;
          } else {
            alert("Không thể giảm");
          }
        }
      }
    },
    handleUp(cart) {
      if (cart.amount < cart.quantityInStock) {
        cart.amount += 1;
      } else {
        alert("Không được tăng");
      }

      // console.log("up san pham",cart);
    },
    handleDown(cart) {
      if (cart.amount > 1) {
        cart.amount -= 1;
      } else {
        alert("Không được giảm ");
      }

      // console.log("up san pham",cart);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
