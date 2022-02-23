<template>
  <table class="table">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Giá</th>
        <th>Số lượng trong kho</th>
        <th>Số lượng</th>
        <th>Thành tiền</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cart, index) in cartList" :key="index">
        <td scope="row">{{ index + 1 }}</td>
        <td>{{ cart.name }}</td>
        <td>{{ cart.price }}</td>
        <td>{{ cart.quantityInStock }}</td>
        <td>
          <button
            class="btn btn-success"
            @click="handleUpOrDownAmount(true, cart)"
          >
            <i class="fa fa-arrow-up"></i>
          </button>
          <span class="mx-3">{{ cart.amount }}</span>
          <button
            class="btn btn-success"
            @click="handleUpOrDownAmount(false, cart)"
          >
            <i class="fa fa-arrow-down"></i>
          </button>
        </td>
        <td>{{ cart.price * cart.amount }}</td>
        <td>
          <button class="btn btn-danger" @click="handlelDelete(cart)">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
      <tr>
        <td scope="row">Tổng tiền</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{{ sumMoney }}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    cartList: {
      type: Array,
    },
  },
  computed: {
    sumMoney() {
      return this.cartList.reduce(
        (sum, cartItem) => (sum += cartItem.amount * cartItem.price),
        0
      );
    },
  },
  methods: {
    handlelDelete(cart) {
      this.$emit("handle-delete-cart", cart);
    },
    handleUpOrDownAmount(status, cart) {
      this.$emit("handle-up-or-down-amount", { status, cart });
    },
    handleUp(cart) {
      this.$emit("handle-up-cart", cart);
    },
    handleDown(cart) {
      this.$emit("handle-down-cart", cart);
    },
  },
};
</script>

<style>
</style>