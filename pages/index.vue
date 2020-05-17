<template>
  <b-container fluid>
    <b-row id="banners">
      <SlideShow :sliders="Sliders" />
    </b-row>
    <Section :section-data="Auction" />
    <Section :section-data="Shopping" />
  </b-container>
</template>

<script>
import SlideShow from '@/components/SlideShow.vue'
import Section from '@/components/homescreen/Section.vue'

export default {
  components: {
    SlideShow,
    Section
  },
  asyncData() {
    return {
      Sliders: [
        {
          id: `1-slide`,
          imgSrc: `https://image.shutterstock.com/z/stock-photo-mountain-river-hd-1335429641.jpg`
        },
        {
          id: `2-slide`,
          imgSrc: `https://www.weathervaneplayhouse.com/sites/default/files/assets/news/IMG_0101.jpg`
        },
        {
          id: `3-slide`,
          imgSrc: `https://www.weathervaneplayhouse.com/sites/default/files/assets/news/IMG_0101.jpg`
        }
      ],
      Auction: {
        sectionTitle: 'Auction',
        subCategories: [
          {
            id: 'a-cat-1',
            name: 'Woman Fashion',
            categoryLink: '/womanFashion',
            iconURL: `https://cdn2.iconfinder.com/data/icons/glyphie-1/40/dress_costume_fashion_cloth_clothing-512.png`
          },
          {
            id: 'a-cat-2',
            name: 'Cars',
            categoryLink: '/womanFashion',
            iconURL: `https://cdn0.iconfinder.com/data/icons/city-space-1/512/cars-512.png`
          },
          {
            id: 'a-cat-3',
            name: 'electronic',
            categoryLink: '/electronic',
            iconURL: `https://cdn3.iconfinder.com/data/icons/graphic-design-tools-12/24/_electronic_drawing_tool-512.png`
          }
        ],
        listings: [
          {
            id: 'list-1',
            thumbnail: `https://www.macworld.co.uk/cmsdata/reviews/3698120/apple-previews-macos-catalina-screen-06032019_thumb800.jpg`,
            title: 'apple mac pro',
            price: 'HK$400',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 100,
            button: {
              url: '',
              name: 'Bid'
            }
          },
          {
            id: 'list-2',
            thumbnail: `http://www.canadianautoreview.ca/images/car_photos/2021-kia-seltos-sx-turbo/normal/seltos-fs1.jpg`,
            title: 'Benz',
            price: 'HK$7,300,000',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 6,
            button: {
              url: '',
              name: 'Bid'
            }
          },
          {
            id: 'list-3',
            thumbnail: `https://images.lvrcdn.com/Big71I/H0L/030_7441dce2-49e1-43ac-bbb3-c9427cf4a1e1.JPG`,
            title: '涂层“GG SUPREME OPHIDIA”斜挎包',
            price: 'HK$401231230123',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 20000,
            button: {
              url: '',
              name: 'Bid'
            }
          },
          {
            id: 'list-4',
            thumbnail: `https://tshop.r10s.com/c31/7c2/faf8/b2cc/b1c1/0d02/84da/11dde889a554ab3a295840.jpg`,
            title: 'Table',
            price: 'HK$423400',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 20,
            button: {
              url: '',
              name: 'Bid'
            }
          },
          {
            id: 'list-5',
            thumbnail: `https://d.ecimg.tw/items/DCAIFNA9009OZ2P/000001_1545961827.jpg`,
            title: 'Marshall Acton II Bluetooth 經典黑 藍牙喇叭',
            price: 'HK$45600',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 399,
            button: {
              url: '',
              name: 'Bid'
            }
          },
          {
            id: 'list-6',
            thumbnail: `https://www.tw.cartier.com/content/dam/rcq/car/11/15/16/6/1115166.png.scale.314.high.panth%C3%A8re-de-cartier%E7%BE%8E%E6%B4%B2%E8%B1%B9%E6%89%8B%E9%90%B2-%E9%BB%83k%E9%87%91.jpg`,
            title: 'PANTHÈRE DE CARTIER美洲豹手鐲',
            price: 'HK$43300',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 2,
            button: {
              url: '',
              name: 'Bid'
            }
          }
        ]
      },
      Shopping: {
        sectionTitle: 'Shopping',
        subCategories: [
          {
            id: 'a-cat-1',
            name: 'Woman Fashion',
            categoryLink: '/womanFashion',
            iconURL: `https://cdn2.iconfinder.com/data/icons/glyphie-1/40/dress_costume_fashion_cloth_clothing-512.png`
          },
          {
            id: 'a-cat-2',
            name: 'Cars',
            categoryLink: '/womanFashion',
            iconURL: `https://cdn0.iconfinder.com/data/icons/city-space-1/512/cars-512.png`
          },
          {
            id: 'a-cat-3',
            name: 'electronic',
            categoryLink: '/electronic',
            iconURL: `https://cdn3.iconfinder.com/data/icons/graphic-design-tools-12/24/_electronic_drawing_tool-512.png`
          }
        ],
        listings: [
          {
            id: 'list-1',
            thumbnail: `https://www.macworld.co.uk/cmsdata/reviews/3698120/apple-previews-macos-catalina-screen-06032019_thumb800.jpg`,
            title: 'apple mac pro',
            price: 'HK$400',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 100,
            button: {
              url: '',
              name: 'Add to Cart'
            }
          },
          {
            id: 'list-2',
            thumbnail: `http://www.canadianautoreview.ca/images/car_photos/2021-kia-seltos-sx-turbo/normal/seltos-fs1.jpg`,
            title: 'Benz',
            price: 'HK$7,300,000',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 6,
            button: {
              url: '',
              name: 'Add to Cart'
            }
          },
          {
            id: 'list-3',
            thumbnail: `https://images.lvrcdn.com/Big71I/H0L/030_7441dce2-49e1-43ac-bbb3-c9427cf4a1e1.JPG`,
            title: '涂层“GG SUPREME OPHIDIA”斜挎包',
            price: 'HK$401231230123',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 20000,
            button: {
              url: '',
              name: 'Add to Cart'
            }
          },
          {
            id: 'list-4',
            thumbnail: `https://tshop.r10s.com/c31/7c2/faf8/b2cc/b1c1/0d02/84da/11dde889a554ab3a295840.jpg`,
            title: 'Table',
            price: 'HK$423400',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 20,
            button: {
              url: '',
              name: 'Add to Cart'
            }
          },
          {
            id: 'list-5',
            thumbnail: `https://d.ecimg.tw/items/DCAIFNA9009OZ2P/000001_1545961827.jpg`,
            title: 'Marshall Acton II Bluetooth 經典黑 藍牙喇叭',
            price: 'HK$45600',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 399,
            button: {
              url: '',
              name: 'Add to Cart'
            }
          },
          {
            id: 'list-6',
            thumbnail: `https://www.tw.cartier.com/content/dam/rcq/car/11/15/16/6/1115166.png.scale.314.high.panth%C3%A8re-de-cartier%E7%BE%8E%E6%B4%B2%E8%B1%B9%E6%89%8B%E9%90%B2-%E9%BB%83k%E9%87%91.jpg`,
            title: 'PANTHÈRE DE CARTIER美洲豹手鐲',
            price: 'HK$43300',
            badges: [
              `https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-081_new_badge-512.png`,
              `https://cdn3.iconfinder.com/data/icons/game-icon-set-rounded/512/medal-512.png`
            ],
            likeCount: 2,
            button: {
              url: '',
              name: 'Add to Cart'
            }
          }
        ]
      }
    }
  }
}
</script>

<style>
.container > div > * {
  border: 1px solid black;
}
</style>
