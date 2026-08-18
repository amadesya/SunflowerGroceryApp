export interface Recipe {
  id: string;
  name: string;
  price: number;
  image: string;
  calories: number;
  proteins: number;
  fats: number;
  carbs: number;
}

export const recipes: Recipe[] = [
  {
    id: "r1",
    name: "Фруктовый смузи-боул",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80",
    calories: 210,
    proteins: 4.5,
    fats: 2.1,
    carbs: 45.0,
  },
  {
    id: "r2",
    name: "Тропический салат с манго",
    price: 380,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    calories: 165,
    proteins: 2.0,
    fats: 0.8,
    carbs: 38.5,
  },
  {
    id: "r3",
    name: "Французский круассан с миндалем",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    calories: 420,
    proteins: 8.2,
    fats: 22.0,
    carbs: 48.0,
  },
  {
    id: "r4",
    name: "Яблочный штрудель с корицей",
    price: 290,
    image:
      "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
    calories: 310,
    proteins: 3.8,
    fats: 11.5,
    carbs: 52.0,
  },
  {
    id: "r5",
    name: "Овощной боул с авокадо и киноа",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    calories: 360,
    proteins: 11.0,
    fats: 16.5,
    carbs: 42.0,
  },
  {
    id: "r6",
    name: "Овощи гриль с прованскими травами",
    price: 340,
    image:
      "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=600&q=80",
    calories: 140,
    proteins: 3.5,
    fats: 5.0,
    carbs: 18.0,
  },
];
