export type Categories =
  | "speakers"
  | "headphones"
  | "laptops"
  | "computers"
  | "midi-keyboards";

export interface User {
  email: string;
  name: string;
  password: string;
}
