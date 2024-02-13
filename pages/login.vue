<template>
    <div>
      <h1 class="text-2xl text-center">Login</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    // layout: 'no-nav'
    head(){
        return {            
           title: 'Login Page',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'test description on component'
                }
            ]
        }
    }
  }
  </script>
  