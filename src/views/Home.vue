<template>
	<div class="main">
		<div class="container">
			<div class="nav">
				<div class="hamburger"></div>
			</div>
			<header>
				<div class="profile">
					<div class="profile-img"><img src="" alt="" /></div>
					<div class="desc">
						<div>
							안녕하세요. <span>이규민님</span> <br />
							사용가능한 적립금 <br />
							<span>4230</span>원<br />입니다.
						</div>
					</div>
				</div>
			</header>
			<main>
				<div class="menu">
					<div class="pay-history">결제내역</div>
					<div class="passbook">모임통장</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
export default {
	name: 'main',
	components: {},
};
</script>

<style scoped>
.nav {
	width: 100%;
}
header {
	width: 100%;
}
header .profile {
}
</style>
