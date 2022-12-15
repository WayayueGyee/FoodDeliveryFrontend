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
export const reqDishUrl = (id: string) => `dish/${id}`
export const reqDishRatingGetUrl = (id: string) => `dish/${id}/rating/check`
export const reqDishRatingAddUrl = (id: string) => `dish/${id}/rating`

// Order
export const reqOrderGetUrl = (id: string) => `order/${id}`
export const reqOrdersUrl = 'order'
export const reqOrderAddUrl = 'order'
export const reqOrderConfirmUrl = (id: string) => `order/${id}/status`

// Basket
export const reqBasketUrl = 'basket'
export const reqBasketAddDishUrl = (dishId: string) => `basket/dish/${dishId}`
export const reqBasketDeleteDishUrl = (dishId: string) => `basket/dish/${dishId}` // ?increase=false
