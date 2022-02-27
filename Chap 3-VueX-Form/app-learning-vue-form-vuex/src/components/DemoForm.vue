<template>
  <section class="container">
    <h1>Demo Form</h1>
    <!-- @submit.prevent để ngăn chặn sự kiện load lại trang mặc định của submit   -->
    <form @submit.prevent="handleSubmit">
      <!-- Input text  -->
      <div class="form-group">
        <label for="userName">Tài khoản</label>
        <input
          type="text"
          class="form-control"
          id="userName"
          v-model.trim="userName"
        />
      </div>
      <!-- Text area   -->
      <div class="form-group">
        <label for="baiLam">Example textarea</label>
        <textarea
          class="form-control"
          id="baiLam"
          rows="10"
          v-model="vanMau"
        ></textarea>
      </div>
      <!-- Check box đơn   -->
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="isSave"
          v-model="isSave"
        />
        <label class="form-check-label" for="isSave">
          Bạn có muốn lưu tài khoản không?
        </label>
      </div>
      <!-- Multi checkbox   -->
      <h1>Bạn muốn sống ở thành phố nào</h1>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="Hà Nội"
          v-model="noiMuonSong"
        />
        <label class="form-check-label"> Hà Nội </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="Đà Nẵng"
          v-model="noiMuonSong"
        />
        <label class="form-check-label"> Đà Nẵng </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="Hồ Chí Minh"
          v-model="noiMuonSong"
        />
        <label class="form-check-label"> Hồ Chí Minh </label>
      </div>
      <!-- Radio button    -->
      <div>
        <h1>Giới tính</h1>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="Nam"
            v-model="gender"
          />
          <label class="form-check-label"> Nam </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="Nữ"
            v-model="gender"
          />
          <label class="form-check-label"> Nữ </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="Bê đê"
            v-model="gender"
          />
          <label class="form-check-label"> Bê đê </label>
        </div>
      </div>
    <!-- Select box -->
  
    <div class="col-auto my-1">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Chọn team</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" v-model="team">
    
        <option value="Falcon">Falcon</option>
        <option value="FNB">FNB</option>
        <option value="HR">HR</option>
        <option value="TTNB">TTNB</option>
        <option value="Sale">Sale</option>
        <option value="Maketing">Maketing</option>
      </select>
    </div>

     <div class="form-group">
        <label for="phone">Số điện thoại</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          v-model.number="phone"
        />
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      vanMau: "Đề bài : Bạn cảm thấy thế nào khi học Vuejs",
      isSave: false,
      noiMuonSong: [],
      gender: "",
      team : "Falcon",
      phone :1
    };
  },
  methods: {
    handleSubmit() {
        console.log(this.userName);
      // console.log(this.vanMau);
      // console.log(this.isSave);
      // console.log(this.noiMuonSong);
      // console.log(this.gender);
      console.log(this.team)
      console.log(this.phone,typeof(this.phone))
      //   console.table({'1':this.vanMau, '2':this.userName});
    },
  },
};
</script>

<style>
</style>