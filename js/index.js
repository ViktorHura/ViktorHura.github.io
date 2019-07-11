Vue.component('app-header', {

  template: `<div class="sticky bordered">
                    <div class="row">
                    <div class="col-sm-fluid ">
                      <a href="#" class="logo" style="color:white;"><h3>Viktor Hura</h3></a>
                      </div>

                      <div class="col-sm-fluid ">
                        <button class="inverse shadowed" onclick="prompt('Discord', 'Viktor#1386')">Discord</button>
                      </div>
                      <div class="col-sm-fluid ">
                      <a href="https://steamcommunity.com/id/penguinsniffer/" target="_blank" class="button inverse shadowed">Steam</a>
                      </div>
                      <div class="col-sm-fluid ">
                        <button class="inverse shadowed" onclick="prompt('Email', 'viktorhura.info@gmail.com')">Email</button>
                      </div>


                      </div>

              </div>
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
  template: `<div :id="date" class="container">

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
        id: 9,
        title: 'Multilayer Perceptron Network using Genetic Algorithms in Java, or mlpnet-ga-java abbreviated',
        date: '9/7/2019',
        image: "img/Mlpnet-ga-java.png",
        link: "https://github.com/ViktorHura/mlpnet-ga-java",
        description: `
                        A 3 layer MLP Network, using Genetic Algorithm as a trainer, to solve XOR problem</br>
                        I first wrote this program in golang, now rewrote it to learn java. <a href="#17/4/2019">Original Go version</a>
                        `
      },
      {
        id: 8,
        title: 'Znimok',
        date: '26/4/2019',
        image: "img/Znimok.png",
        link: "https://github.com/ViktorHura/znimok",
        description: `
                            Znimok - yet another screenshot application, written in go</br></br>

                            Using <a href="https://github.com/bamontelucas/image-clipboard">https://github.com/bamontelucas/image-clipboard</a> to copy images due to limitations in go</br>
                            Usage: Make a selection with mouse and press Space to copy to clipboard</br>
                            Works on multiple displays as long as the tops of the displays are aligned</br>
                          `
      },
      {
        id: 7,
        title: 'Multilayer Perceptron Network using Genetic Algorithms in Go, or mlpnet-ga-go abbreviated',
        date: '17/4/2019',
        image: "img/Mlpnet-ga-go.png",
        link: "https://github.com/ViktorHura/mlpnet-ga-go",
        description: `
                        A 3 layer MLP Network, using Genetic Algorithm as a trainer, to solve XOR problem. </br>Written in Go.
                        </br></br> I use the input-layer matrix and the hidden-layer matrix as "chromosones" in my genetic algorithm to evolve them to solve the XOR problem.
                        `
      },
      {
        id: 6,
        title: 'Genetic Image',
        date: '23/3/2019',
        image: "img/GeneticImage.png",
        link: "https://github.com/ViktorHura/genetic-image-go",
        description: `
                          I wrote this program in Golang, to recreate an image using polygons. I use "<a href="https://en.wikipedia.org/wiki/Genetic_algorithm">Genetic Algorithm</a>" to
                          evolve a "population of images" to look as similar as possible to my original image.</br></br>

                          <figure>
                          <a :href="link"><img src="img/GeneticImage2.png" alt="Image unavailable"/></a>
                          <figcaption><a href="https://github.com/ViktorHura/genetic-image-go/tree/master/logs/Mona%20Lisa%20Klein"><h5><strong>Link</strong><span class="icon-link"></span></h5></a></figcaption>
                          </figure>

                          I got inspired by <a href="https://rogerjohansson.blog/2008/12/07/genetic-programming-evolution-of-mona-lisa/">Roger Johansson's blog post from 2008</a>, so I decided to write a similar program in Go.</br></br>
                          My approach is different in a few ways. My algorithm is a "true" genetic algorithm, where you need two parents to create an offspring which in turn also receives a mutation.
                          Roger Johansson's algorithm uses "asexual reproduction", using only mutation, to create the next generation.</br></br>
                          I found that I achieve similar results but with only 1/5th of the iterations needed compared to Roger Johansson, but you must remember that his "populations" only contain 2 individuals while I have 200.</br>
                          This makes the amount of time to compute one of my generations compared to his also much longer.  </br></br>
                          In the end I don't receive as good results as Roger Johansson. </br>
                          This is mostly because I have a fixed amount of polygons while in Rogers algorithm the organism starts out with only a few and gains more during evolution. Furthermore, my mutation algorithm is not granular enough, which is important in later stages of evolution where you only need small changes instead of strong mutations.</br></br>
                          I use tournament selection, elitism, cutoff and 1 point crossover for my algorithm. If you're interested in more details feel free to checkout my sourcecode at the link above.
                          `
      },
      {
        id: 5,
        title: 'Newton Fractal',
        date: '12/2/2019',
        image: "img/NewtonFractal.png",
        link: "https://github.com/ViktorHura/newtonrhapson",
        description: `
                        I applied "<a href="https://en.wikipedia.org/wiki/Newton%27s_method">Newton's Method</a>" in javascript with real and imaginary numbers.</br></br>
                        The example above shows fractals generated by applying the method to an imaginary number. This number represent a pixel on screen, where the x-axis shows the real part
                        and the y-axis shows the imaginary part. </br></br>We determine the brightness of the pixel by applying Newton's method to the given formula, using this number as a starting guess
                        and counting how many iterations we need to reach an answer. The more iterations are needed, the brighter the pixel. Red pixels didn't reach an answer within the given max iteration limit.

                        </br></br> This was made for a school project.
                        `
      },
      {
        id: 4,
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
        id: 3,
        title: 'AirDashGL',
        date: '29/10/2017',
        image: "img/AirDashGL.png",
        link: "https://viktorhura.github.io/AirDashGL/",
        description: `A fun 2D flying game rendered in 3D, made using <a href="https://godotengine.org/">Godot 2.2</a>.`
      },
      {
        id: 2,
        title: 'KveikGL',
        date: '01/09/2017',
        image: "img/KveikGL.png",
        link: "https://viktorhura.github.io/NunuStudioFirstPersonShooter/",
        description: `A Webgl Shooter, focused on learning patterns and mastering movement and gunplay.
                    It is built using <a href="https://nunustudio.org/">NunuStudio</a>`
      },
      {
        id: 1,
        title: 'Fall Of Adolphin',
        date: '19/03/2017',
        image: "img/FOA.png",
        link: "https://viktorhura.github.io/Fall-Of-Adolphin/",
        description: `My first attempt at a Webgl Adventure Game written in Three.js mostly from scratch using <a href="https://www.createjs.com/soundjs">SoundJs</a> for audio.
                      Fall of Adolphin is a 3D Webgl adventure game about the penguins who are trying to defeat the nazi-dolphins.`
      },

    ],


  }
});