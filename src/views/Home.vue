<template>
  <header>
    <div class="hero-container">
      <div class="hero-content">  
        <h1 class="mb-5">Find your motivation to study</h1>
        <p>
          Bestudy wants you to study in an effecient way while also having fun! We
          provide you with FREE study rooms where you can enjoy the company of
          others during your study sessions. Need a break from studying? Bestudy
          provides you with a lot of fun breaks!
        </p>
        <a
          style="background-color: white; color: black"
          href="#download"
          class="btn btn-outline btn-xl js-scroll-trigger"
          >study rooms</a
        >
        <a style="color: black; background-color: #FFBD59" href="#download" class="btn btn-outline btn-xl js-scroll-trigger"
          >break rooms</a
        >
      </div>
    </div>
    <div class="hero-container2 orange">
      <div class="hero-content2">  
        <h2 style="font-style: italic;">
          "It’s not only the fact that I’m studying way more then before I got introduced to this cool website but it's the fact that I made so many new friends!"
        </h2>
        <h4>
          - Ben van der Lans
        </h4>

      </div>
    </div>
    <div class="hero-container1">
      <div class="hero-content1">  
        <h1 class="mb-5">PRIVATE TUTORING SESSIONS</h1>
        <p>
          Hire your own private tutor when enduring difficulties with a subject you’re learning. 
          With just one CLICK, you’ll be able to schedule a tutoring session with a tutor of your choice.
        </p>
        <a
          style="background-color: white; color: black"
          href="/teachers"
          class="btn btn-outline btn-xl js-scroll-trigger"
          >view tutors</a
        >
      </div>
    </div>
    <div class="hero-container2 member">
      <div class="hero-content2">  
        <h1 class="mb-5">BECOME A MEMBER</h1>
        <p>
          Register now and start experiencing all the benefits of Smart Study!
        </p>
        <a
          style="background-color: white; color: black"
          href="#download"
          class="btn btn-outline btn-xl js-scroll-trigger"
          >register now</a
        >
      </div>
    </div>
    
  </header>
</template>
	
<script>
export default {
  data() {
    return {};
  },
};
</script>


<style scoped>
.hero-container {
  position: relative;
  min-height: calc(100vh - 56px);
  padding: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/pic1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0;
  opacity: 0.7;
  z-index: 0;
}
.hero-content {
  max-width: 1024px;
  margin: auto;
  margin-top: 140px;
  position: relative;
  z-index: 10;
  color: black;
}

.hero-container1 {
  position: relative;
  min-height: calc(100vh - 56px);
  padding: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-container1::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/kid.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0;
  opacity: 0.7;
  z-index: 0;
}
.hero-content1 {
  max-width: 1024px;
  margin: auto;
  margin-top: 140px;
  position: relative;
  z-index: 10;
  color: black;
}
.hero-container2 {
  position: relative;
  min-height: calc(100vh - 56px);
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-container2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/orange.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0;
  opacity: 0.7;
  z-index: 0;
}
.hero-container2.orange, .hero-container2.member {
  min-height: unset;
}
.hero-content2 {
  max-width: 1024px;
  margin: auto;
  position: relative;
  z-index: 10;
  color: black;
}

.orange {
  text-align: center;
  vertical-align: middle;
}


</style>