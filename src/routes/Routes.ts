// Users
export const registerUrl = 'register'
export const loginUrl = 'login'
export const logoutUrl = 'logout'
export const profileGetUrl = 'profile'
export const profileChangeUrl = 'profile'

// Dish
export const dishesUrl = 'items'
export const dishUrl = 'item/:id'
export const dishRatingGetUrl = 'dish/:id/rating/check'
export const dishRatingAddUrl = 'dish/:id/rating'

// Order
export const orderGetUrl = 'order/:id'
export const ordersUrl = 'orders'
export const orderAddUrl = 'order'
export const orderConfirmUrl = 'order/:id/status'

// Cart (basket)
export const cartUrl = 'cart'
export const cartAddDishUrl = 'cart/dish/:dishId'
export const cartDeleteDishUrl = 'cart/dish/:dishId' // ?increase=false
