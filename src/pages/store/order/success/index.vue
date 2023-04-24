<template>
	<div class="services_section layout_padding">
      	<div class="container">

			<router-link :to="{ name: 'ProductPage' }">
				<h1 class="services_taital" style="margin-left: 10px; margin-bottom: 30px; float: none">
					<span>스토어</span>
					<img
						src="@/assets/images/offMeeting/paw-print.png"
						style="width: 70px"
					/>
					<span style="color: #1f1f1f">멍멍스토어</span>
				</h1>
			</router-link>

			<OrderSuccess/>
      	</div>
	</div>
</template>

<script>
import OrderSuccess from '../../../../components/store/order/OrderSuccess.vue';
import { onMounted } from 'vue';

export default {
	components:{
		OrderSuccess
	},
	setup(){
		onMounted(() => {
			checkFunc();
		});

		const checkFunc = () => {
			let overlay = null;
			let headerSection = null;

			check();

			function check() {
				if (overlay == null) {
				overlay = document.getElementsByClassName("overlay")[0];
				}
				if (headerSection == null) {
				headerSection = document.getElementsByClassName("header_section")[0];
				}
			}

			headerSection.classList.add("background_bg");
			document.getElementById("bannerDiv").style.display = "none";
		};

		return{
			checkFunc
		}
	}
	
}
</script>

<style>

</style>