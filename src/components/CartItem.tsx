import { Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'
type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
    </Stack>
  )
}
