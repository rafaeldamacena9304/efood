import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteClass } from '../models/RestauranteClass'


interface PurchasePayload { 
    products: [{
        id: number
        price: number
    }]
    delivery:{
        receiver:string
        adress: {
            description: string
            city: string
            zipCode: string
            number:number
            complement:string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}


export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getListaRestaurantes: builder.query<RestauranteClass[], void>({
            query: () => 'restaurantes'
        }),
        getRestaurante: builder.query({
            query: (id) => `restaurantes/${id}`
        }),
        purchase: builder.mutation<any, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { useGetListaRestaurantesQuery, useGetRestauranteQuery, usePurchaseMutation } = api