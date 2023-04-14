<template>
<div id="modal">
	<header>
		<h2>Customize your view</h2>
	</header>
	<main>
		<p>Background</p>
		<div class="radio-buttons">
			<label class="light">
				<input type="radio" checked name="background-option" data-theme="light">
				<span>Light</span>
				<span class="border"></span>
			</label>
			<label class="dim">
				<input type="radio" name="background-option" data-theme="dim">
				<span>Dim</span>
				<span class="border"></span>
			</label>
			<label class="dark">
				<input type="radio" name="background-option" data-theme="dark">
				<span>Dark</span>
				<span class="border"></span>
			</label>
		</div>
		<p>Navigation style</p>
		<div class="radio-buttons">
			<label class="nav-style">
				<input type="radio" name="nav-style" data-nav="opened">
				<span>Opened</span>
				<span class="border"></span>
			</label>
			<label class="nav-style">
				<input type="radio" checked name="nav-style" data-nav="closed">
				<span>Closed</span>
				<span class="border"></span>
			</label>
		</div>
	</main>
</div>
<div id="modal-overlay"></div>

<div id="more-popout-overlay"></div>
<div id="more-popout" class="nav-closed">
	<div class="nav-item">
		<div class="icon-container">
			<img src="https://pbs.twimg.com/profile_images/1153329245248053248/xONN2R7u_400x400.png">
		</div>
		<div class="nav-text">
			<p>Ian | Gibbu</p>
			<span>@Gibbu_</span>
		</div>
	</div>
	<div class="nav-item">
		<div class="icon-container">
			<i class="fas fa-bolt"></i>
		</div>
		<div class="nav-text">
			<p>Moments</p>
		</div>
	</div>
	<div class="nav-item">
		<div class="icon-container">
			<i class="fas fa-chart-bar"></i>
		</div>
		<div class="nav-text">
			<p>Twitter ADS</p>
		</div>
	</div>
	<div class="nav-item">
		<div class="icon-container">
			<i class="fas fa-cog"></i>
		</div>
		<div class="nav-text">
			<p>Settings & privacy</p>
		</div>
	</div>
	<div class="nav-item">
		<div class="icon-container">
			<i class="fas fa-question-circle"></i>
		</div>
		<div class="nav-text">
			<p>Help Center</p>
		</div>
	</div>
	<div class="nav-item display">
		<div class="icon-container">
			<i class="fas fa-palette"></i>
		</div>
		<div class="nav-text">
			<p>Display</p>
		</div>
	</div>
	<div class="nav-item logout">
		<div class="icon-container">
			<i class="fas fa-sign-out-alt"></i>
		</div>
		<div class="nav-text">
			<p>Logout</p>
		</div>
	</div>
</div>

<nav class="nav-closed">
	<div class="nav-item home" aria-label="Home" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fab fa-twitter"></i>
		</div>
		<div class="nav-text">
			<p>Home</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Explore" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-hashtag"></i>
		</div>
		<div class="nav-text">
			<p>Explore</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Notifications" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-bell"></i>
		</div>
		<div class="nav-text">
			<p>Notifications</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Messages" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-envelope"></i>
		</div>
		<div class="nav-text">
			<p>Messages</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Bookmarks" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-bookmark"></i>
		</div>
		<div class="nav-text">
			<p>Bookmarks</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Profile" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<img src="https://pbs.twimg.com/profile_images/1153329245248053248/xONN2R7u_400x400.png">
		</div>
		<div class="nav-text">
			<p>Profile</p>
		</div>
	</div>
	<button class="nav-item" aria-label="More" data-balloon-pos="right" data-balloon-blunt>
		<span class="icon-container">
			<i class="fas fa-ellipsis-h"></i>
		</span>
		<p>More</p>
	</button>
</nav>

<header class="nav-closed">
	<div class="wrapper">
		<div class="top">
			<img src="https://pbs.twimg.com/profile_images/1153329245248053248/xONN2R7u_400x400.png">
			<div class="user">
				<h2>Ian | Gibbu</h2>
			</div>
		</div>
		<div class="bottom">
			<a href="#">
				<p>총 게시글</p>
				<h3>3.6K</h3>
			</a>
			<a href="#">
				<p>멤버</p>
				<h3>24.3K</h3>
			</a>
		</div>
	</div>
</header>


