Vue.component('app-header', {

  template: `<header class="sticky">

                      <a href="#" class="logo">Viktor Hura</a>

                      <label for="modal-control1" class="button">Discord</label>
                      <input type="checkbox" id="modal-control1" class="modal">
                      <div>
                        <div class="card header-modal">
                          <label for="modal-control1" class="modal-close" ></label>
                          <h3 class="section">Discord username</h3>

                          <input id="discord" type="text" value="Viktor#1386">
                          <button type="button" onclick='document.getElementById("discord").select();document.execCommand("copy");'>Copy</button>

                        </div>
                      </div>

                      <a href="https://steamcommunity.com/id/penguinsniffer/" target="_blank" class="button">Steam</a>

                      <label for="modal-control2" class="button">Email</label>
                      <input type="checkbox" id="modal-control2" class="modal">
                      <div>
                        <div class="card header-modal">
                          <label for="modal-control2" class="modal-close" ></label>
                          <h3 class="section">Email address</h3>
                          <input id="email" type="text" value="viktorhura.info@gmail.com">
                          <button type="button" onclick='document.getElementById("email").select();document.execCommand("copy");'>Copy</button>

                        </div>
                      </div>



              </header>
              `

});

Vue.component('blog', {

  template: `<div class="container">
              <div class="row">

                <div class="blog-column col-sm-12 col-md-8 col-md-offset-2">
                  <div class="col-sm-12 responsive-margin row"><h1><strong>Latest Projects</strong></h1></div>
                  <slot></slot>
                  <footer class="blog-column"></footer>
                </div>

              </div>
             </div>`

});

Vue.component('blog-post', {
  props: ['title', 'date', 'image', 'link', 'description'],
  template: `<div class="container">

             <div class="row cols-sm-12">
              <h2>{{ title }}
              <small>{{ date }}</small>
              </h2>
             </div>

             <div class="row">
             <figure>
             <a :href="link"><img :src="image" alt="Image unavailable"/></a>
             <figcaption><a :href="link"><h5><strong>Link</strong><span class="icon-link"></span></h5></a></figcaption>
             </figure>
             </div>

             <div class="row">
             <h6 class="responsive-padding">
             <span v-html="description"></span>
             </h6>
             </div>

             </div>
             `
})


var app = new Vue({
  el: '#app',
  data: {
    blogposts: [{
        id: 1,
        title: '4D Cube (Tesseract)',
        date: '15/2/2018',
        image: "img/4D.png",
        link: "https://viktorhura.github.io/4DCube/",
        description: `
                      I made a simulation of a 4D cube by constructing an isometric and a perpendicular projection of a 3D cube and then
                      applying it to project 4D on 3D. Coded in Javascript using <a href="https://threejs.org/">ThreeJs</a>
                      `
      },
      {
        id: 2,
        title: 'AirDashGL',
        date: '29/10/2017',
        image: "img/AirDashGL.png",
        link: "https://viktorhura.github.io/AirDashGL/",
        description: `A fun 2D flying game rendered in 3D, made using <a href="https://godotengine.org/">Godot 2.2</a>.`
      },
      {
        id: 3,
        title: 'KveikGL',
        date: '01/09/2017',
        image: "img/KveikGL.png",
        link: "https://viktorhura.github.io/NunuStudioFirstPersonShooter/",
        description: `A Webgl Shooter, focused on learning patterns and mastering movement and gunplay.
                    It is built using <a href="https://nunustudio.org/">NunuStudio</a>`
      },
      {
        id: 4,
        title: 'Fall Of Adolphin',
        date: '19/03/20177',
        image: "img/FOA.png",
        link: "https://viktorhura.github.io/Fall-Of-Adolphin/",
        description: `My first attempt at a Webgl Adventure Game written in Three.js mostly from scratch using <a href="https://www.createjs.com/soundjs">SoundJs</a> for audio.
                      Fall of Adolphin is a 3D Webgl adventure game about the penguins who are trying to defeat the nazi-dolphins.`
      },

    ],


  }
});