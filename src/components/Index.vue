<template>
  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up"><u>{{$t('Free API')}}</u></h1>
          <h2 data-aos="fade-up" data-aos-delay="400">{{$t("This site is intended for people who are learning to communicate with API")}}</h2>

        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
          <img src="/public/hero-img.png" class="img-fluid animated" alt="">
        </div>
      </div>
    </div>

  </section>
  <section id="about" class="about">
    <div class="container">

      <div class="section-title" data-aos="fade-up">
        <h2>{{$t('About Us')}}</h2>
      </div>

      <div class="row content">
        <div class="col-lg-12" data-aos="fade-up" data-aos-delay="150">
          <p>
            {{$t('This site was built by one of Flexcourses students and it is an API using the beautiful Larvel framework and the frontend are designed using the beautiful also Vue js in order to provide assistance to people who learn to communicate with the API.')}}
          </p>
        </div>
      </div>

    </div>
  </section>
  <section id="services" class="services">
    <div class="container">

      <div class="section-title" data-aos="fade-up">
        <h2>{{$t('Services')}}</h2>
        <p>{{$t('This site provides a set of services to communicate with the API, which are as follows:')}}</p>
      </div>

      <div class="row">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div class="icon"><i class="fa fa-user-plus" aria-hidden="true"></i></div>
            <h4 class="title">{{$t('User registration')}}</h4>
            <p class="description">{{$t('You will learn here how to register a new user in the database and try all the services on this site after registration')}}</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div class="icon"><i class="fa fa-sign-in-alt"></i></div>
            <h4 class="title">{{$t('User login')}}</h4>
            <p class="description">{{$t('how to user log in as well as edit he profile and add a personal photo')}}</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div class="icon"><i class="fa fa-cloud-upload-alt" aria-hidden="true"></i></div>
            <h4 class="title">{{$t('Post photos')}}</h4>
            <p class="description">{{$t('how to upload and save images to a database and how to delete them')}}</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div class="icon"><i class="fa fa-eye" aria-hidden="true"></i></div>
            <h4 class="title">{{$t('Show photos')}}</h4>
            <p class="description">{{$t('how to fetch all the photos posted by all users on the site')}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script>

export default {

  mounted() {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
  }
}
</script>

<style scoped>
#hero {
  width: 100%;
  height: 70vh;
  margin-top: 70px;
}

#hero h1 {
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #3498db;
}

#hero h2 {

  margin-bottom: 50px;
  font-size: 24px;
}

#hero .btn-get-started {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 50px;
  transition: 0.5s;
  color: #3498db;
  border: 2px solid #3498db;
}

#hero .btn-get-started:hover {
  background: #3498db;
  color: #fff;
}

#hero .animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 991px) {
  #hero {
    height: 100vh;
  }
  #hero .animated {
    -webkit-animation: none;
    animation: none;
  }
  #hero .hero-img {
    text-align: center;
  }
  #hero .hero-img img {
    width: 50%;
  }
}

@media (max-width: 768px) {
  #hero {
    margin-top: 20px;
  }
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  #hero .hero-img img {
    width: 70%;
  }
}

@media (max-width: 575px) {
  #hero .hero-img img {
    width: 80%;
  }
}

@-webkit-keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}



.about .content h3 {
  font-weight: 600;
  font-size: 26px;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-left: 28px;
  position: relative;
}

.about .content ul li + li {
  margin-top: 10px;
}

.about .content ul i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 20px;
  color: #3498db;
  line-height: 1;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content .btn-learn-more {
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 50px;
  transition: 0.3s;
  line-height: 1;
  color: #3498db;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  margin-top: 6px;
  border: 2px solid #3498db;
}

.about .content .btn-learn-more:hover {
  background: #3498db;
  color: #fff;
  text-decoration: none;
}
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #f7fbfe;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  color: #222222;
}

.section-title h2::before, .section-title h2::after {
  content: '';
  width: 50px;
  height: 2px;
  background: #3498db;
  display: inline-block;
}

.section-title h2::before {
  margin: 0 15px 10px 0;
}

.section-title h2::after {
  margin: 0 0 10px 15px;
}

.section-title p {
  margin: 15px 0 0 0;
}
.services .icon-box {
  padding: 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 29px 0 rgba(68, 88, 144, 0.12);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
}

.services .icon-box::before {
  content: '';
  position: absolute;
  background: #e1f0fa;
  right: -60px;
  top: -40px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  transition: all 0.3s;
  z-index: -1;
}

.services .icon-box:hover::before {
  background: #3498db;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0px;
}

.services .icon {
  margin: 0 auto 20px auto;
  padding-top: 10px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background: #3498db;
  transition: all 0.3s ease-in-out;
}

.services .icon i {
  font-size: 36px;
  line-height: 1;
  color: #fff;
}

.services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.services .title a {
  color: #111;
}

.services .description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;
}

.services .icon-box:hover .title , .services .icon-box:hover .description {
  color: #fff;
}

.services .icon-box:hover .icon {
  background: #fff;
}

.services .icon-box:hover .icon i {
  color: #3498db;
}

</style>