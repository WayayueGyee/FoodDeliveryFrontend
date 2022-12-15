export interface CartItemDto {
    id: string
    name: string
    price: number
    totalPrice: number
    amount: number
    image?: string | undefined | null
}
