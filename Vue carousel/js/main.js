Vue.component('carousel', {
  template: `
    <div class="carousel">
      <div class="btn_left">
        <button type="button" class="button button-clear" @click="prev">
          <i class="fas fa-angle-left"></i>
        </button>
      </div>
      <transition-group tag="div" class="slider" :name="style">
        <div v-for="(img, index) in imgList" :key="img" v-if="index === displayImg">
          <img :src="img" />
        </div>
      </transition-group>
      <div class="btn_right">
        <button type="button" class="button button-clear" @click="next">
          <i class="fas fa-angle-right"></i>
        </button>
      </div>
      <div class="footer">
        <div class="center">
          <span class="point" v-for="(number, index) in imgList.length" :key="index" :class="{'active':index === displayImg}" @click="switchImg(index)">●</span>
        </div>
      </div>
    </div>
    `,

  props: {
    imgList: Array
  },
  data() {
    return {
      displayImg: 0,
      style: '',
      timerId: undefined,
    }
  },
  methods: {
    next() {
      if (this.displayImg >= this.imgList.length - 1) {
        this.displayImg = 0;
      } else {
        this.displayImg++;
      }
      this.style = "slide-right"
    },
    prev() {
      if (this.displayImg == 0) {
        this.displayImg = this.imgList.length - 1;
      } else {
        this.displayImg--;
      }
      this.style = "slide-left"
    },
    switchImg(index) {
      this.displayImg = index;
      this.style = "slide-right"
    }
  },
  mounted() {
    var timerId = setInterval(this.next, 5000)
  }
});

new Vue({
  el: '#app',
  data: {
    images: [
      './images/carousel/09_carousel_01.jpg',
      './images/carousel/09_carousel_02.jpg',
      './images/carousel/09_carousel_03.jpg',
      './images/carousel/09_carousel_04.jpg',
      './images/carousel/09_carousel_05.jpg'
    ]
  },
});