<div id="container" class="wrapper nav-closed">
	<div id="timeline">
		<div class="new-tweet">
			<textarea placeholder="What's happening?"></textarea>
			<div class="btns">
				<div class="btn">
					<button><i class="fas fa-image"></i></button>
				</div>
				<div class="btn">
					<button><i class="fas fa-film"></i></button>
				</div>
				<div class="btn">
					<button><i class="fas fa-chart-bar"></i></button>
				</div>
				<div class="btn">
					<button class="blue"><i class="fas fa-comment"></i>Tweet</button>
				</div >
			</div>
		</div>
		<div class="tweet">
			<div class="left">
				<img src="https://yt3.ggpht.com/-uJh4oSQAwak/AAAAAAAAAAI/AAAAAAAAAAA/AMGKfKvDP3w/s900-c-k-no-mo-rj-c0xffffff/photo.jpg">
			</div>
			<div class="right">
				<div class="info">
					<p>Bob Ross<span>@BobRoss</span></p>
					<time>11m</time>
				</div>
				<div class="message">
					<p>Just posting some of my work.</p>
					<img src="https://images.fineartamerica.com/images-medium-large-5/autumns-glow-c-steele.jpg">
				</div>
				<div class="btns">
					<button class="blue"><i class="far fa-comment"></i>24</button>
					<button class="green"><i class="fas fa-retweet"></i>12.3K</button>
					<button class="red"><i class="far fa-heart"></i>37.9K</button>
					<button class="blue"><i class="fas fa-ellipsis-h"></i></button>
				</div>
			</div>
		</div>
		<div class="tweet">
			<div class="left">
				<img src="https://pbs.twimg.com/profile_images/1153329245248053248/xONN2R7u_400x400.png">
			</div>
			<div class="right">
				<div class="info">
					<p>Ian | Gibbu<span>@Gibbu_</span></p>
					<time>23m</time>
				</div>
				<div class="message">
					<p>This is my third attempt ona redesign for Twitter.</p>
					<p>Typing anything into the search input will display "YouTube" results.</p>
					<p>You can also press "More" > "Display" to customize Twitter.</p>
				</div>
				<div class="btns">
					<button class="blue"><i class="far fa-comment"></i>2</button>
					<button class="green"><i class="fas fa-retweet"></i>1</button>
					<button class="red"><i class="far fa-heart"></i>5</button>
					<button class="blue"><i class="fas fa-ellipsis-h"></i></button>
				</div>
			</div>
		</div>
		<div class="tweet">
			<div class="left">
				<img src="https://www.thesun.co.uk/wp-content/uploads/2016/04/2129070.main_image.jpg?w=620&strip=all">
			</div>
			<div class="right">
				<div class="info">
					<p>Albus Dumbledore<span>@albusdumb</span></p>
					<time>23m</time>
				</div>
				<div class="message">
					<p>Very impressive work by this young fellow.</p>
					<div class="iframe-container">
						<iframe src="https://www.youtube.com/embed/MvjQTA81MhY" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
					</div>
				</div>
				<div class="btns">
					<button class="blue"><i class="far fa-comment"></i>12</button>
					<button class="green"><i class="fas fa-retweet"></i>45</button>
					<button class="red"><i class="far fa-heart"></i>73</button>
					<button class="blue"><i class="fas fa-ellipsis-h"></i></button>
				</div>
			</div>
		</div>
		<div class="tweet">
			<div class="left">
				<img src="https://static0.therichestimages.com/wp-content/uploads/Will-Smith.jpeg">
			</div>
			<div class="right">
				<div class="info">
					<p>Will Smith<span>@WillSmith</span></p>
					<time>23m</time>
				</div>
				<div class="message">
					<p>Still one of my favourite movies.</p>
					<div class="iframe-container">
						<iframe src="https://www.youtube.com/embed/aoyV49FfjOU" gesture="media" allow="encrypted-media" allowfullscreen="" frameborder="0"></iframe>
					</div>
				</div>
				<div class="btns">
					<button class="blue"><i class="far fa-comment"></i>12</button>
					<button class="green"><i class="fas fa-retweet"></i>32</button>
					<button class="red"><i class="far fa-heart"></i>64</button>
					<button class="blue"><i class="fas fa-ellipsis-h"></i></button>
				</div>
			</div>
		</div>
		<footer>
			<i class="fab fa-twitter"></i>
			<button>Load More</button>
		</footer>
	</div>
	<div id="right">
		<div class="search-container">
			<div class="search-input">
				<input id="search" type="text" placeholder="Search Twitter" autocomplete="off">
				<i class="fas fa-search"></i>
			</div>
			<div class="search-results">
				<div class="result">
					<p>youtube</p>
				</div>
				<div class="result">
					<p>youtuber dog</p>
				</div>
				<div class="result">
					<p>youtube music</p>
				</div>
				<hr>
				<div class="result">
					<img src="https://pbs.twimg.com/profile_images/1042095789894295552/2xCUFmgU_normal.jpg">
					<div class="right">
						<p>YouTube Gaming</p>
						<span>@YouTubeGaming</span>
					</div>
				</div>
				<div class="result">
					<img src="https://pbs.twimg.com/profile_images/1148327441527689217/1QpS06D6_normal.png">
					<div class="right">
						<p>YouTube</p>
						<span>@YouTube</span>
					</div>
				</div>
				<div class="result">
					<img src="https://pbs.twimg.com/profile_images/1148364735034691585/OVoeKZYC_normal.png">
					<div class="right">
						<p>YouTube Creators</p>
						<span>@YTCreators</span>
					</div>
				</div>
				<div class="result">
					<img src="https://pbs.twimg.com/profile_images/1148267294004600832/Vibmuz25_normal.png">
					<div class="right">
						<p>YouTube TV</p>
						<span>@youtubemusic</span>
					</div>
				</div>
				<div class="result">
					<img src="https://pbs.twimg.com/profile_images/1148296104611635201/VlnAnBaz_normal.jpg">
					<div class="right">
						<p>YouTube Music</p>
						<span>@youtubemusic</span>
					</div>
				</div>
				<hr>
				<div class="result">
					<p>Go to @YouTube</p>
				</div>
			</div>
		</div>
		<section>
			<header>
				<h3>Australia trends</h3>
				<button><i class="fas fa-cog"></i></button>
			</header>
			<main>
				<a href="#" class="trend">
					<div class="trend-num"><span>1 - Trending</span></div>
					<div class="trend">
						<p>#aflpiesdons</p>
						<span>4,144 Tweets</span>
					</div>
				</a>
				<a href="#" class="trend">
					<div class="trend-num"><span>2 - Trending</span></div>
					<div class="trend">
						<p>David Koch</p>
						<span>89.5K Tweets</span>
						<div class="quote">
							<div class="info">
								<p>In memoriam</p>
								<span>Billionaire David Koch dies at 79</span>
							</div>
							<img src="https://pbs.twimg.com/media/ECp9mlGXYAgB9X5?format=jpg&name=120x120">
						</div>
					</div>
				</a>
				<a href="#" class="trend">
					<div class="trend-num"><span>3 - Trending</span></div>
					<div class="trend">
						<p>#AUSvENG</p>
						<span>1,845 Tweets</span>
					</div>
				</a>
				<a href="#" class="trend">
					<div class="trend-num"><span>4 - Trending</span></div>
					<div class="trend">
						<p>#NRLBroncosSouths</p>
						<span>2,521 Tweets</span>
					</div>
				</a>
				<a href="#" class="trend">
					<div class="trend-num"><span>5 - Trending</span></div>
					<div class="trend">
						<p>Warner</p>
						<span>13.3K Tweets</span>
					</div>
				</a>
			</main>
		</section>
		<section>
			<header>
				<h3>Who to follow</h3>
				<a href="#">View All</a>
			</header>
			<main>
				<a href="#">
					<img src="https://pbs.twimg.com/profile_images/1030015093747138562/YGStmPuy_400x400.jpg">
					<div class="user">
						<p>DevTips<small>@DevTipsShow</small></p>
						<span>Followed by James Bob and Will Smith</span>
					</div>
				</a>
				<a href="#">
					<img src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
					<div class="user">
						<p>Alex Walker<small>@AlexWalker13</small></p>
						<span>Followed by Will Smith and Bob Ross</span>
					</div>
				</a>
				<a href="#">
					<img src="https://images.pexels.com/photos/756453/pexels-photo-756453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
					<div class="user">
						<p>Tom Riddle<small>@yaboytom_</small></p>
						<span>Followed by Harry Potter, Dumbledore...</span>
					</div>
				</a>
			</main>
		</section>
	</div>
