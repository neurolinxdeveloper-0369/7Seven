import React, { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    if (window.$) {
      setTimeout(() => {
        try { if (window.$('.banner-wrapper').flexslider) { window.$('.banner-wrapper').flexslider({ animation: "slide", slideshowSpeed: 4000, animationSpeed: 1500, smoothHeight: true }); } } catch (e) {}
        try { if (window.$('.testimonial-slider').flexslider) { window.$('.testimonial-slider').flexslider({ animation: "slide", slideshowSpeed: 5500, animationSpeed: 1500 }); } } catch (e) {}
        try { if (window.$('.services-carousel').slick) { window.$('.services-carousel').slick({ infinite: true, autoplay: true, autoplaySpeed: 5000, slidesToShow: 9, dots: false, arrows: true, slidesToScroll: 1, adaptiveHeight: true, responsive: [ { breakpoint: 999, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } } ] }); } } catch (e) {}
        try { if (window.$('.owl-carousel').owlCarousel) { window.$('.owl-carousel').owlCarousel({ margin: 10, nav: true, navText: ["<i className='fa fa-chevron-left'></i>", "<i className='fa fa-chevron-right'></i>"], autoplay:true, autoplayTimeout:3000, loop: true, responsive: { 0: { items: 1 }, 1000: { items: 2 } } }); } } catch (e) {}
      }, 500);
    }
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: `<div class="banner-wrapper">
<ul class="slides">
<li>
<div class="banner-image">
<a href="/view/about-us"><img src="/images/home-banner1_5005.jpg" alt="Ips-banner" />
<div class="banner-caption">
<div class="container">
<div class="caption-wrap">
<h1>BIG SUITE
<br/>
	<span>MAKE YOUR TRIP LUXURIOUS WITH OUR BIG SUITE ROOMS.</span></h1>
<p>
	<a class="banner-book-now" href="/book-room">BOOK NOW</a> &nbsp;<a class="banner-book-now" href="/rooms">MORE INFO</a></p>        
</div>
</div>
</div></a>
</div>
</li>
<li>
<div class="banner-image">
<a href="/view/services-"><img src="/images/home-banner2_4139.jpg" alt="Ips-banner" />
<div class="banner-caption">
<div class="container">
<div class="caption-wrap">
	<h1>
	CLASSIC DELUXE
<br />
	<span>A COMFORTABLE STAY WITH A COMPETITIVE BUDGET AND NO COMPROMISED QUALITY OF STAY.</span></h1>
<p>
	<a class="banner-book-now" href="book-room">BOOK NOW</a> &nbsp;<a class="banner-book-now" href="/rooms">MORE INFO</a></p>        
</div>
</div>
</div></a>
</div>
</li>
<li>
<div class="banner-image">
<a href="/view/consulting"><img src="/images/home-banner3_6665.jpg" alt="Ips-banner" />
<div class="banner-caption">
<div class="container">
<div class="caption-wrap">
<h1>
	CONFERENCE HALL<br />
	<span>AFFORDABLE PRICES</span></h1>
<p>
	<a class="banner-book-now" href="/book-now">BOOK NOW</a>
	&nbsp;<a href="/rooms" class="banner-book-now">MORE INFO</a></p>
        
</div>
</div>
</div></a>
</div>
</li>
  
</ul>
</div>
<!--<div class="banner-caption">
<div class="container">
<div class="caption-wrap">
<//?php echo \$row_getBanner['banner_content']; ?>        
</div>
</div>
</div>-->

<!----------banner end---------->
<!---------- Home page box1 ---------->
   
   <section class="banner-below-wraper">
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-6">
				<div class="banner-below-content">
					<h1>Our restaurant is a local independent family run business which offers authentic Indian food.</h1>
				</div>
			</div>
			<div class="col-md-6 col-sm-6">
				<div class="banner-below-oyo-logo">
					<img src="/images/restarent-homepage-8994.jpg">
				</div>
			</div>
		</div>
	</div>
</section>

<section class="Our-rooms-section">
	<div class="container">
		<h1>Our Rooms</h1>
		<img src="images/btm-icon.png" class="Our-rooms-section-divider">
		<p>Ideal destination for business trips and industrial visits. SEVEN located at Hyderabad’s most happening industrial areas Kushaiguda, Cherlapalli, and Mallapur.</p>
		<p>Avoid the travelling and commute delays to reach the business meetings. You are just few minutes away to above listed industrial parks.</p>
		<div class="row">
			<div class="col-md-4 col-sm-6">
				<div class="our-rooms-block">
					<img src="images/bed-room.jpg">
					<div class="our-rooms-block-content">
						<!--<h2>Deluxe Suite</h2>-->
						<h2>Big Suite  ₹ 6000 + tax </h2>
						<p>A big suite for your peaceful business/ family stay to explore the new opportunities.</p>
						<a href="/book-room" class="book-room-now">Book Now</a>
						<a href="/rooms" class="More-Info-room">More Info</a>
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="our-rooms-block">
					<img src="images/multirooms.jpg">
					<div class="our-rooms-block-content">
						<h2>Classic Deluxe  ₹ 2500 + tax</h2>
						<p>Single occupancy 2500 + tax per and 2800+ tax for Double occupancy. Room prices subject to change based on availability. </p>
						
						
						<!--------<h2>Classic Deluxe  ₹ 2300 + tax</h2>
						<p>A classic deluxe that suites you when you visit with your coleague.</p>--------->
						<a href="/book-room" class="book-room-now">Book Now</a>
						<a href="/rooms" class="More-Info-room">More Info</a>
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="our-rooms-block">
					<img src="images/conference-room-hm.jpg">
					<div class="our-rooms-block-content">
						<h2>Conference Hall</h2>
						<p>A business confernece room that give you opportunity to organise your business meets.</p>
						<a href="/book-room" class="book-room-now">Book Now</a>
						<a href="/rooms" class="More-Info-room">More Info</a>
					</div>
				</div>
			</div>
		</div>
        <div class="our-rooms-icon-wrapper">
          <div id="services-carousel">
	<div class="row wow fadeInUp" data-wow-delay="0.5s">
		<div class="services-carousel">
			<div class="carousel-item">
			  <div class="our-rooms-icon">
					<img src="images/luxery-intorir-icon.png">
					<p>Luxury Interiors</p>
			  </div>
			</div>
			<div class="carousel-item">
			  <div class="our-rooms-icon">
					<img src="images/keys-icon.png">
					<p>24hrs Check-In</p>
			  </div>
			</div>
			<div class="carousel-item">
			  <div class="our-rooms-icon">
					<img src="images/cup-icon.png">
					<p>Complimentary Breakfast</p>
				</div>
			</div>
			<div class="carousel-item">
			  <div class="our-rooms-icon">
					<img src="images/security-icon.png">
					<p>Security Guaranteed</p>
				</div>
			</div>
			<div class="carousel-item">
			  <div class="our-rooms-icon">
					<img src="images/wifi-icon.png">
					<p>Internet Connectivity</p>
				</div>
			</div>
			<div class="carousel-item">
			  <div class="our-rooms-icon">
					<img src="images/lction-icon.png">
					<p>City Visit Local Guidance</p>
				</div>
			</div>
			<div class="carousel-item">
			  <div class="our-rooms-icon">
					<img src="images/car-icon.png">
					<p>Cab Facility</p>
				</div>
			</div>
			<div class="carousel-item">
			  <div class="our-rooms-icon">
					<img src="images/couple-friendly.png">
					<p>Couple Friendly</p>
				</div>
			</div>
			<div class="carousel-item">
			  <div class="our-rooms-icon">
					<img src="images/moey.png">
					<p>Multiple Payment Methods</p>
				</div>
			</div>
			</div>
	    </div>
	</div>
	</div>
</section>
<section class="about-us-wrapper">
	<div class="container">
		<h1>About Us</h1>
		<img src="images/btm-icon.png" class="about-us-wrapper-divider">
		<p class="about-para">SEVEN is surrounded with different industrial parks such as Kushaiguda, Cherlapalli, Mallapur with commercial, and economic activity. So if you’re planning a work trip and need a place to start, you’ve come to the right place. Take a look at our alery for the best business opportunities</p>
		<h2>HYDERABAD</h2>
		<p class="about-para">Hyderabad is the capital of southern India's Telangana state.  A major center for the technology industry, it's home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital. The Charminar, a 16th-century mosque whose 4 arches support towering minarets, is an old city landmark near the long-standing Laad Bazaar.</p>
		<div class="about-slider">
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
		    <!-- Wrapper for slides -->
		    <div class="carousel-inner">
		      <div class="item active">
		        <img src="images/about-slide-image.jpg" alt="Hyderabad" style="width:100%;">
		      </div>

		      <div class="item">
		        <img src="images/about-slide-image1.jpg" alt="Hyderabad" style="width:100%;">
		      </div>
		    
		      <div class="item">
		        <img src="images/about-slide-image2.jpg" alt="Hyderabad" style="width:100%;">
		      </div>
		    </div>

		    <!-- Left and right controls -->
		    <a class="left carousel-control cstm-arrow-prev" href="#myCarousel" data-slide="prev">
		      <img src="images/prev.png">
		    </a>
		    <a class="right carousel-control cstm-arrow" href="#myCarousel" data-slide="next">
		       <img src="images/next.png">
		    </a>
		  </div>
		</div>
	</div>
</section>
<!---------testimonialslider wrapper--------->
<section class="testimonialslider-wrapper">
	<div class="container">
		<h1>Testimoinals</h1>
	<img src="images/btm-white-icon.png">
<div class="testimonial-slider text-center">
<ul class="slides">
<li>
<div class="testimonialtext">
<p>&nbsp;</p>
<p>
	&quot; This is an appreciation to the excellent team at hotel SEVEN who helped me book my hotel stay with simple telephone call. Thank you team for going beyond to ensure customer satisfaction.&quot;</p>
<h5><span class="author-name">- Pradeep</span>,Dehli</h5>
</div>
</li>
<li>
<div class="testimonialtext">
<p>&nbsp;</p>
<p>
	&quot;Booked my Bali stay with you guys and we saved a lot coz of flat 10% discount. We were comparing with many websites for booking, howevr all had a capping on discount amount. The flat 10% discount without a capp on discount helped us save big! I will definitely recommend hotel SEVEN to everyone.&quot;</p>
<h5><span class="author-name">- Priyanka</span>, Hyderabad</h5>
</div>
</li>
<li>
<div class="testimonialtext">
<p>&nbsp;</p>
<p>"I have visited Hyderabad for a Industrial material purchase, my 2 days stay at hotel SEVEN was really memoriable, first time I had a pleasant coommute, the hotel is very near to Cherlappy and I have saved a lot of time which I spent for city visit. </p>
		        <p>The hotel interiors are good and the staff was so pleasing. I have decided to book for next trip as well."</p><h5><span class="author-name">- Pankaj Das</span>, Mumbai</h5>
</div>
</li>
</ul>
</div>
	<!--<div id="myCarousel1" class="carousel slide" data-ride="carousel">
		 <ol class="carousel-indicators">
		    <li data-target="#myCarousel1" data-slide-to="0" class="active"></li>
		    <li data-target="#myCarousel1" data-slide-to="1"></li>
		    <li data-target="#myCarousel1" data-slide-to="2"></li>
		  </ol>
		    <!-- Wrapper for slides -->
		    <!--<div class="carousel-inner">
		      <div class="item active">
		        <p>“I have visited Hyderabad for a Industrial material purchase, my 2 days stay at hotel SEVEN was really memoriable, first time I had a pleasant coommute, the hotel is very near to Cherlappy and I have saved a lot of time which I spent for city visit. </p>
		        <p>The hotel interiors are good and the staff was so pleasing. I have decided to book for next trip as well.”</p>
		        <h5>- Pankaj Das, Mumbai</h5>
		      </div>

		      <div class="item">
		         <p>“I have visited Hyderabad for a Industrial material purchase, my 2 days stay at hotel SEVEN was really memoriable, first time I had a pleasant coommute, the hotel is very near to Cherlappy and I have saved a lot of time which I spent for city visit. </p>
		        <p>The hotel interiors are good and the staff was so pleasing. I have decided to book for next trip as well.”</p>
		        <h5>- Pankaj Das, Mumbai</h5>
		      </div>
		    
		      <div class="item">
		         <p>“I have visited Hyderabad for a Industrial material purchase, my 2 days stay at hotel SEVEN was really memoriable, first time I had a pleasant coommute, the hotel is very near to Cherlappy and I have saved a lot of time which I spent for city visit. </p>
		        <p>The hotel interiors are good and the staff was so pleasing. I have decided to book for next trip as well.”</p>
		        <h5>- Pankaj Das, Mumbai</h5>
		      </div>
		    </div>
		  </div>-->
	</div>
	
</section>
<section class="guest-gallery-wrapper">
	<div class="container">
		<h1>Our Guests Gallery</h1>
		<div class="guest-divider"></div>
	<div class="row align-items-center">
		<div class="col-12 col-carousel">
			<div class="owl-carousel carousel-main">
				<div>
					<div class="guest-gallery">
					  <img src="images/gallery1.jpg">
					  <div class="guset-reviews">
					  	  <p>"The hotel interiors are good and the staff was so pleasing. I have decided to book for next trip as well."</p>
					  	  <p><b>- Pankaj Das , Mumbai</b></p>
					  </div>
				    </div>
				</div>
				<div>
					<div class="guest-gallery">
					  <img src="images/gallery2.jpg">
					  <div class="guset-reviews">
					  	  <p>"The hotel interiors are good and the staff was so pleasing. I have decided to book for next trip as well."</p>
					  	  <p><b>- Vivek Shukla , Varanasi</b></p>
					  </div>
				    </div>
				</div>
				<div>
					<div class="guest-gallery">
					  <img src="images/aravind-gundeti.jpg">
					  <div class="guset-reviews">
					  	  <p>"We are glad that we have the Luxury Hotel near by. We have started Bookings for 7Seven for past three months and our clients are very much happy to stay. They are very comfortable and happy with services. I highly recommend 7Seven for your corporate needs."</p>
					  	  <p><b>- Aravind Gundeti, OpenPixel, Hyderabad</b></p>
					  </div>
				    </div>
				</div>
				<div>
					<div class="guest-gallery">
					  <img src="images/gallery2.jpg">
					  <div class="guset-reviews">
					  	  <p>"The hotel interiors are good and the staff was so pleasing. I have decided to book for next trip as well."</p>
					  	  <p><b>- Vivek Shukla , Varanasi</b></p>
					  </div>
				    </div>
				</div>
			</div>
		</div>
	</div>
	<div  id="Successfully"></div>
	
	<div class="col-md-12 col-sm-12 col-xs-12 all-fullview">

<div class="post-in-our-gallery">
		<h2>Post in Our Gallery</h2>
		<p>Post your experience in our gallery along with your picture. Valid experiences will win a surprise gift on your next visit.</p>
		       	
		
		<form id="apply_job" action="#Successfully" method="post" enctype="multipart/form-data" accept-charset="UTF-8" onSubmit="return validateForm2();">
			<div class="row">
				<div class="col-md-3">
					 <div class="form-group">
					    <input type="text" name="first_name" id="comp_name" class="form-control" placeholder="Full name" required>
					  </div>
				</div>
				<div class="col-md-3">
					 <div class="form-group">
					    <input type="text" class="form-control" name="city" id="city" placeholder="City" required>
					  </div>
				</div>
				<div class="col-md-3">
					 <div class="form-group">
					    <input type="text" class="form-control" name="message" id="message" placeholder="Message" required>
					  </div>
				</div>
                <div class="col-md-1 text-center">
					 <div class="form-group">
					     <label for="upload-photo"><img src="images/add-g-icon.png" width="74%"></label>
                       <input type="file" name="file" id="upload-photo file" required>
					  </div>
				</div>
	
				
				<div class="col-md-2">
				<input type="submit" name="submit" id="submit" class="submit-button" value="Submit">
				</div>
			</div>
		</form>
		       </div>
</div>
</div>

</section>
<section class="offer-block">
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<div class="offer-block-image">
				<h2>New To <img src="images/logo-white.png" class="img-responsive"></h2>	 
				</div>
				<div class="col-md-12 text-right">
				</div>
			</div>
			<div class="col-md-4 text-center">
				<div class="offer-block-content">
				<h2><span>24</span> Hours Check-in </h2>
					<h2><span>10%</span> DISCOUNT

for Corporates </h2>

					<a href="/book-room" class="book-black">BOOK NOW</a>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="maps-section">
	<div class="row no-gutters">
		<div class="maps-block">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.6636604376286!2d78.56930333089144!3d17.475805046669358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9da5706fc8a9%3A0x79e6af26e58d26cb!2sSeven%20hotel!5e0!3m2!1sen!2sin!4v1567084510975!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
			<div class="find-us">
				<h2>Find Us</h2>
				<div class="find-divider"></div>
				<p>
					<b>Hotel 7SEVEN</b><br>  
					A3-4/A, Electronic Complex,<br>
					ECIL Kushaiguda,<br>
					Hyderabad - 500062
				</p>
				<p>Phone:<span>+91 7013486961/040 40249198</span></p>
				<p>Email:<a href="mailto: vallabhaneniassociates@gmail.com" class="reservations-link"> vallabhaneniassociates@gmail.com</a></p>
				<p>For corporate enquiries please contact <a href="mailto: vallabhaneniassociates@gmail.com">vallabhaneniassociates@gmail.com</a></p>
				<!---<p class="oyo-room">Book 7Seven Rooms at OYO Rooms Today</p>
				<img src="images/oyo-logo-red.png">---->
			</div>
		</div>
	</div>
</section>
<!----CLIENTS SLIDER WRAPPER ENDS---->

  <!-----client logo slider end -->
<!----------footer Block-------------------->
<!--<style>
p.price-sub {
    color: #ee2923;
    font-size: 23px;
    text-align: center;
    margin-bottom: 20px;
}
</style>  -->

` }} />;
}
