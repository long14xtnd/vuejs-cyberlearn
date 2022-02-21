<template>
Đầu tiên ta cần dùng v-if để quyết định xem modal này đóng hay mở
nếu v-if="true" thì là mở,false thì ngược lại 
và v-if này ta truyền cho nó 1 cái prop


  <div v-if="isOpen" class="modal" @click="handleClose">
    <!-- thêm handleclose chỗ này tức là khi người dùng nhấn ra bên ngoài cái khu vực modal thì nó cùng sẽ được đóng -->
    <div class="modal__container" @click.stop>
        <!-- còn chỗ này thêm @click.stop có nghĩa là ngăn chặn sự  kiện mặc định của JS,khi ta thao tác vào các thành phần con bên trong của modal thì nó sẽ không bị đóng -->
      <div class="modal__header">
        <h1 class="modal__title">Cart</h1>
        <div class="modal__close" @click="handleClose">
          <i class="fa fa-times"></i>
        </div>
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
      <div class="modal__footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
    },
    handleCloseModal: {
      type: Function,
    },
  },
  methods: {
    handleClose() {
      this.handleCloseModal();
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.modal__container {
  width: 960px;
  margin: auto;
  margin-top: 70px;
  background: white;
  border: 1px solid #888;
  padding: 10px 20px;
}
.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal__close {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
}
.modal__close:hover {
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>