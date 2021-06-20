import React from 'react'
import { Link } from 'react-router-dom'
const Cart = () => {
    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Cart</h1>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th
                    class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Item</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-right">Unit Price incl. VAT</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-right">VAT</th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
  
  
                <tr>
                  <td class="px-4 py-3">Mercury</td>
                  <td class="px-4 py-3">
                      <input name="quantity" type="number" class="w-12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-right outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" value="5" />
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> 
                        </svg> 
                        </td>
                  <td class="px-4 py-3 text-right">5.50 €</td>
                  <td class="px-4 py-3 text-right">10%</td>
                  <td class="px-4 py-3 text-lg text-gray-900 text-right">27.50 €</td>
                </tr>
  
  
                <tr>
                  <td class="border-t-2 border-gray-200 px-4 py-3">Earth</td>
                  <td class="border-t-2 border-gray-200 px-4 py-3"><input name="quantity" type="number" class="w-12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-right outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" value="1" /><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg></td>
                  <td class="border-t-2 border-gray-200 px-4 py-3 text-right">10.00 €</td>
                  <td class="border-t-2 border-gray-200 px-4 py-3 text-right">0%</td>
                  <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-right">10.00 €</td>
                </tr>
                <tr>
                  <td class="border-t-2 border-gray-200 px-4 py-3">Mars</td>
                  <td class="border-t-2 border-gray-200 px-4 py-3"><input name="quantity" type="number" class="w-12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-right outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" value="3"/><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg></td>
                  <td class="border-t-2 border-gray-200 px-4 py-3 text-right">1.07 €</td>
                  <td class="border-t-2 border-gray-200 px-4 py-3 text-right">10%</td>
                  <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-right">3.21 €</td>
                </tr>
                <tr>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Neptune</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3"><input name="quantity" type="number" class="w-12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-right outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" value="2" /><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg></td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-right">12.00 €</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-right">20%</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-right">24.00 €</td>
                </tr>
  
                
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4" class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-right">Total excl. VAT</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-right">59.74 €</td>
                </tr>
                <tr>
                  <td colspan="4" class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-right">VAT 10%</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-right">2.79 €</td>
                </tr>
                <tr>
                  <td colspan="4" class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-right">VAT 20%</td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-right">2.18 €</td>
                </tr>
                <tr>
                  <th colspan="4" class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-right">Total</th>
                  <th class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-right">64.71 €</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <Link to='/products' class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd" />
              </svg>
              Back
            </Link>
            <Link to='/order'
              class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" >Send order</Link>
          </div>
        </div>
      </section>
    )
}

export default Cart