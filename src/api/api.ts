// apiService.js
import type { ApiResponse, product, productSlot } from "../types/product";
import supabase from "../utils/supabase";

export const fetchProducts = async (): Promise<ApiResponse<productSlot[]>> => {
  try {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      return { data: null, error: new Error(error.message) };
    }

    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: new Error(err.message || "Unexpected error") };
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return { success: true, data, error: null };
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return { success: false, data: null, error };
  }
};

export const doCreateProduct = async (formData: FormData) => {
  try {
    // Primero, extraemos los campos (menos la imagen)
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;

    
    const { data: insertedData, error: insertError } = await supabase
      .from("products")
      .insert([
        { title, price, description, category, image: "" }
      ])
      .select()
      .single();  

    if (insertError) throw insertError;

    let imageUrl = "";

   
    if (formData.get("image") instanceof File) {
      const file = formData.get("image") as File;
      const filePath = `products/${Date.now()}-${file.name}`;

      const { data: imageData, error: imageError } = await supabase.storage
        .from("product-images")
        .upload(filePath, file);

      if (imageError) throw imageError;

     
      imageUrl = supabase.storage
        .from("product-images")
        .getPublicUrl(filePath)
        .data.publicUrl;

      
      const { error: updateError } = await supabase
        .from("products")
        .update({ image: imageUrl })
        .eq("id", insertedData.id);

      if (updateError) throw updateError;
    }

    return { success: true, data: { ...insertedData, image: imageUrl }, error: null };

  } catch (error) {
    console.error("Error creando producto:", error);
    return { success: false, data: null, error };
  }
};


export const doEditProduct = async (
  id: number,
  updatedProductData: product
): Promise<ApiResponse<product>> => {
  try {
    const { data, error } = await supabase
      .from("products")
      .update(updatedProductData)
      .eq("id", id)
      .select()
      .single(); 

    if (error) throw error;

    return { data, error: null };
  } catch (error) {
    console.error(`Error editing product with ID ${id}:`, error);
    return {
      data: null,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
};

