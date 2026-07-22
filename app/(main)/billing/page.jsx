// // import { useAuthContext } from '@/app/provider';
// "use client";
// import { useAuthContext } from '@/app/provider';
// import { Button } from '@/components/ui/button';
// import { PayPalButtons } from '@paypal/react-paypal-js';
// // import { PayPalButtons } from '@paypal/react-paypal-js';
// // import { Button } from '@/components/ui/button';
// // import { PayPalButtons } from '@paypal/react-paypal-js';
// import { CircleDollarSign } from 'lucide-react';
// import React from 'react';

// export const creditsPlans = [
//   { credits: 10, cost: 1 },
//   { credits: 50, cost: 5 },
//   { credits: 100, cost: 9 },
//   { credits: 200, cost: 15 }
// ];

// function Billing() {
//   const { user } = useAuthContext();

//   // Handler for 'Buy Now' button click
//   const handleBuyCredits = (credits, cost) => {
//     console.log(`Buying ${credits} credits for ${cost} USD`);
//     // Add your purchase logic here
//   };

//   return (
//     <div className="text-sm p-5 text-gray-500 max-w-2xl">
//   <div className="mt-5">
//     <h2 className="font-bold text-2xl">Buy More Credits</h2>

//     <div className="mt-5">
//       {creditsPlans.map((plan, index) => (
//         <div key={index} className="p-5 mt-3 border">
//           <h2 className="text-xl flex gap-2 items-center">
//             <CircleDollarSign />
//             <strong>{plan.cost}</strong>
//           </h2>
//           <div className="flex gap-2 items-center">
//             <h2 className="font-medium text-xl">{plan.credits} Credits</h2>
//             <Button className="flex-1" onClick={() => handleBuyCredits(plan.credits, plan.cost)}>Buy Now</Button>
//           </div>
//           <div className="mt-3">
//             <PayPalButtons style={{ layout: "horizontal" }} />
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
//   );
// }

// export default Billing;

"use client";
import React from "react";
import { useAuthContext } from "@/app/provider";
import { Button } from "@/components/ui/button";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CircleDollarSign } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export const creditsPlans = [
  { credits: 10, cost: 1 },
  { credits: 50, cost: 5 },
  { credits: 100, cost: 9 },
  { credits: 200, cost: 15 },
];

function Billing() {
  const { user ,setUser} = useAuthContext();

  // Handler for 'Buy Now' button click
  const handleBuyCredits = (credits, cost) => {
    console.log(`Buying ${credits} credits for ${cost} USD`);
    // Add your purchase logic here
  };
  const UpdateUserCredits=useMutation(api.users.UpdateUserCredits)
  const onPaymentSuccess=async (cost,credits)=>{
    const result = await UpdateUserCredits({
      uid:user?._id,
      credits:Number(user?.credits)+Number(credits)
    })
    console.log(result);
    setUser(prev=>({
      ...prev,
      credits:Number(user?.credits)+Number(credits)
    }))
    console.log('Credits added')
  }
  return (
    <div className="text-sm p-5 text-gray-500 max-w-2xl">
      <div className="mt-5">
        <h2 className="font-bold text-2xl">Buy More Credits</h2>

        {/* Show current credits */}
        <p className="mt-2 text-lg font-medium text-green-600">
          Remaining Credits: {user?.credits ?? 0}
        </p>

        <div className="mt-5">
          <PayPalScriptProvider
            options={{
              "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
              currency: "USD",
            }}
          >
            {creditsPlans.map((plan, index) => (
              <div key={index} className="p-5 mt-3 border rounded-xl">
                <h2 className="text-xl flex gap-2 items-center">
                  <CircleDollarSign />
                  <strong>${plan.cost}</strong>
                </h2>
                <div className="flex gap-2 items-center">
                  <h2 className="font-medium text-xl">{plan.credits} Credits</h2>
                  <Button
                    className="flex-1"
                    onClick={() => handleBuyCredits(plan.credits, plan.cost)}
                  >
                    Buy Now
                  </Button>
                </div>
                <div className="mt-3">
                  <PayPalButtons style={{ layout: "horizontal" }} 
                  onApprove={()=>onPaymentSuccess(plan?.cost,plan?.credits)}
                  onCancel={()=>console.log("Cancel")}
                  createOrder={(data,actions)=>{
                    return actions?.order?.create({
                      purchase_units:[
                        {
                          amount:{
                            value:plan.cost,
                            currency_code:'USD'
                          }
                        }
                      ]
                    })
                  }}/>
                </div>
              </div>
            ))}
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
}

export default Billing;
