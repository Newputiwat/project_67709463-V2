<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="showproduct">Show Product</a>
          </li>
          <!-- Sign In Dropdown -->
          <li class="nav-item dropdown" @click="toggleDropdown('signIn')">
            <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">
              Sign In
            </a>
            <ul class="dropdown-menu" :class="{'show': dropdowns.signIn}">
              <li><a class="dropdown-item" href="#">Log In</a></li>
              <li><a class="dropdown-item" href="#">Log Out</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/add_customer">Sign In</a></li>
            </ul>
          </li>
          
          <!-- Customer Dropdown -->
          <li class="nav-item dropdown" @click="toggleDropdown('customer')">
            <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">
              Customer
            </a>
            <ul class="dropdown-menu" :class="{'show': dropdowns.customer}">
              <li><a class="dropdown-item" href="/customer">Customer</a></li>
              <li><a class="dropdown-item" href="/edit_customer">edit_customer</a></li>
            </ul>
          </li>
                    <li class="nav-item dropdown" @click="toggleDropdown('product')">
            <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">
              Product
            </a>
            <ul class="dropdown-menu" :class="{'show': dropdowns.product}">
              <li><a class="dropdown-item" href="/product">Product</a></li>
              <li><a class="dropdown-item" href="/edit_product">edit_product</a></li>
            </ul>
          </li>
                              <li class="nav-item dropdown" @click="toggleDropdown('student')">
            <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">
              Student
            </a>
            <ul class="dropdown-menu" :class="{'show': dropdowns.student}">
              <li><a class="dropdown-item" href="/student">student</a></li>
              <li><a class="dropdown-item" href="/edit_student">edit_student</a></li>
            </ul>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>

        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      // Track the state of each dropdown (open or closed)
      dropdowns: {
        signIn: false,
        customer: false,
        product: false,
        student: false
      }
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      // Close all dropdowns first
      this.dropdowns.signIn = false;
      this.dropdowns.customer = false;
      this.dropdowns.product = false;
      this.dropdowns.student = false;

      // Toggle the clicked dropdown
      this.dropdowns[dropdown] = !this.dropdowns[dropdown];
    }
  }
}
</script>
