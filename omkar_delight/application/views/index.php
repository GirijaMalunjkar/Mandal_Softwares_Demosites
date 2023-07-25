<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Omkar Delights HTML Template by Tooplate</title>
    <link rel="stylesheet" href="<?=base_url()?>public/fontawesome/css/all.min.css"> <!-- https://fontawesome.com/ -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" /> <!-- https://fonts.google.com/ -->
    <link rel="stylesheet" href="<?=base_url()?>public/css/tooplate-wave-cafe.css">
<!--
Tooplate 2121 Omkar Delights
https://www.tooplate.com/view/2121-wave-cafe
-->
</head>
<body>
  <div class="tm-container">
    <div class="tm-row">
      <!-- Site Header -->
      <div class="tm-left">
        <div class="tm-left-inner">
          <div class="tm-site-header">
            <i class="fas fa-coffee fa-3x tm-site-logo"></i>
            <h1 class="tm-site-name">Omkar Delights</h1>
          </div>
          <nav class="tm-site-nav">
            <ul class="tm-site-nav-ul">
              <li class="tm-page-nav-item">
                <a href="<?=base_url("#drink")?>" class="tm-page-link active">
                  <i class="fas fa-mug-hot tm-page-link-icon"></i>
                  <span>Menus</span>
                </a>
              </li>
              <li class="tm-page-nav-item">
                <a href="<?=base_url("#about")?>" class="tm-page-link">
                  <i class="fas fa-users tm-page-link-icon"></i>
                  <span>About Us</span>
                </a>
              </li>
              <li class="tm-page-nav-item">
                <a href="<?=base_url("#special")?>" class="tm-page-link">
                  <i class="fas fa-glass-martini tm-page-link-icon"></i>
                  <span>Special Items</span>
                </a>
              </li>
              <li class="tm-page-nav-item">
                <a href="<?=base_url("#contact")?>" class="tm-page-link">
                  <i class="fas fa-comments tm-page-link-icon"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>        
      </div>
      <div class="tm-right">
        <main class="tm-main">
          <div id="drink" class="tm-page-content">
            <!-- Drink Menu Page -->
            <nav class="tm-black-bg tm-drinks-nav">
              <ul>
                <li>
                  <a href="<?=base_url()?>" class="tm-tab-link active" data-id="cold">Iced Cakes</a>
                </li>
                <li>
                  <a href="<?=base_url()?>" class="tm-tab-link" data-id="hot">Mongolian cakes</a>
                </li>
                <li>
                  <a href="<?=base_url()?>" class="tm-tab-link" data-id="juice">Fruit Juice</a>
                </li>
              </ul>
            </nav>

            <div id="cold" class="tm-tab-content">
              <div class="tm-list">
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/iced-americano.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Port Blueberry<span class="tm-list-item-price">$10.25</span></h3>
                    <p class="tm-list-item-description">Light vanilla hot milk cake, port blueberry compote, white chocolate ganache, lemon-zested buttercream.</p>
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/iced-cappuccino.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Chocolate Salted Caramel<span class="tm-list-item-price">$12.50</span></h3>
                    <p class="tm-list-item-description">Moist chocolate cake, salted caramel, dark chocolate ganache, chocolate buttercream</p>
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/iced-espresso.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Caramelized White Chocolate Raspberry<span class="tm-list-item-price">$14.25</span></h3>
                    <p class="tm-list-item-description"> Light vanilla hot milk cake, caramelized white chocolate mousse, raspberry preserves, white chocolate buttercream.</p>
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/iced-latte.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Fall Spice<span class="tm-list-item-price">$11.50</span></h3>
                    <p class="tm-list-item-description">Brown butter pumpkin cake, cinnamon white chocolate ganache, cranberry preserves, and cinnamon buttercream.<br><a href="https://www.tooplate.com/contact" rel="nofollow" target="_parent">contact Omkar Delight</a> if you have anything to ask.</p>
                  </div>
                </div> 
                                       
              </div>
            </div> 

            <div id="hot" class="tm-tab-content">
              <div class="tm-list">
              
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/hot-americano.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Mongolian cakes<span class="tm-list-item-price">$8.50</span></h3>
                    <p class="tm-list-item-description">Mongolian chocolate cake is a rich and decadent dessert that is perfect for chocolate lovers.</p>              
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/hot-cappuccino.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Khuushuur Cake<span class="tm-list-item-price">$9.50</span></h3>
                    <p class="tm-list-item-description">Khuushuur cake is a traditional Mongolian dessert that is similar to a turnover or empanada. The cake is made with a savory meat filling that is seasoned with onion and garlic.</p>                    
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/hot-espresso.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Caramel Cake<span class="tm-list-item-price">$7.50</span></h3>
                    <p class="tm-list-item-description">Caramel cake is a classic dessert that is loved all over the world, and Mongolia is no exception. </p>              
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/hot-latte.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Yogurt Cake<span class="tm-list-item-price">$6.50</span></h3>
                    <p class="tm-list-item-description">Yogurt cake is a light and refreshing dessert that is perfect for those who prefer less sweet desserts.</p>              
                  </div>
                </div>
                         
              </div>
            </div>

            <div id="juice" class="tm-tab-content">
              <div class="tm-list">
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/smoothie-1.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Strawberry Smoothie<span class="tm-list-item-price">$12.50</span></h3>
                    <p class="tm-list-item-description">Here is a short description for the item along with a squared thumbnail.</p>              
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/smoothie-2.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Red Berry Smoothie<span class="tm-list-item-price">$14.50</span></h3>
                    <p class="tm-list-item-description">Here is a list of 4 items or add more. You can use this template for commercial purposes.</p>                    
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/smoothie-3.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Pineapple Smoothie<span class="tm-list-item-price">$16.50</span></h3>
                    <p class="tm-list-item-description">Left side logo and main menu are fixed. The video background is fixed.</p>              
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="<?=base_url()?>public/img/smoothie-4.png" alt="Image" class="tm-list-item-img">
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Spinach Smoothie<span class="tm-list-item-price">$18.50</span></h3>
                    <p class="tm-list-item-description">You are not allowed to redistribute the template ZIP file on other template sites.</p>              
                  </div>
                </div>              
              </div>
            </div>
            <!-- end Drink Menu Page -->
          </div>

          <!-- About Us Page -->
          <div id="about" class="tm-page-content">
            <div class="tm-black-bg tm-mb-20 tm-about-box-1">              
              <h2 class="tm-text-primary tm-about-header">About Omkar Delights</h2>
              <div class="tm-list-item tm-list-item-2">                
                <img src="<?=base_url()?>public/img/about-1.png" alt="Image" class="tm-list-item-img tm-list-item-img-big">
                <div class="tm-list-item-text-2">
                  <p>Welcome to Omkar Delights! We take pride in creating moments of joy with our exquisite cakes and revitalizing juices. Our passion for baking, combined with handpicked ingredients, ensures every slice is a delightful experience. </p>
                  <p>Beyond our offerings, our warm Juice Bar embraces community and fosters cherished memories. Join us on this delightful journey of savoring life's simple pleasures.</p>
                </div>                
              </div>
            </div>
            <div class="tm-black-bg tm-mb-20 tm-about-box-2">              
              <div class="tm-list-item tm-list-item-2">                
                <div class="tm-list-item-text-2">
                  <h2 class="tm-text-primary">How we began</h2>
                  <p>Our journey began with a simple vision - to create a haven of flavors that would tantalize taste buds and leave a lasting impression on every customer. Fueled by a passion for baking and a commitment to quality, we started crafting delectable cakes from scratch. </p>                  
                </div>                
                <img src="<?=base_url()?>public/img/about-2.png" alt="Image" class="tm-list-item-img tm-list-item-img-big tm-img-right">                
              </div>
              <p>With time, our offerings expanded to include a refreshing range of handcrafted juices, further enriching the Omkar Delights experience. From humble beginnings, we've grown into a cherished destination for delightful treats and warm memories. Thank you for being a part of our inspiring journey.</p>
            </div>
          </div>
          <!-- end About Us Page -->

          <!-- Special Items Page -->
          <div id="special" class="tm-page-content">
            <div class="tm-special-items">
              <div class="tm-black-bg tm-special-item">
                <img src="<?=base_url()?>public/img/special-01.jpg" alt="Image">
                <div class="tm-special-item-description">
                  <h2 class="tm-text-primary tm-special-item-title">Mexican fiesta cake</h2>
                  <p class="tm-special-item-text">Transport your taste buds to a culinary fiesta with our Mexican Fiesta Cake, a delightful fusion of flavors that celebrates the vibrant and spicy essence of Mexico in every mouthwatering layer.</p>  
                </div>
              </div>
              <div class="tm-black-bg tm-special-item">
                <img src="<?=base_url()?>public/img/special-02.jpg" alt="Image">
                <div class="tm-special-item-description">
                  <h2 class="tm-text-primary tm-special-item-title">Occasion cakes</h2>
                  <p class="tm-special-item-text">Celebrate every special occasion with our meticulously crafted Occasion Cakes, each one designed to mark moments of joy and create lasting memories filled with sweetness.</p>  
                </div>
              </div>
              <div class="tm-black-bg tm-special-item">
                <img src="<?=base_url()?>public/img/special-03.jpg" alt="Image">
                <div class="tm-special-item-description">
                  <h2 class="tm-text-primary tm-special-item-title">Festival Special</h2>
                  <p class="tm-special-item-text">Celebrate the joy of festivals with our extraordinary Festival Special Cakes. Each cake is a work of art, adorned with festive themes and flavors that embody the spirit of the occasion. Delight in the magic of the festivities with every delicious bite.</p>  
                </div>
              </div>
              <div class="tm-black-bg tm-special-item">
                <img src="<?=base_url()?>public/img/special-04.jpg" alt="Image">
                <div class="tm-special-item-description">
                  <h2 class="tm-text-primary tm-special-item-title">Love cake</h2>
                  <p class="tm-special-item-text">A delectable confection crafted to sweeten your heart and soul with every bite.</p>  
                </div>
              </div>      
              <div class="tm-black-bg tm-special-item">
                <img src="<?=base_url()?>public/img/special-05.jpg" alt="Image">
                <div class="tm-special-item-description">
                  <h2 class="tm-text-primary tm-special-item-title">Birthday Cakes</h2>
                  <p class="tm-special-item-text">Make birthdays unforgettable with our scrumptious Birthday Cakes, thoughtfully baked and adorned to add a touch of magic to your special day, and create cherished memories that last a lifetime.</p>  
                </div>
              </div>
              <div class="tm-black-bg tm-special-item">
                <img src="<?=base_url()?>public/img/special-06.jpg" alt="Image">
                <div class="tm-special-item-description">
                  <h2 class="tm-text-primary tm-special-item-title">Wedding Cake</h2>
                  <p class="tm-special-item-text">Celebrate love with our exquisite Wedding Cakes, meticulously crafted to add a touch of sweetness to your special day.</p>  
                </div>
              </div>                      
            </div>            
          </div>
          
          <!-- end Special Items Page -->

          <!-- Contact Page -->
          <div id="contact" class="tm-page-content">
            <div class="tm-black-bg tm-contact-text-container">
              <h2 class="tm-text-primary">Contact Wave</h2>
              <p>Welcome to Omkar Delights! We're here to sweeten your day with scrumptious cakes and refreshing juices. Reach out to us for delightful treats and excellent customer service at +91 ********** or drop us an email at info@example.com </P>
              <p> Your satisfaction is our priority, and we can't wait to serve you the finest indulgences.</p>
            </div>
            <div class="tm-black-bg tm-contact-form-container tm-align-right">
              <form action="" method="POST" id="contact-form">
                <div class="tm-form-group">
                  <input type="text" name="name" class="tm-form-control" placeholder="Name" required="" />
                </div>
                <div class="tm-form-group">
                  <input type="email" name="email" class="tm-form-control" placeholder="Email" required="" />
                </div>        
                <div class="tm-form-group tm-mb-30">
                  <textarea rows="6" name="message" class="tm-form-control" placeholder="Message" required=""></textarea>
                </div>        
                <div>
                  <button type="submit" class="tm-btn-primary tm-align-right">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!-- end Contact Page -->
        </main>
      </div>    
    </div>
    <footer class="tm-site-footer">
      <p class="tm-black-bg tm-footer-text">Copyright 2020 Omkar Delights
      
      | Design: <a href="https://www.tooplate.com" class="tm-footer-link" rel="sponsored" target="_parent">Tooplate</a></p>
    </footer>
  </div>
    
  <!-- Background video -->
  <div class="tm-video-wrapper">
      <i id="tm-video-control-button" class="fas fa-pause"></i>
      <video autoplay muted loop id="tm-video">
          <source src="<?=base_url()?>public/video/wave-cafe-video-bg.mp4" type="video/mp4">
      </video>
  </div>

  <script src="<?=base_url()?>public/js/jquery-3.4.1.min.js"></script>    
  <script>

    function setVideoSize() {
      const vidWidth = 1920;
      const vidHeight = 1080;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const tempVidWidth = windowHeight * vidWidth / vidHeight;
      const tempVidHeight = windowWidth * vidHeight / vidWidth;
      const newVidWidth = tempVidWidth > windowWidth ? tempVidWidth : windowWidth;
      const newVidHeight = tempVidHeight > windowHeight ? tempVidHeight : windowHeight;
      const tmVideo = $('#tm-video');

      tmVideo.css('width', newVidWidth);
      tmVideo.css('height', newVidHeight);
    }

    function openTab(evt, id) {
      $('.tm-tab-content').hide();
      $('#' + id).show();
      $('.tm-tab-link').removeClass('active');
      $(evt.currentTarget).addClass('active');
    }    

    function initPage() {
      let pageId = location.hash;

      if(pageId) {
        highlightMenu($(`.tm-page-link[href^="${pageId}"]`)); 
        showPage($(pageId));
      }
      else {
        pageId = $('.tm-page-link.active').attr('href');
        showPage($(pageId));
      }
    }

    function highlightMenu(menuItem) {
      $('.tm-page-link').removeClass('active');
      menuItem.addClass('active');
    }

    function showPage(page) {
      $('.tm-page-content').hide();
      page.show();
    }

    $(document).ready(function(){

      /***************** Pages *****************/

      initPage();

      $('.tm-page-link').click(function(event) {
        
        if(window.innerWidth > 991) {
          event.preventDefault();
        }

        highlightMenu($(event.currentTarget));
        showPage($(event.currentTarget.hash));
      });

      
      /***************** Tabs *******************/

      $('.tm-tab-link').on('click', e => {
        e.preventDefault(); 
        openTab(e, $(e.target).data('id'));
      });

      $('.tm-tab-link.active').click(); // Open default tab


      /************** Video background *********/

      setVideoSize();

      // Set video background size based on window size
      let timeout;
      window.onresize = function(){
        clearTimeout(timeout);
        timeout = setTimeout(setVideoSize, 100);
      };

      // Play/Pause button for video background      
      const btn = $("#tm-video-control-button");

      btn.on("click", function(e) {
        const video = document.getElementById("tm-video");
        $(this).removeClass();

        if (video.paused) {
          video.play();
          $(this).addClass("fas fa-pause");
        } else {
          video.pause();
          $(this).addClass("fas fa-play");
        }
      });
    });
      
  </script>
</body>
</html>