<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">รายการสินค้า</h2>
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card shadow-sm mb-4">
          <img :src="product.image" class="card-img-top" :alt="product.name">
          <div class="card-body text-center">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.price }} บาท</p>
            <button class="btn btn-primary">รายละเอียด</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowProduct",
  data() {
    return {
      products: [
        { id: 1, name: "เตาไฟฟ้า", price: 1200, image: "https://imarflex.co.th/wp-content/uploads/2020/10/IF-404-4-scaled.jpg" },
        { id: 2, name: "หม้อชาบู", price: 800, image: "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/67/88/8854336039867/8854336039867-20240507111721-.jpg" },
        { id: 3, name: "ชุดช้อนส้อม", price: 250, image: "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/27/88/8850633010127/8850633010127.jpg" },
        { id: 4, name: "เตาไฟฟ้า", price: 1200, image: "https://picsum.photos/400/200?4" },
        { id: 5, name: "หม้อชาบู", price: 800, image: "https://picsum.photos/400/200?5" },
        { id: 6, name: "ชุดช้อนส้อม", price: 250, image: "https://picsum.photos/400/200?6" }
      ]
    }
  }
}
</script>

<style lang="">
    
</style>