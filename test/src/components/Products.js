import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Products</h1>
          </div>
          <div class="flex flex-wrap -m-4">
  
  
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260" />
              </a>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">Mercury</h2>
                <div class="flex flex-wrap items-center mt-2">
                  <p class="flex-1">5.50 €</p>
                  <Link to='/carts' class="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Add to cart</Link>
                </div>
              </div>
            </div>
  
  
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/421x261" />
              </a>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">Venus</h2>
                <div class="flex flex-wrap items-center mt-2">
                  <p class="flex-1">8.15 €</p>
                  <Link to='/carts' class="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" href="cart.html">Add to cart</Link>
                </div>
              </div>
            </div>
  
  
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
              </a>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">Earth</h2>
                <div class="flex flex-wrap items-center mt-2">
                  <p class="flex-1">10.00 €</p>
                  <Link to='/carts' class="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                   >Add to cart</Link>
                </div>
              </div>
            </div>
  
  
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/422x262" />
              </a>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">Mars</h2>
                <div class="flex flex-wrap items-center mt-2">
                  <p class="flex-1">1.07 €</p>
                  <Link to='/carts' class="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Add to cart</Link>
                </div>
              </div>
            </div>
  
  
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/423x263" />
              </a>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">Jupiter</h2>
                <div class="flex flex-wrap items-center mt-2">
                  <p class="flex-1">3180.00 €</p>
                  <Link to='/carts' class="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Add to cart</Link>
                </div>
              </div>
            </div>
  
  
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/424x264" />
              </a>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">Saturn</h2>
                <div class="flex flex-wrap items-center mt-2">
                  <p class="flex-1">950.00 €</p>
                  <Link to='/carts' class="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Add to cart</Link>
                </div>
              </div>
            </div>
  
  
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/425x265" />
              </a>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">Uranus</h2>
                <div class="flex flex-wrap items-center mt-2">
                  <p class="flex-1">140.00 €</p>
                  <Link to='/carts' class="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Add to cart</Link>
                </div>
              </div>
            </div>
  
  
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/427x267" />
              </a>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <div class="flex flex-wrap items-center mt-2">
                  <p class="flex-1">12.00 €</p>
                  <Link to='/carts' class="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Add to cart</Link>
                </div>
              </div>
            </div>
  
            
          </div>
        </div>
      </section>
    )
}

export default Products