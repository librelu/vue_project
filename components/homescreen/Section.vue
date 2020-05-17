<template>
  <b-container class="section-container" fluid>
    <b-row>
      <h1>{{ sectionData.sectionTitle }}</h1>
    </b-row>
    <b-row class="sub-category-section">
      <div
        v-for="category in sectionData.subCategories"
        :key="category.id"
        class="sub-category"
      >
        <div
          class="col-12 sub-category-icon"
          :style="{ backgroundImage: 'url(' + category.iconURL + ')' }"
        ></div>
        <p class="category-title">{{ category.name }}</p>
      </div>
    </b-row>
    <b-row class="section">
      <b-col
        v-for="list in sectionData.listings"
        :key="list.id"
        class="xs-1 listing-card fluid"
      >
        <b-col>
          <b-row>
            <div
              class="thumbnails"
              :style="{ backgroundImage: 'url(' + list.thumbnail + ')' }"
            />
          </b-row>
          <b-row class="title">
            <b-col>
              <h4>{{ list.title }}</h4>
            </b-col>
          </b-row>
          <b-row class="price">
            <b-col>
              {{ list.price }}
            </b-col>
          </b-row>
          <b-row align-v="center">
            <b-col>
              <img
                class="heart-icon"
                src="https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png"
              />
              {{ list.likeCount }}
            </b-col>
          </b-row>
          <b-button
            class="commit-bottom col-12"
            :href="list.button.url"
            variant="primary"
          >
            {{ list.button.name }}
          </b-button>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.heart-icon {
  width: 50px;
  height: 50px;
}
.title h4,
.price {
  font-size: 1em;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title h4 {
  font-size: 1.2em;
}
.thumbnails {
  width: 100%;
  height: 10rem;
  overflow: hidden;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.section {
  display: flex;
  flex-flow: row;
  overflow: hidden;
}
.listing-card {
  margin: 0.5rem;
}
.section-container {
  margin: 1rem 0rem;
}
.sub-category-icon {
  margin: 0px 0.8rem;
  width: 80px;
  height: 80px;
  display: flex;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.category-title {
  text-align: center;
}
</style>

<script>
export default {
  props: {
    sectionData: {
      type: Object,
      require: true,
      default: () => {
        return {}
      }
    }
  }
}
</script>
