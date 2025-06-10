export type product = {
    id:number,
    name:string,
    price:number,
    image:string
    description:string
}

export type productSlot = product & { quantity: number };
