<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
    <img src="../../assets/images/logo.jpeg"alt="logo" class="h-10">
    
    
    <ul class="flex gap-8 text-sm font-medium">
        <li><a href="/" class="hover:text-yellow-300">Home</a></li>
        <li><a href="/About" class="hover:text-yellow-300">About </a></li>
        <li><a href="/Service" class="hover:text-yellow-300">Services</a></li>

        <li class="relative group"><a href="#" class="hover:text-yellow-300">Gallery<span>⏑</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover: opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
           <li ><a href="/Photo" class="block px-4 py-2 hover:bg-green-200 text-green-900">Photos</a></li>
           <li ><a href="/Video" class="block px-4 py-2 hover:bg-green-200 text-green-900">Videos</a></li>
           </ul>
        </li>
        <li class="relative group"><a href="#" class="hover:text-yellow-300">Destination<span>⏑</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover: opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
           <li ><a href="/North" class="block px-4 py-2 hover:bg-green-200 text-green-900">Northern Province</a></li>
           <li ><a href="/South" class="block px-4 py-2 hover:bg-green-200 text-green-900">Southern Province</a></li>
           <li ><a href="/West" class="block px-4 py-2 hover:bg-green-200 text-green-900">Western Province</a></li>
           <li ><a href="/East" class="block px-4 py-2 hover:bg-green-200 text-green-900">Eastern Province</a></li>
           <li ><a href="/Kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">Kigali City</a></li>
           </ul>
           </li>
        <li><a href="/Contact" class="hover:text-yellow-300">Contact</a></li>
    </ul>
  </nav>
</template>