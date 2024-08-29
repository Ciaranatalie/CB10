import { IProduct } from "@/model/product";
import { tyresData } from "@/app/data/tyres";

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    return tyresData;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
