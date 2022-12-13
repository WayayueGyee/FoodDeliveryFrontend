export const kreosoftApiUrl = 'https://food-delivery.kreosoft.ru/api/'

// Users
export const registerUrl = 'account/register'
export const loginUrl = 'account/login'
export const logoutUrl = 'account/login'
export const profileGetUrl = 'account/profile'
export const profileChangeUrl = 'account/profile'

// Dish
export const dishesUrl = 'dish'
export const dishUrl = 'dish/:id'
export const dishRatingGetUrl = 'dish/:id/rating/check'
export const dishRatingAddUrl = 'dish/:id/rating'

// Order
export const orderGetUrl = 'order/:id'
export const ordersUrl = 'order'
export const orderAddUrl = 'order'
export const orderConfirmUrl = 'order/:id/status'

// Basket
export const basketUrl = 'basket'
export const basketAddDishUrl = 'basket/dish/:dishId'
export const basketDeleteDishUrl = 'basket/dish/:dishId' // ?increase=false
