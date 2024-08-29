import { IProduct } from "@/model/product";

const API_KEY = "your_api_key_here";
const API_VERSION = 1;
const BASE_URL = "http://tyresaddict.ru/api/tyres/...";

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const res = await fetch(`${BASE_URL}/vendor_models?api_version=${API_VERSION}&api_key=${API_KEY}`);
    
    const data = await res.json();
    
    if (!data.result) {
      throw new Error(data.message || "Failed to fetch products");
    }
    
    return data.models;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
