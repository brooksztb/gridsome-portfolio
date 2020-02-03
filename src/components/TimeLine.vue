<template>
	<section class="timeline">
		<ul>
			<li v-for="(info, index) in data" :key="index">
				<span></span>
				<div>{{ info.title }} - {{ info.location }}</div>
				<div>{{ info.work_title }}</div>
				<div v-for="(history, index) in info.history_info" :key="index">
					- {{ history.description }}
				</div>
				<div class="year">
					<span>{{ info.end_date }}</span>
					<span>{{ info.start_date }}</span>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'Timeline',
	props: {
		data: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
$font-color: #fff;
$bg-color: #fff;
$dot-color: #84161b;

@mixin clearfix {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
}
@mixin set-border($thickness, $color, $radius) {
	border: $thickness solid $color;
	border-radius: $radius;
}

.timeline {
	padding: 5px 45px;
	ul {
		position: relative;
		&::before {
			@include clearfix();
			height: 100%;
		}
	}
	li {
		position: relative;
		margin: 60px 35px;
		width: 100%;
		list-style: none;
		line-height: 25px;
		& > span {
			@include clearfix();
			left: -25px;
			height: 110%;
			@include set-border(2px, $font-color, none);
		}
		& > span::before,
		& > span::after {
			@include clearfix();
			width: 14px;
			height: 14px;
			@include set-border(3px, $font-color, 50%);
			left: -7px;
			background: $dot-color;
		}
		& > span::before {
			top: -15px;
		}
		& > span::after {
			top: 100%;
		}
		div {
			&:nth-child(2) {
				font-size: 1.2em;
			}
			&:nth-child(3) {
				font-style: italic;
				color: darken($font-color, 25%);
			}
		}
		.year span {
			position: absolute;
			font-size: 1em;
			left: -85px;
			width: 40px;
			text-align: right;
			&:first-child {
				top: -20px;
			}
			&:last-child {
				top: 100%;
			}
		}
	}
}
</style>
