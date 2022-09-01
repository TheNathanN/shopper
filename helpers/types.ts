export type Categories =
  | "speakers"
  | "headphones"
  | "laptops"
  | "computers"
  | "midi-keyboards"
  | "cart";

export interface User {
  email: string;
  name: string;
  password: string;
}