</div> 
                                      
</template>

<script>
export default {
    name: 'BoardList-codepen',

}
</script>

<style lang = "scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800|Roboto:300,400,500,700');
* {outline-width: 0 !important; font-family: 'Roboto';}
body, html {padding: 0; margin: 0;}



body > header.nav-closed {
    margin-left: 64px;
}
body > header {
    background: url(https://source.unsplash.com/2560x1440/daily) center/cover;
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 250px;
}


$nav: 64px;
$blue: #03A9F4;
$green: #4CAF50;
$red: #ff2f20;
$bgImage: 'https://source.unsplash.com/2560x1440/daily';

:root {
	--bg1: #e5e5e5;
	--bg2: #eee;
	--bg3: #fff;

	--color: #000;
}

#modal {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 12;
	opacity: 0;
	visibility: hidden;
	transition: 0.2s ease;
	background: var(--bg3);
	width: 550px;
	overflow: hidden;
	border-radius: 5px;
	header {
		border-bottom: 1px solid var(--bg2);
		padding: 15px;
		box-sizing: border-box;
		h2 {
			margin: 0;
			font-weight: 400;
			color: var(--color);
		}
	}
	main {
		padding: 15px;
		box-sizing: border-box;
		overflow-y: auto;
		> p {
			margin: 0 0 5px 0;
			color: var(--color);
		}
		.radio-buttons {
			display: flex;
			grid-gap: 15px;
			background: rgb(31,39,48);
			padding: 15px;
			box-sizing: border-box;
			label {
				flex: 1;
				display: flex;
				justify-content: center;
				cursor: pointer;
				position: relative;
				padding: 20px 0;
				span {
					color: #fff;
					display: block;
				}
				input {
					display: none;
					&:checked ~ .border {
						box-shadow: inset 0 0 0 2px $blue;
					}
				}
				.border {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					user-select: none;
					pointer-events: none;
				}
				&.light {
					background: #fff;
					span {
						color: #000;
					}
				}
				&.dim {
					background: #15202b;
				}
				&.dark {
					background: #111;
				}
				&.nav-style {
					background: var(--bg3);
					span {
						color: var(--color);
					}
				}
			}
		}
	}
	&.toggle {
		opacity: 1;
		visibility: visible;
	}
}
#modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.7);
	opacity: 0;
	visibility: hidden;
	transition: 0.2s ease;
	z-index: 11;
	&.toggle {
		opacity: 1;
		visibility: visible;
	}
}

