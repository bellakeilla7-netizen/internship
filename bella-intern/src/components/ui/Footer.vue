<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10">
        <div class="flex flex-wrap justify-between gap-8 ">
            <div>
<h3 class="text-yellow font-bold text-lg mb-3">TEMBERURWANDA</h3>
<p class="text-sm text-green-200">Discover the beauty of the land of a thousand hills</p>
        </div>

<!-- Quick Link -->
 <div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">quick links</h3>
    <ul class="space y-2 text-sm">
        <li>
            <RouterLink to="/About" class="hover:text-yellow-300">Home</RouterLink>
            </li>
            <li>
            <RouterLink to="/Contact" class="hover:text-yellow-300">Contacts</RouterLink>
            </li>
            <li>
            <RouterLink to="/Service" class="hover:text-yellow-300">Service</RouterLink>
            </li>
            <li>
            <RouterLink to="/About" class="hover:text-yellow-300">About Us</RouterLink>
        </li>
    </ul>
 </div>
 <!-- Destinations -->
  <div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
    <ul class="space-y-2 text-sm">
        <li>
            <RouterLink to="/North" class="hover:text-yellow-300">Northern Province</RouterLink>
        </li>
        <li>
            <RouterLink to="/South" class="hover:text-yellow-300">Southern Province</RouterLink>
        </li>
        <li>
            <RouterLink to="/East" class="hover:text-yellow-300">Eastern Province</RouterLink>
        </li>
        <li>
            <RouterLink to="/West" class="hover:text-yellow-300"> WesternProvince</RouterLink>
        </li>
        <li>
            <RouterLink to="/Kigali" class="hover:text-yellow-300">Kigali city</RouterLink>
        </li>
    </ul>
  </div>

<!--  contact info-->
  <div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact</h3>
    <ul class="space-y-2 text-sm">
        <li>
            <RouterLink to="/" class="hover:text-green-300">bellakeilla7@gmail.com</RouterLink>
        </li>
        <li>
            <RouterLink to="/" class="hover:text-green-300">0798678161</RouterLink>
        </li>
<li>
            <RouterLink to="/" class="hover:text-green-300">KAGUGU RWANDA</RouterLink>
        </li>
       
    </ul>
  </div>
        </div>
        <!-- COPYRIGT -->
         <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-">
            <p class="text-center "> ©2025 TEMBERA U RWANDA. All rights reserved</p>

         </div>
    </footer>
</template>