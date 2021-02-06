module.exports = `<style>
.banner-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.25);
  opacity: 0.5;
  z-index: 99998;
}

.pyro > .before,
.pyro > .after {
position: fixed;
width: 5px;
height: 5px;
border-radius: 50%;
box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
-moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
-webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
-o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
-ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
}

.pyro > .after {
-moz-animation-delay: 1.25s, 1.25s, 1.25s;
-webkit-animation-delay: 1.25s, 1.25s, 1.25s;
-o-animation-delay: 1.25s, 1.25s, 1.25s;
-ms-animation-delay: 1.25s, 1.25s, 1.25s;
animation-delay: 1.25s, 1.25s, 1.25s;
-moz-animation-duration: 1.25s, 1.25s, 6.25s;
-webkit-animation-duration: 1.25s, 1.25s, 6.25s;
-o-animation-duration: 1.25s, 1.25s, 6.25s;
-ms-animation-duration: 1.25s, 1.25s, 6.25s;
animation-duration: 1.25s, 1.25s, 6.25s;
}

@-webkit-keyframes bang {
to {
  box-shadow: -64px -119.6666666667px #d000ff, 41px -88.6666666667px aqua, 142px -251.6666666667px #00e6ff, 35px 14.3333333333px #00ffd5, 91px -69.6666666667px #1a00ff, -187px -106.6666666667px #ff0088, -230px 41.3333333333px #00ff84, -46px 81.3333333333px #ff0015, -227px -224.6666666667px #006fff, -157px -30.6666666667px #00ffd5, -79px -185.6666666667px #ff00ee, -58px -9.6666666667px #5900ff, -69px -246.6666666667px #ff0026, -78px -111.6666666667px #6fff00, -17px -350.6666666667px red, 189px -0.6666666667px #ff3c00, -83px -266.6666666667px #ff5e00, -230px -274.6666666667px #5500ff, 61px -104.6666666667px #b700ff, -179px 67.3333333333px #a200ff, 92px -349.6666666667px #2200ff, -71px -52.6666666667px #3c00ff, 240px 69.3333333333px #0015ff, 74px -108.6666666667px #ff3c00, 132px -255.6666666667px #00ffc4, -16px 32.3333333333px #00ff15, 98px 49.3333333333px #ff0077, 84px -331.6666666667px #00ff5e, -71px -268.6666666667px #0088ff, -4px -411.6666666667px lime, 62px -8.6666666667px #9dff00, 196px -348.6666666667px #ff00d5, -110px -234.6666666667px #0048ff, 135px -144.6666666667px #ff0026, 165px -62.6666666667px #0095ff, 203px 5.3333333333px #ea00ff, -54px -265.6666666667px #0080ff, 121px -406.6666666667px #ff0048, 32px -276.6666666667px #ff007b, 246px -116.6666666667px #ff006f, 168px -411.6666666667px #00ff88, -10px -220.6666666667px #ff002b, -195px -326.6666666667px #9dff00, 174px -114.6666666667px #b7ff00, -131px -233.6666666667px #ff00aa, -102px -257.6666666667px #ff0073, -30px -164.6666666667px #ff1100, 115px -369.6666666667px #ff0066, 35px -40.6666666667px #ff4400, 178px -177.6666666667px #ffea00, 95px -294.6666666667px #ff0080;
}
}
@-moz-keyframes bang {
to {
  box-shadow: -64px -119.6666666667px #d000ff, 41px -88.6666666667px aqua, 142px -251.6666666667px #00e6ff, 35px 14.3333333333px #00ffd5, 91px -69.6666666667px #1a00ff, -187px -106.6666666667px #ff0088, -230px 41.3333333333px #00ff84, -46px 81.3333333333px #ff0015, -227px -224.6666666667px #006fff, -157px -30.6666666667px #00ffd5, -79px -185.6666666667px #ff00ee, -58px -9.6666666667px #5900ff, -69px -246.6666666667px #ff0026, -78px -111.6666666667px #6fff00, -17px -350.6666666667px red, 189px -0.6666666667px #ff3c00, -83px -266.6666666667px #ff5e00, -230px -274.6666666667px #5500ff, 61px -104.6666666667px #b700ff, -179px 67.3333333333px #a200ff, 92px -349.6666666667px #2200ff, -71px -52.6666666667px #3c00ff, 240px 69.3333333333px #0015ff, 74px -108.6666666667px #ff3c00, 132px -255.6666666667px #00ffc4, -16px 32.3333333333px #00ff15, 98px 49.3333333333px #ff0077, 84px -331.6666666667px #00ff5e, -71px -268.6666666667px #0088ff, -4px -411.6666666667px lime, 62px -8.6666666667px #9dff00, 196px -348.6666666667px #ff00d5, -110px -234.6666666667px #0048ff, 135px -144.6666666667px #ff0026, 165px -62.6666666667px #0095ff, 203px 5.3333333333px #ea00ff, -54px -265.6666666667px #0080ff, 121px -406.6666666667px #ff0048, 32px -276.6666666667px #ff007b, 246px -116.6666666667px #ff006f, 168px -411.6666666667px #00ff88, -10px -220.6666666667px #ff002b, -195px -326.6666666667px #9dff00, 174px -114.6666666667px #b7ff00, -131px -233.6666666667px #ff00aa, -102px -257.6666666667px #ff0073, -30px -164.6666666667px #ff1100, 115px -369.6666666667px #ff0066, 35px -40.6666666667px #ff4400, 178px -177.6666666667px #ffea00, 95px -294.6666666667px #ff0080;
}
}
@-o-keyframes bang {
to {
  box-shadow: -64px -119.6666666667px #d000ff, 41px -88.6666666667px aqua, 142px -251.6666666667px #00e6ff, 35px 14.3333333333px #00ffd5, 91px -69.6666666667px #1a00ff, -187px -106.6666666667px #ff0088, -230px 41.3333333333px #00ff84, -46px 81.3333333333px #ff0015, -227px -224.6666666667px #006fff, -157px -30.6666666667px #00ffd5, -79px -185.6666666667px #ff00ee, -58px -9.6666666667px #5900ff, -69px -246.6666666667px #ff0026, -78px -111.6666666667px #6fff00, -17px -350.6666666667px red, 189px -0.6666666667px #ff3c00, -83px -266.6666666667px #ff5e00, -230px -274.6666666667px #5500ff, 61px -104.6666666667px #b700ff, -179px 67.3333333333px #a200ff, 92px -349.6666666667px #2200ff, -71px -52.6666666667px #3c00ff, 240px 69.3333333333px #0015ff, 74px -108.6666666667px #ff3c00, 132px -255.6666666667px #00ffc4, -16px 32.3333333333px #00ff15, 98px 49.3333333333px #ff0077, 84px -331.6666666667px #00ff5e, -71px -268.6666666667px #0088ff, -4px -411.6666666667px lime, 62px -8.6666666667px #9dff00, 196px -348.6666666667px #ff00d5, -110px -234.6666666667px #0048ff, 135px -144.6666666667px #ff0026, 165px -62.6666666667px #0095ff, 203px 5.3333333333px #ea00ff, -54px -265.6666666667px #0080ff, 121px -406.6666666667px #ff0048, 32px -276.6666666667px #ff007b, 246px -116.6666666667px #ff006f, 168px -411.6666666667px #00ff88, -10px -220.6666666667px #ff002b, -195px -326.6666666667px #9dff00, 174px -114.6666666667px #b7ff00, -131px -233.6666666667px #ff00aa, -102px -257.6666666667px #ff0073, -30px -164.6666666667px #ff1100, 115px -369.6666666667px #ff0066, 35px -40.6666666667px #ff4400, 178px -177.6666666667px #ffea00, 95px -294.6666666667px #ff0080;
}
}
@-ms-keyframes bang {
to {
  box-shadow: -64px -119.6666666667px #d000ff, 41px -88.6666666667px aqua, 142px -251.6666666667px #00e6ff, 35px 14.3333333333px #00ffd5, 91px -69.6666666667px #1a00ff, -187px -106.6666666667px #ff0088, -230px 41.3333333333px #00ff84, -46px 81.3333333333px #ff0015, -227px -224.6666666667px #006fff, -157px -30.6666666667px #00ffd5, -79px -185.6666666667px #ff00ee, -58px -9.6666666667px #5900ff, -69px -246.6666666667px #ff0026, -78px -111.6666666667px #6fff00, -17px -350.6666666667px red, 189px -0.6666666667px #ff3c00, -83px -266.6666666667px #ff5e00, -230px -274.6666666667px #5500ff, 61px -104.6666666667px #b700ff, -179px 67.3333333333px #a200ff, 92px -349.6666666667px #2200ff, -71px -52.6666666667px #3c00ff, 240px 69.3333333333px #0015ff, 74px -108.6666666667px #ff3c00, 132px -255.6666666667px #00ffc4, -16px 32.3333333333px #00ff15, 98px 49.3333333333px #ff0077, 84px -331.6666666667px #00ff5e, -71px -268.6666666667px #0088ff, -4px -411.6666666667px lime, 62px -8.6666666667px #9dff00, 196px -348.6666666667px #ff00d5, -110px -234.6666666667px #0048ff, 135px -144.6666666667px #ff0026, 165px -62.6666666667px #0095ff, 203px 5.3333333333px #ea00ff, -54px -265.6666666667px #0080ff, 121px -406.6666666667px #ff0048, 32px -276.6666666667px #ff007b, 246px -116.6666666667px #ff006f, 168px -411.6666666667px #00ff88, -10px -220.6666666667px #ff002b, -195px -326.6666666667px #9dff00, 174px -114.6666666667px #b7ff00, -131px -233.6666666667px #ff00aa, -102px -257.6666666667px #ff0073, -30px -164.6666666667px #ff1100, 115px -369.6666666667px #ff0066, 35px -40.6666666667px #ff4400, 178px -177.6666666667px #ffea00, 95px -294.6666666667px #ff0080;
}
}
@keyframes bang {
to {
  box-shadow: -64px -119.6666666667px #d000ff, 41px -88.6666666667px aqua, 142px -251.6666666667px #00e6ff, 35px 14.3333333333px #00ffd5, 91px -69.6666666667px #1a00ff, -187px -106.6666666667px #ff0088, -230px 41.3333333333px #00ff84, -46px 81.3333333333px #ff0015, -227px -224.6666666667px #006fff, -157px -30.6666666667px #00ffd5, -79px -185.6666666667px #ff00ee, -58px -9.6666666667px #5900ff, -69px -246.6666666667px #ff0026, -78px -111.6666666667px #6fff00, -17px -350.6666666667px red, 189px -0.6666666667px #ff3c00, -83px -266.6666666667px #ff5e00, -230px -274.6666666667px #5500ff, 61px -104.6666666667px #b700ff, -179px 67.3333333333px #a200ff, 92px -349.6666666667px #2200ff, -71px -52.6666666667px #3c00ff, 240px 69.3333333333px #0015ff, 74px -108.6666666667px #ff3c00, 132px -255.6666666667px #00ffc4, -16px 32.3333333333px #00ff15, 98px 49.3333333333px #ff0077, 84px -331.6666666667px #00ff5e, -71px -268.6666666667px #0088ff, -4px -411.6666666667px lime, 62px -8.6666666667px #9dff00, 196px -348.6666666667px #ff00d5, -110px -234.6666666667px #0048ff, 135px -144.6666666667px #ff0026, 165px -62.6666666667px #0095ff, 203px 5.3333333333px #ea00ff, -54px -265.6666666667px #0080ff, 121px -406.6666666667px #ff0048, 32px -276.6666666667px #ff007b, 246px -116.6666666667px #ff006f, 168px -411.6666666667px #00ff88, -10px -220.6666666667px #ff002b, -195px -326.6666666667px #9dff00, 174px -114.6666666667px #b7ff00, -131px -233.6666666667px #ff00aa, -102px -257.6666666667px #ff0073, -30px -164.6666666667px #ff1100, 115px -369.6666666667px #ff0066, 35px -40.6666666667px #ff4400, 178px -177.6666666667px #ffea00, 95px -294.6666666667px #ff0080;
}
}
@-webkit-keyframes gravity {
to {
  transform: translateY(200px);
  -moz-transform: translateY(200px);
  -webkit-transform: translateY(200px);
  -o-transform: translateY(200px);
  -ms-transform: translateY(200px);
  opacity: 0;
}
}
@-moz-keyframes gravity {
to {
  transform: translateY(200px);
  -moz-transform: translateY(200px);
  -webkit-transform: translateY(200px);
  -o-transform: translateY(200px);
  -ms-transform: translateY(200px);
  opacity: 0;
}
}
@-o-keyframes gravity {
to {
  transform: translateY(200px);
  -moz-transform: translateY(200px);
  -webkit-transform: translateY(200px);
  -o-transform: translateY(200px);
  -ms-transform: translateY(200px);
  opacity: 0;
}
}
@-ms-keyframes gravity {
to {
  transform: translateY(200px);
  -moz-transform: translateY(200px);
  -webkit-transform: translateY(200px);
  -o-transform: translateY(200px);
  -ms-transform: translateY(200px);
  opacity: 0;
}
}
@keyframes gravity {
to {
  transform: translateY(200px);
  -moz-transform: translateY(200px);
  -webkit-transform: translateY(200px);
  -o-transform: translateY(200px);
  -ms-transform: translateY(200px);
  opacity: 0;
}
}
@-webkit-keyframes position {
0%, 19.9% {
  margin-top: 10%;
  margin-left: 40%;
}
20%, 39.9% {
  margin-top: 40%;
  margin-left: 30%;
}
40%, 59.9% {
  margin-top: 20%;
  margin-left: 70%;
}
60%, 79.9% {
  margin-top: 30%;
  margin-left: 20%;
}
80%, 99.9% {
  margin-top: 30%;
  margin-left: 80%;
}
}
@-moz-keyframes position {
0%, 19.9% {
  margin-top: 10%;
  margin-left: 40%;
}
20%, 39.9% {
  margin-top: 40%;
  margin-left: 30%;
}
40%, 59.9% {
  margin-top: 20%;
  margin-left: 70%;
}
60%, 79.9% {
  margin-top: 30%;
  margin-left: 20%;
}
80%, 99.9% {
  margin-top: 30%;
  margin-left: 80%;
}
}
@-o-keyframes position {
0%, 19.9% {
  margin-top: 10%;
  margin-left: 40%;
}
20%, 39.9% {
  margin-top: 40%;
  margin-left: 30%;
}
40%, 59.9% {
  margin-top: 20%;
  margin-left: 70%;
}
60%, 79.9% {
  margin-top: 30%;
  margin-left: 20%;
}
80%, 99.9% {
  margin-top: 30%;
  margin-left: 80%;
}
}
@-ms-keyframes position {
0%, 19.9% {
  margin-top: 10%;
  margin-left: 40%;
}
20%, 39.9% {
  margin-top: 40%;
  margin-left: 30%;
}
40%, 59.9% {
  margin-top: 20%;
  margin-left: 70%;
}
60%, 79.9% {
  margin-top: 30%;
  margin-left: 20%;
}
80%, 99.9% {
  margin-top: 30%;
  margin-left: 80%;
}
}
@keyframes position {
0%, 19.9% {
  margin-top: 10%;
  margin-left: 40%;
}
20%, 39.9% {
  margin-top: 40%;
  margin-left: 30%;
}
40%, 59.9% {
  margin-top: 20%;
  margin-left: 70%;
}
60%, 79.9% {
  margin-top: 30%;
  margin-left: 20%;
}
80%, 99.9% {
  margin-top: 30%;
  margin-left: 80%;
}
}
.fadeOut {
animation: 3s fadeOut;
animation-fill-mode: forwards;
animation-iteration-count: infinite;
visibility: hidden;
}

@keyframes fadeOut {
0% {
  opacity: 1;
}
100% {
  visibility: visible;
  opacity: 1;
}
}
.pyro {
  position: fixed !important;
  top: 0;
  z-index: 9999999;
}
</style>
<div class="pyro fadeOut">
<div class="before"></div>
<div class="after"></div>
</div>
<div id="cookie-banner-bg" class="banner-bg"></div>
`;