#more-popout-overlay {
	position: fixed;
	z-index: 9;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.4);
	visibility: hidden;
	opacity: 0;
	transition: 0.2s ease;
	&.toggle {
		opacity: 1;
		visibility: visible;
	}
}
#more-popout {
	position: fixed;
	width: 250px;
	left: -1px;
	background: var(--bg3);
	height: 100%;
	z-index: 10;
	border-left: 1px solid var(--bg2);
	transition: 0.2s ease;
	.nav-item:first-of-type {
		border-bottom: 1px solid var(--bg2);
		.nav-text span {
			opacity: .5;
			font-size: 12px;
			display: block;
		}
	}
	&.nav-closed {
		left: -187px;
		&.toggle {
			left: 64px;
		}
	}
	&.toggle {
		left: 250px;
		&.nav-closed {
			left: 64px;
		}
	}
}


.wrapper {
	max-width: 1024px;
	margin: 0 auto;
	width: 100%;
	padding-left: 250px;
	&.nav-closed {
		padding-left: $nav;
	}
}


body {
	background: var(--bg1);
}

nav {
	position: fixed;
	top: 0;
	left: 0;
	width: 250px;
	height: $nav;
	background: var(--bg3);
	height: 100vh;
	z-index: 10;
	&.nav-closed {
		width: $nav;
		.nav-item p {
			display: none;
		}
	}
}

