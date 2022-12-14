const kreosoftApiUrl = 'https://food-delivery.kreosoft.ru/api/'

export const apiUrl = kreosoftApiUrl

// Users
export const reqRegisterUrl = 'account/register'
export const reqLoginUrl = 'account/login'
export const reqLogoutUrl = 'account/login'
export const reqProfileGetUrl = 'account/profile'
export const reqProfileChangeUrl = 'account/profile'

// Dish
export const reqDishesUrl = 'dish'
export const reqDishUrl = 'dish/:id'
export const reqDishRatingGetUrl = 'dish/:id/rating/check'
export const reqDishRatingAddUrl = 'dish/:id/rating'

// Order
export const reqOrderGetUrl = 'order/:id'
export const reqOrdersUrl = 'order'
export const reqOrderAddUrl = 'order'
export const reqOrderConfirmUrl = 'order/:id/status'

// Basket
export const reqBasketUrl = 'basket'
export const reqBasketAddDishUrl = 'basket/dish/:dishId'
export const reqBasketDeleteDishUrl = 'basket/dish/:dishId' // ?increase=false
