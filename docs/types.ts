// types.ts

interface User {
  id: string;
  name: string;
  email: string;
  address: Address;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  userId: string;
  products: Product[];
  total: number;
  date: Date;
}