.nav-item {
	width: 100%;
	height: $nav;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-decoration: none;
	color: var(--color);
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	user-select: none;
	&.home {
		border-bottom: 1px solid var(--bg2);
		color: $blue;
	}
	.icon-container {
		width: $nav;
		height: $nav;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	i {
		font-size: 18px;
	}
	img {
		width: 32px;
		height: 32px;
		display: block;
		border-radius: 50%;
	}
	p {
		margin: 0;
		font-size: 16px;
	}
	&:hover {
		background: var(--bg2);
	}
	&.logout {
		color: $red !important;
	}
}


header.nav-closed {
	background: url($bgImage) center/cover;
	display: flex;
	align-items: center;
	position: relative;
	margin-left: 250px;
	.wrapper {
		position: relative;
		padding-left: 0;
	}
	.top {
		display: flex;
		align-items: center;
		margin: 30px 0;
		img {
			width: 72px;
			height: 72px;
			display: block;
			border-radius: 50%;
			box-shadow: 0 2px 5px rgba(0,0,0,0.2);
		}
		.user {
			margin-left: 15px;
			color: #fff;
			text-shadow: 0 2px 5px rgba(0,0,0,1);
			h2 {
				margin: 0;
				font-weight: 400;
			}
			p {
				margin: 0;
				opacity: .5;
			}
		}
	}
	.bottom {
		display: flex;
		align-items: center;
		a {
			text-decoration: none;
			color: #fff;
			padding: 0 5px 10px;
			margin-right: 15px;
			text-shadow: 0 2px 5px rgba(0,0,0,1);
			p {
				margin: 0;
				font-size: 14px;
				opacity: .5;
			}
			h3 {
				margin: 0;
				font-weight: 400;
			}
			&:hover {
				box-shadow: inset 0 -4px 0 #fff;
			}
		}
	}
	&:before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 125px;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.6) 90%);
	}
	&.nav-closed {
		margin-left: $nav;
	}
}

#container {
	display: grid;
	grid-template-columns: 650px auto;
	grid-gap: 20px;
	align-items: flex-start;
	margin: 20px auto 50px;
}
#timeline {
	background: var(--bg3);
	border-radius: 5px;
	overflow: hidden;
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 25px 0;
		border-top: 1px solid var(--bg2);
		i {
			margin-bottom: 10px;
			color: var(--color);
		}
		button {
			background: transparent;
			border: none;
			padding: 10px 20px;
			cursor: pointer;
			font-weight: 600;
			border-radius: 5px;
			color: var(--color);
			&:hover {
				background: var(--bg2);
			}
		}
	}
}
.new-tweet {
	textarea {
		border: none;
		width: 100%;
		resize: none;
		padding: 15px;
		height: auto;
		box-sizing: border-box;
		height: 51px;
		cursor: pointer;
		color: var(--color);
		background: var(--bg3);
		&:focus, &:not(:placeholder-shown) {
			height: 100px;
			cursor: text;
			~ .btns {
				height: 100%;
				padding: 0 15px 15px;
			}
		}
	}
	.btns {
		padding: 0 15px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		overflow: hidden;
		height: 0;
		.btn {
			margin-right: 15px;
			button {
				padding: 0;
				padding: 0;
				display: block;
				width: 32px;
				height: 32px;
				background: transparent;
				border: none;
				cursor: pointer;
				border-radius: 50%;
				color: var(--color);
				&:hover {
					background: var(--bg2);
				}
			}
			&:last-child {
				flex: 1;
				display: flex;
				justify-content: flex-end;
				margin-right: 0;
				button {
					width: auto;
					border-radius: 3px;
					padding: 0 10px;
					background: $blue;
					color: #fff;
					&:hover {
						background: darken($blue, 3%);
					}
					i {
						margin-right: 10px;
					}
				}
			}
		}
	}
}
.tweet {
	border-top: 1px solid var(--bg2);
	padding: 15px;
	box-sizing: border-box;
	display: flex;
	align-items: flex-start;
	cursor: pointer;
	.left {
		margin-right: 15px;
		img {
			width: 42px;
			height: 42px;
			display: block;
			object-fit: cover;
			border-radius: 50%;
			user-select: none;
		}
	}
	.right {
		width: 100%;
		.info {
			display: flex;
			align-items: center;
			color: var(--color);
			margin-bottom: 5px;
			p {
				margin: 0;
				display: flex;
				align-items: center;
				span {
					margin: 0 10px;
					font-size: 12px;
					opacity: .5;
				}
			}
			time {
				display: flex;
				align-items: center;
				font-size: 12px;
				opacity: .5;
				&:before {
					content: "";
					height: 2px;
					width: 2px;
					margin-right: 10px;
					border-radius: 50%;
					background: var(--color);
				}
			}
		}
		.message {
			p {
				margin: 0;
				color: var(--color);
				line-height: 20px;
			}
			img {
				display: block;
				width: 100%;
				border-radius: 5px;
				margin-top: 10px;
			}
		}
		.btns {
			margin-top: 15px;
			display: flex;
			align-items: center;
			button {
				background: transparent;
				border: none;
				padding: 0;
				display: flex;
				align-items: center;
				margin-right: 15px;
				cursor: pointer;
				color: var(--color);
				font-size: 12px;
				i {
					width: 32px;
					height: 32px;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50%;
					margin-right: 5px;
					font-size: 16px;
				}
				&.blue:hover {
					i {
						background: rgba($blue, 0.1);
					}
					color: $blue;
				}
				&.green:hover {
					i {
						background: rgba($green, 0.1);
					}
					color: $green;
				}
				&.red:hover {
					i {
						background: rgba($red, 0.1);
					}
					color: $red;
				}
			}
		}
	}
	&:hover {
		background: var(--bg2);
	}
}
.iframe-container {
	overflow: hidden;
	padding-top: 56.25%;
	position: relative;
	border-radius: 5px;
	display: block;
	margin-top: 10px;
	iframe {
		border: 0;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}
}

