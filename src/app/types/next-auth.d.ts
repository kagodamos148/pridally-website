import 'next-auth'

declare module 'next-auth'{
    interface user{
        _id?:string
    }
}