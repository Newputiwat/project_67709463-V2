import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/showproduct',
    name: 'showproduct',
    component: () => import('../views/ShowProduct.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import('../views/Customer.vue')
  },
  {
    path: '/add_customer',
    name: 'add_customer',
    component: () => import('../views/Add_customer.vue')
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('../views/Student.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/Addproduct',
    name: 'Addproduct',
    component: () => import('../views/Add_product.vue')
  },
  {
    path: '/customer_edit',
    name: 'customer_edit',
    component: () => import('../views/edit_customer.vue')
  },
   {
    path: '/product_edit',
    name: 'product_edit',
    component: () => import('../views/edit_product.vue')
  },
  {
    path: '/employees',
    name: 'employees',
    component: () => import('../views/Employee.vue')
  },
   {
    path: '/login_customer',
    name: 'customerLogin',
    component: () => import('../views/Login.vue')
  },
    {
    path: '/login_admin',
    name: 'login_admin',
    component: () => import('../views/Login_Admin.vue')
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// 🧠 Navigation Guard — ตรวจสอบการเข้าสู่ระบบ
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("customerLogin") === "true";

  // ถ้าหน้านั้นต้องล็อกอินก่อน แต่ยังไม่ได้ล็อกอิน
  if (to.meta.requiresAuth && !isLoggedIn) {
    alert("⚠ กรุณาเข้าสู่ระบบก่อนใช้งานหน้านี้");
    next("/login_customer");
  }
  // ถ้าเข้าสู่ระบบแล้วแต่พยายามกลับไปหน้า login อีก → ส่งกลับหน้าแรก
  else if (to.path === "/login" && isLoggedIn) {
    next("/");
  } 
  // อื่น ๆ ไปต่อได้ตามปกติ
  else {
    next();
  }
});

export default router;

