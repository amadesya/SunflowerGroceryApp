export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "groc-001",
    name: "Молоко пастеризованное 3.2%, 1 л",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80",
  },
  {
    id: "groc-002",
    name: "Хлеб цельнозерновой, 400 г",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
  },
  {
    id: "groc-003",
    name: "Яйца куриные С0, 10 шт",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&q=80",
  },
  {
    id: "groc-004",
    name: "Сыр Гауда 45%, 200 г",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&q=80",
  },
  {
    id: "groc-005",
    name: "Бананы, 1 кг",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&q=80",
  },
  {
    id: "groc-006",
    name: "Томаты черри, 250 г",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&q=80",
  },
  {
    id: "groc-007",
    name: "Масло оливковое Extra Virgin, 500 мл",
    price: 690,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80",
  },
  {
    id: "groc-008",
    name: "Филе куриной грудки охлажденное, 800 г",
    price: 379,
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&q=80",
  },
];
