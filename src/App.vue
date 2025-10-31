<template>
  <div>
    <nav class="navbar navbar-expand-lg" style="background-color: #86bfe7ff;">
      <div class="container">
        <router-link class="navbar-brand text-white" to="/">Navbar</router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <template v-if="isLoggedIn">
              <!-- admin menu -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Product</a>
                <ul class="dropdown-menu">
                  <li><router-link class="dropdown-item" to="/product">Product</router-link></li>
                  <li><router-link class="dropdown-item" to="/product_edit">Product CRUD</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/employees">Employee</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link text-danger" href="#" @click="logout">Logout</a>
              </li>
            </template>

            <template v-else-if="userRole === 'admin'">
              <!-- customer menu -->
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/showproduct">Show Product</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Customer</a>
                <ul class="dropdown-menu">
                  <li><router-link class="dropdown-item" to="/customer">Customer</router-link></li>
                  <li><router-link class="dropdown-item" to="/customer_edit">Customer Edit</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link text-danger" href="#" @click="logout">Logout</a>
              </li>
            </template>

            <template v-else>
              <!-- guest menu -->
              <li class="nav-item">
                <router-link class="nav-link active" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/showproduct">Show Product</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Customer</a>
                <ul class="dropdown-menu">
                  <li><router-link class="dropdown-item" to="/customer">Customer</router-link></li>
                  <li><router-link class="dropdown-item" to="/customer_edit">Customer Edit</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Login</a>
                <ul class="dropdown-menu">
                  <li><router-link class="dropdown-item" to="/login_customer">Login (User)</router-link></li>
                  <li><router-link class="dropdown-item" to="/login_admin">Login (Admin)</router-link></li>
                  <li><router-link class="dropdown-item" to="/add_customer">Register</router-link></li>
                </ul>
              </li>
            </template>
          </ul>

          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    // ตรวจสอบสถานะเมื่อโหลดหน้า
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      this.isLoggedIn = localStorage.getItem("customerLogin") === "true";
    },
    logout() {
      if (confirm("ต้องการออกจากระบบหรือไม่?")) {
        // เคลียร์ข้อมูลทั้งหมดที่เกี่ยวข้องกับการล็อกอิน
        localStorage.removeItem("customerLogin");
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        this.isLoggedIn = false;

        // กลับไปหน้าเมนูหลัก
        this.$router.push("/");
      }
    },
  },
  watch: {
    // เมื่อเปลี่ยนเส้นทาง ให้ตรวจสอบสถานะการล็อกอินใหม่
    $route() {
      this.checkLogin();
    },
  },
};
</script>
<style scoped>
.navbar {
  background-color: #86bfe7ff !important;
}
.nav-link {
  color: white !important;
  font-weight: 500;
}
.nav-link:hover {
  text-decoration: underline;
}
</style>
