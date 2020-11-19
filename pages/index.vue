<template>
  <section class="section">
    <div>
      <div class="text-center title-index">
        <h1>Madera, tout un savoir</h1>
      </div>
      <b-carousel :indicator-inside="false">
        <b-carousel-item v-for="(item, i) in 6" :key="i">
          <span class="image">
            <img :src="getImgUrl(i)" />
          </span>
        </b-carousel-item>
        <template slot="indicators" slot-scope="props">
          <span class="al image">
            <img :src="getImgUrl(props.i)" :title="props.i" />
          </span>
        </template>
      </b-carousel>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "HomePage",
  components: {
    Card,
  },
  data() {
    return {
      images: ["~assets/maderaMaisons/devise.jpg"],
    };
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}

.title-index {
  width: 100%;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
    font-family: 'Great Vibes', cursive;
  }
}
</style>
