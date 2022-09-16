<template >
<Header />
  <h1>Hello User,Welcome to RD / FD Booking Page.</h1>
			<form action="#" method="post" name="f1">
				<table>
					<tr>
						<td>Type of deposit</td>
						<td>
							<input type="radio" name="depositType" value="fd" @click="checkType" v-model="depositType">Fixed deposit<input type="radio" name="depositType" value="rd" @click="checkType" v-model="depositType">Recurring deposit <span id="depositTypeErr"> * Select a type</span>
						</td>
					</tr>
					<tr>
						<td>Principal Amt.</td>
						<td><input type="number" name="amt" v-model="amt" required/><span id="amtErr"> * required</span></td>
					</tr>
					<tr>
						<td>No. of Years</td>
						<td><input type="number" name="years" v-model="years" required/><span id="yearsErr"> * required</span></td>
					</tr>
					<tr>
						<td>Interest</td>
						<td><input type="number" name="rate" v-model="rate"  required/><span id="rateErr"> * required</span></td>
					</tr>
					<tr>
						<td>Compounding freq.</td>
						<td>
							<select name="freq" v-model="freq" @change="checkFreq" required>
								<option value=12>Monthly</option>
								<option value=4>Quarterly</option>
								<option value=2>Half yearly</option>
								<option value=1>Yearly</option>
							</select><span id="freqErr"> * required</span>
						</td>
					</tr>
					<tr>
						<td>Maturity Amt.</td>
						<td><b>Rs. </b><b id="maturity">{{maturity}}</b></td>
					</tr>
					<tr>
						<td></td>
						<td><input type="button" value="Calulate" @click="cal"/>&nbsp;&nbsp;<input type="reset" value="Clear"/></td>
					</tr>
				
				</table>
			</form>

</template>
<script>
import Header from './Header.vue'
export default {
  name: "Booking_page",
  data() {
    return {
      user: null,
			depositType: "fd",
			amt: 0,
			year: 0,
			rate: 0,
			freq: 12,
			maturity: 0.0,
			depositTypeErr: "",
    };
  },
  components:{
      Header
  },
  mounted() {
    let localUser = localStorage.getItem("user-info");
    if (!localUser) {
      this.$router.push({ name: "SignUp" });
			return
    }
		this.user = JSON.parse(localUser);
  },
	methods: {
			cal(){
					if(!this.checkAll())
						return;
					if(this.depositType == "fd" && this.freq.length!=0){
						/* eslint-disable */
						debugger
						this.maturity = this.amt*Math.pow((1+((this.rate/100)/this.freq)), this.freq*this.year);
					}else if(this.depositType == "rd" && this.freq.length!=0){
						var months=this.year*12;
						let maturity=0;
						for(var i=1; i<=months;i++){
							maturity+=this.amt*Math.pow((1+((this.rate/100)/this.freq)), this.freq*((months-i+1)/12));
						}
						this.maturity = maturity;
					}else{
						alert("Select all dropdowns");
					}
			},
			checkAll(){
					if(this.checkType() && this.checkAmt() && this.checkYears() && this.checkRate() && this.checkFreq())
						return true;
					else
						return false;
			},
			checkType(){
					if(this.depositType.length == 0){
						alert("Select a deposit type")
						// document.getElementById("depositTypeErr").innerText="Select a deposit type";
						return false;
					}

					return true;
			},
			checkAmt(){
					if(isNaN(document.f1.amt.value) || document.f1.amt.value.length==0){
						alert("Amount is required")
						return false;
					}
						return true;
			},
			checkYears(){
					if(isNaN(document.f1.years.value) || document.f1.years.value.length==0){
						alert("Year required");
						return false;
					}
						return true;
			},
			checkRate(){
					if(isNaN(document.f1.rate.value) || document.f1.rate.value.length==0){
						alert("Interest required")
						return false;
					}
					return true;

			},
			checkFreq(){
					if(document.f1.freq.value.length == 0){
						alert("Select a compounding freq")
						return false;
					}

					return true;

			},
	}
}
</script>