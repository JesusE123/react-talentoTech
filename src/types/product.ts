export type product = {
    id:number,
    name:string,
    price:string,
    image:string
    description:string
    category:string
}

export type productSlot = product & { quantity?: number };

// Define the shape of a successful response
export interface ApiResponseSuccess<T> {
  data: T;
  error: null;
}

// Define the shape of an error response
export interface ApiResponseError {
  data: null;
  error: Error;
}

// Union type for the possible return values
export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;
