import { createRouter, createWebHistory } from "vue-router";

import ShowProduct from "../views/ShowProduct.vue";
import About from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import Customer from "../views/Customer.vue";
import Add_customer from "../views/Add_customer.vue";
import Product from "../views/Product.vue";
import Add_product from "../views/Add_product.vue";
import Student from "../views/Student.vue";
import Add_student from "../views/Add_student.vue";


const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/showproduct", name: "ShowProduct", component: ShowProduct },
  { path: "/about", name: "about", component: About},
  { path: "/customer", name: "customer", component: Customer},
  { path: "/add_customer", name: "add_customer", component: Add_customer},
  { path: "/product", name: "product", component: Product},
  { path: "/add_product", name: "add_product", component: Add_product},
  { path: "/student", name: "student", component: Student},
  { path: "/add_student", name: "add_student", component: Add_student},
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
