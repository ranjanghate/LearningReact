import React from 'react'

// function FrInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }

// We know that every functional components recieves props as its parameter, but when the component is passed as parameter
// to the create Ref Method it recieves ref attribute as its second parameter.

const FrInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
})

export default FrInput
