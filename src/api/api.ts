// apiService.js
import axios from "axios"
import type { ApiResponse, product, productSlot } from "../types/product";
const API_BASE_URL = 'https://68481b87ec44b9f3493fa61e.mockapi.io/tech/v1';

export const fetchProducts = async (): Promise<ApiResponse<productSlot[]>> => {
  try {
    const res = await fetch(`${API_BASE_URL}/Products`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return { data, error: null }; // Retorna los datos y un error nulo
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return { data: null, error: error instanceof Error ? error : new Error(String(error)) }; // Retorna los datos nulos y el error
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const res = await fetch(`${API_BASE_URL}/Products/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json(); // La respuesta DELETE puede tener datos o ser vacía
    return { success: true, data, error: null };
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return { success: false, data: null, error };
  }
};

export const doCreateProduct = (data: productSlot) => {
  if (data) {
    axios.post(`${API_BASE_URL}/Products`, data).
      then(res => console.log(res.data)).
      catch(err => console.log(err))
  }
}

export const doEditProduct = async (id: number, updatedProductData: product): Promise<ApiResponse<product>> => {
  try {
    const res = await fetch(`${API_BASE_URL}/Products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProductData),
    });

    if (!res.ok) {

      const errorText = await res.text();
      throw new Error(`HTTP error! Status: ${res.status}, Message: ${errorText || 'Unknown error'}`);
    }


    const responseData: product = await res.json();
    return { data: responseData, error: null };
  } catch (error) {
    console.error(`Error editing product with ID ${id}:`, error);
    return { data: null, error: error instanceof Error ? error : new Error(String(error)) };
  }
};

