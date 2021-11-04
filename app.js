let app = Vue.createApp({
  data: function(){
    
    Me = {
      name: 'Mckern D. Auguste',
      picture: '/images/mckernPng.jpg',
      title: 'Full Stack Developer',
      languages: ' Java, Javascript, C++, Css, Html',
      projectOne: 'Database Application',
      age: function findAge(currentAge) {
          birthdate = 1996;
          currentYear = new Date.getFullYear();
          
          currentAge = currentYear - birthdate;
            return {
            currentAge
            }
      },
      email: 'mckernauguste@gmail.com',
    },

    
    Videos = {
      video:'',
     
    }

    return {
      name: Me.name,
      picture: Me.picture,
      title: Me.title,
      languages: Me.languages,
      age: Me.currentAge,
      email: Me.email,
      projectOne: Me.projectOne,
    }
  },
});
app.mount('#app')


