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

  const handleAmountChange = (isIncr: boolean) => {
    if (isIncr) {
      return CartService.addToCart(dishId).then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          setAmount(amount + 1)
        }
      })
    } else {
      CartService.deleteFromCart(dishId).then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          setAmount(amount - 1)
        }
      })
    }
  }

  return (
    <div className="inline-flex -space-x-px">
      <ChangeAmount className="rounded-l-md self-center">
        <button onClick={() => handleAmountChange(true)}>
          <MinusIcon className="h-5 w-5" />
        </button>
      </ChangeAmount>
      <ChangeAmount className="px-3">{startingAmount}</ChangeAmount>
      <ChangeAmount className="rounded-r-md self-center">
        <button onClick={() => handleAmountChange(false)}>
          <PlusIcon className="h-5 w-5" />
        </button>
      </ChangeAmount>
    </div>
  )
}
