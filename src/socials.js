let { FACEBOOK, TWITTER, LINKEDIN, GOOGLE, YOUTUBE } = process.env;

module.exports = `<style>
.icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 9999999;
}

/* Style the icon bar links */
.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}

/* Style the social media icons with color, if you want */
.icon-bar a:hover {
  background-color: #000;
}

.facebook {
  background: #3B5998;
  color: white;
}

.twitter {
  background: #55ACEE;
  color: white;
}

.google {
  background: #dd4b39;
  color: white;
}

.linkedin {
  background: #007bb5;
  color: white;
}

.youtube {
  background: #bb0000;
  color: white;
}
</style>
<!-- Load font awesome icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- The social media icon bar -->
<div class="icon-bar">
  <a href="${FACEBOOK}" target="_blank" class="facebook"><i class="fa fa-facebook"></i></a>
  <a href="${TWITTER}" target="_blank" class="twitter"><i class="fa fa-twitter"></i></a>
  <a href="${GOOGLE}" target="_blank" class="google"><i class="fa fa-google"></i></a>
  <a href="${LINKEDIN}" target="_blank" class="linkedin"><i class="fa fa-linkedin"></i></a>
  <a href="${YOUTUBE}" target="_blank" class="youtube"><i class="fa fa-youtube"></i></a>
</div>`;