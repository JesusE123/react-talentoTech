export type product = {
    id:number,
    title:string,
    price:string,
    image:FileList | string;
    description:string
    category:string
}

export type productSlot = product & { quantity?: number };

// Define the shape of a successful response
export interface ApiResponseSuccess<T> {
  data: T;
  error: string | null;
}

// Define the shape of an error response
export interface ApiResponseError {
  data: null;
  error: Error;
}

// Union type for the possible return values
export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;
