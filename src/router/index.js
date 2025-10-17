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
import edit_customer from "../views/edit_customer.vue";
import edit_product from "../views/edit_product.vue";
import edit_student from "../views/edit_student.vue";
import employee from "../views/Employee.vue";
import edit_employee from "../views/Edit_Employee.vue";
import add_employee from "../views/Add_Employee.vue";




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
  { path: "/edit_customer", name: "edit_customer", component: edit_customer},
  { path: "/edit_product", name: "edit_product", component: edit_product},
  { path: "/edit_student", name: "edit_student", component: edit_student},
  { path: "/employee", name: "employee", component: employee},
  { path: "/edit_employee", name: "edit_employee", component: edit_employee},
  { path: "/add_employee", name: "add_employee", component: add_employee},

 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
