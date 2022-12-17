import ChangeAmount from 'components/cart/ChangeAmount'
import { MinusIcon } from 'components/icons/MinusIcon'
import { PlusIcon } from 'components/icons/PlusIcon'
import { useState } from 'react'
import CartService from 'services/CartService'

export default function Counter({
  dishId,
  amount: startingAmount,
}: {
  dishId: string
  amount: number
}) {
  const [amount, setAmount] = useState(startingAmount)
  console.log('startingAmount: ', startingAmount)
  console.log('amount: ', amount)

  const handleAmountChange = (isIncr: boolean) => {
    if (isIncr) {
      return CartService.addToCart(dishId, true).then((res) => {
        console.log(res)
        if (res.status >= 200 && res.status <= 299) {
          console.log(123)
          setAmount(amount + 1)
        }
      })
    } else {
      CartService.deleteFromCart(dishId, true).then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          setAmount(amount - 1)
        }
      })
    }
  }

  return (
    <div className="inline-flex -space-x-px">
      <ChangeAmount className="rounded-l-md self-center">
        <button onClick={() => handleAmountChange(false)}>
          <MinusIcon className="h-5 w-5" />
        </button>
      </ChangeAmount>
      <ChangeAmount className="px-3">{amount}</ChangeAmount>
      <ChangeAmount className="rounded-r-md self-center">
        <button onClick={() => handleAmountChange(true)}>
          <PlusIcon className="h-5 w-5" />
        </button>
      </ChangeAmount>
    </div>
  )
}
