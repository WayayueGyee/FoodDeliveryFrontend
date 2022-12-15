import { PageInfoModel } from './PageInfo'

export type DishCategory = 'Wok' | 'Pizza' | 'Soup' | 'Dessert' | 'Drink'

export interface DishDto {
    id: string
    name: string
    description?: string | undefined | null
    price: number
    image?: string | undefined | null
    vegetarian: boolean
    rating?: number | undefined | null
    category: DishCategory
}

export interface DishPagedList {
    dishes: DishDto[] | null
    pagination: PageInfoModel
}

export type DishSorting =
    | 'NameAsc'
    | 'NameDesc'
    | 'PriceAsc'
    | 'PriceDesc'
    | 'RatingAsc'
    | 'RatingDesc'
