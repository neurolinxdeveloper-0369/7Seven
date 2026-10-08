import React from 'react';
export default function Footer() {
    return <div dangerouslySetInnerHTML={{ __html: `<footer class="footer-wrapper">
<div class="container">
 <div class="row wow fadeInUp m-b-30" data-wow-delay="0.6s">

  <div class="col-md-12">
<!--  <p class="price-sub"> <b>*NOTE: Room prices subject to change based on availability</b></p> -->
     <div class="footer-box-list1">
		<div class="widget-link">
		<ul>
				<li><a  href="/index">HOME</a></li>
				<li><a  href="/view/about">ABOUT</a></li>
				<li><a  href="/rooms">ROOMS</a></li>
				<li><a  href="/view/services">SERVICES</a></li>
				<li><a  href="/view/gallery">GALLERY</a></li>
				<li><a  href="/view/restaurant">RESTAURANT</a></li>
				<li><a  href="/view/contact">CONTACT</a></li>
				<li>
	<a href="/terms-conditions" >TERMS & CONDITIONS</a>
</li>
		<li>
	<a href="book-room" class="Book-a-room">BOOK A ROOM</a>
</li>
		</ul>
		</div>
	</div> 
  </div>

 </div>
<div class="row wow fadeInUp" data-wow-delay="0.6s">

<div class="col-md-6 col-sm-12 col-xs-12">
<div class="footer-box-list">

<p>
	Our prime location is the perfect launch pad to explore your business opportunities in surroudned industrial parks.</p>
<p>
	SEVEN is exclusively for adults and offers spacious suites with all the expected comforts and more. Breakfast is included in the tariff.</p>
<p>
	Note : Prices will vary in special dates.</p>
<p>
    Note: Room prices subject to change based on availability. </p>
</div>
</div> 
<div class="col-md-6">
  <div class="footer-form">
   <p>Subscribe to our Newsletter List and get our peridoic offers right in to your inbox.</p>
   <form role="search" method="post" onSubmit="return validatesubscribe()">
      <div class="row">
     <div class="col-md-8">
	    <div class="form-group">
		<input type="email" name="subscribeemail" class="form-control contact-flied" placeholder="Enter your email here" required="" id="subscribeemail" value="">
	  </div>
	 </div>
	<div class="col-md-2 col-sm-2 col-xs-2">
<button type="submit" id="submitsubscribe" name="submitsubscribe" class="button">Subscribe </button></form>
</div>
  </div>
   </form>
  </div>
</div>

<!--<div class="col-md-6 col-sm-6 col-xs-12 text-center">
<div class="newsletter_box">
<h1>Sign up to our newsletter</h1>
<p>Sign up to receive news and updates. Each week we'll send you a summary of the latest articles. Keep an eye on your inbox!</p>
<div class="nws-byn">
<div class="col-md-10 col-sm-10 col-xs-10">
<form role="search" method="post" onSubmit="return validatesubscribe()">
<input type="email" name="subscribeemail" class="form-control contact-flied" placeholder="Enter your email here" required="" id="subscribeemail" value=""></div>
<div class="col-md-2 col-sm-2 col-xs-2">
<button type="submit" id="submitsubscribe" name="submitsubscribe" class="button"><img src="/images/sub-btn.png"> </button></form>
</div>
</div>

</div>
</div>--->
</div>


<div class="copy-right">
<div class="row wow fadeInUp" data-wow-delay="0.6s">

<div class="col-md-8 col-sm-12 col-xs-12">  
<p>
	Copyright &copy; 2019 Vallabhaneni Associates for Hotel 7Seven, All rights reserved</p>
</div>
<div class="col-md-4 col-sm-12 col-xs-12">  
    <div class="social-media-icons">
	<a href="https://www.facebook.com/7SevenHotel-105583847490097/" target="_blank"><img src="/images/fb-icon.png" class="fb-logo"></a>
			   <a href="https://www.linkedin.com/company/7seven-hotel/" target="_blank"><img src="/images/linkedin-icon.png" class="fb-logo"></a>
		<!--<a href="#"><img src="/images/fb-icon.png" class="fb-logo"></a>
	   <a href="#"><img src="/images/linkedin-icon.png" class="fb-logo"></a>-->
	   <!--<a href="#"><img src="/images/oyo-lgo.png"  class="oyo-logo"></a>-->
	 </div>	
</div>
</div>
</div>
</div><!-- end container -->
</footer>` }} />;
}
