<template>
<Header />
<div class="b">
<h1>Hello  {{User_ID}},Welcome to Sri Krishna Bank  </h1> 
</div>
 <header class="H1">
      <div class="H2">
        <h1
          >Next generation<br />
          retail banking</h1
        >
        <p
          >Take your financial life online. Your easy bank account<br />
          will be a one-stop-shop for spending,saving,<br />budgeting,investing,
          and much more.</p
        >
      </div>
      <div class="H3">
        <img src="../assets/image-mockups.png" alt="" />
      </div>
    </header>
     <div class="H4">
      <section class="H5">
        <h1>Why choose Us?</h1>
        <p
          >We leverage open banking to turn your bank account into your
          financial hub.<br />Control your finances like never before.</p
        >
      </section>
      </div>
      <section class="H6">
        <div class="H7">
          <img src="../assets/icon-online.svg" alt="" />
          <h1>Online Banking</h1>
          <p
            >Our modern web and mobile<br />
            applications allow you to keep<br />
            track of your finances whereever<br />
            you are in the world.</p
          >
        </div>
        <div class="H7">
          <img src="../assets/icon-budgeting.svg" alt="" />
          <h1>Simple Budgeting</h1>
          <p
            >See exactly where your money<br />
            goes every month.Recieve<br />
            notifications when you're close to<br />
            hitting your limits./p >
          </p></div
        >

        <div class="H7">
          <img src="../assets/icon-onboarding.svg" alt="" />
          <h1>Fast Onboarding</h1>
          <p
            >We don't do branches.Open your<br />
            accound minutes online and start<br />
            taking controll of your finances<br />
            right away.</p
          >
        </div>
        <div class="H7">
          <img src="../assets/icon-api.svg" alt="" />
          <h1>Open API</h1>
          <p
            >Manage your savings, investments,<br />
            pension and much more from one<br />
            account.Tracking your money has<br />
            never been easier.</p
          >
        </div>
      </section>

</template>
<script>
import Header from './Header.vue'
export default {
  name: "Home_Page",
  data(){
    return{
      User_ID:''
    };
  },
  components:{
      Header
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
      return;
    }
    this.User_ID = JSON.parse(user).User_ID;
  }
}
</script>
<style>
.b{
  font-size: 30px;
  font-weight: 10px;
  margin-bottom: 20px;
  color: hsl(233, 26%, 24%);
  line-height: 1.01
}
.H1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
}
.H3 {
  background-image: url('../assets/bg-intro-desktop.svg');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  padding-top: 20px;
}
.H3 > img {
  width: 500px;
}
.H2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.H2 > h1 {
  font-size: 70px;
  font-weight: 800;
  margin-bottom: 20px;
  color: hsl(233, 26%, 24%);
  line-height: 1.1;
}
.H2 > p {
  color: hsl(233, 8%, 62%);
  margin-bottom: 15px;
  font-weight: 700;
}
.H2 > button {
  padding: 12px 28px;
  border: none;
  outline-width: 0;
  color: white;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 400;
  background-image: linear-gradient(
    120deg,
    hsl(192, 70%, 51%),
    hsl(136, 65%, 51%)
  );
}
.H4 {
  background-color: hsl(220, 16%, 96%);
}
.H5 {
  padding-top: 10vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10vh;
}
.H5 > h1 {
  font-size: 45px;
  font-weight: 800;
  margin-bottom: 20px;
  color: hsl(233, 26%, 24%);
}
.H5 > p {
  color: hsl(233, 8%, 62%);
  margin-bottom: 15px;
  font-weight: 700;
}
.H6 {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 10vh;
}
.H7 > img {
  width: 65px;
  margin-bottom: 5px;
}
.H7 > h1 {
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 10px;
  color: hsl(233, 26%, 24%);
}
.H7 > p {
  color: hsl(233, 8%, 62%);
  font-weight: 700;
}
</style>