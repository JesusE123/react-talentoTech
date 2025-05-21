export type product = {
    id:number,
    title:string,
    price:number,
    category:string
    image:string
    description:string
}

export type productSlot = product & { quantity: number };
