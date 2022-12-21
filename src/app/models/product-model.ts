export class ProductModel {
  id: number = 0;
  title: string = "";
  description: string = "";
  price: number = 0;
  discountPercentage: number = 0;
  stock: number = 0;
  rating?: number | undefined = 0;
  brand?: string | undefined = "";
  category?: string | undefined = "";
  thumbnail?: string | undefined = "";
  images?: string[] | undefined = [];
}
