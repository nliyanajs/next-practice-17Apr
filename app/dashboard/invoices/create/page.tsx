import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
  console.log('Customers data:', customers); // Add this line

 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}

//test

// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import { fetchCustomers } from '@/app/lib/data';

// export default async function Page() {
//   const customers = await fetchCustomers();

//   return (
//     <main>
//       <Breadcrumbs
//         breadcrumbs={[
//           // ... breadcrumb data
//         ]}
//       />
//       <form>
//         {/* Form elements go here */}
//         <div>
//           <label htmlFor="customerId">Customer:</label>
//           <select id="customerId" name="customerId">
//             {customers.map((customer) => (
//               <option key={customer.id} value={customer.id}>
//                 {customer.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="amount">Amount:</label>
//           <input type="number" id="amount" name="amount" />
//         </div>
//         {/* Add more form fields (input, select, textarea, etc.) */}
//         <button type="submit">Create Invoice</button>
//         <button type="button">Cancel</button>
//       </form>
//     </main>
//   );
// }