.search-container {
	margin-bottom: 20px;
	.search-input {
		width: 100%;
		position: relative;
		input {
			background: var(--bg3);
			border: none;
			box-sizing: border-box;
			width: 100%;
			color: var(--color);
			padding: 15px 15px 15px 55px;
			border-radius: 5px;
			font-size: 14px;
			font-weight: 500;
			&:not(:placeholder-shown) ~ i {
				opacity: 1;
			}
		}
		i {
			position: absolute;
			left: 20px;
			top: 50%;
			transform: translateY(-50%);
			opacity: 0.4;
			pointer-events: none;
			user-select: none;
			color: var(--color);
		}
	}
	.search-results {
		border-top: 1px solid var(--bg2);
		background: var(--bg3);
		border-radius: 0 0 5px 5px;
		overflow: hidden;
		display: none;
		.result {
			padding: 10px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			color: var(--color);
			p {
				margin: 0;
			}
			img {
				width: 42px;
				height: 42px;
				display: block;
				margin-right: 15px;
				object-fit: cover;
				border-radius: 50%;
			}
			span {
				display: block;
				opacity: .5;
				font-size: 12px;
			}
			&:hover {
				background: var(--bg2);
				cursor: pointer;
			}
			&:last-child p {
				font-size: 12px;
			}
		}
		hr {
			border: none;
			height: 1px;
			background: var(--bg2);
			margin: 0;
		}
	}
}

#right {
	section {
		padding: 15px;
		box-sizing: border-box;
		border-bottom: 1px solid var(--bg2);
		background: var(--bg3);
		overflow: hidden;
		header {
			margin-bottom: 15px;
			display: flex;
			align-items: center;
			h3 {
				flex: 1;
				font-weight: 400;
				margin: 0;
				color: var(--color);
			}
			button {
				padding: 0;
				border-radius: 50%;
				background: transparent;
				border: none;
				cursor: pointer;
				width: 24px;
				height: 24px;
				color: var(--color);
				&:hover {
					background: var(--bg2);
				}
			}
			a {
				text-decoration: none;
				font-size: 12px;
				color: $blue;
			}
		}
		&:first-of-type {
			border-radius: 3px 3px;
		}
		&:last-of-type {
			border-bottom: none;
			border-radius: 0 0 3px 3px;
		}
	}
	main {
		a {
			text-decoration: none;
			color: var(--color);
			margin-bottom: 15px;
			display: block;
			&:not(.trend) {
				display: flex;
				align-items: center;
			}
			img {
				width: 42px;
				height: 42px;
				display: block;
				object-fit: cover;
				border-radius: 50%;
			}
			.trend-num {
				font-size: 12px;
				opacity: .5;
			}
			.trend {
				p {
					margin: 2px 0;
				}
				span {
					display: block;
					opacity: .5;
					font-size: 12px;
				}
				.quote {
					border-radius: 5px;
					overflow: hidden;
					display: flex;
					align-items: center;
					border: 1px solid var(--bg2);
					margin-top: 5px;
					.info {
						flex: 1;
						padding: 10px;
						box-sizing: border-box;
						border-right: 1px solid var(--bg2);
					}
					img {
						border-radius: 0;
						width: 61px;
						height: 61px;
					}
					&:hover {
						background: var(--bg2);
						.info > p {
							color: $blue;
						}
					}
				}
			}
			.user {
				margin-left: 15px;
				p {
					margin: 0;
					display: flex;
					align-items: center;
					small {
						margin-left: 5px;
					}
				}
				span {
					font-size: 12px;
					opacity: .5;
					display: block;
				}
			}
			&:hover > .user p, &:hover > .trend > p {
				color: $blue;
			}
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}

</style>