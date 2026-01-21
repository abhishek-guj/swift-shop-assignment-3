export enum Category {
    Electronics = "Electronics",
    Appliances = "Appliances",
    KitchenWare = "KitchenWare",
}

export interface IFormInput {
    id?: number;
    prodName: string;
    prodCategory: Category|"";
    prodDescription: string;
    price: number;
    buyPrice: number;
    stock: number;
}

export const DummyData: IFormInput[] = [
    {
        id: 1101,
        prodName: "Iphone 16",
        prodCategory: Category.Electronics,
        prodDescription: "New ultra pro max camera iphone 16 100x zoom",
        price: 100000,
        buyPrice: 70000,
        stock: 7,
    },

    {
        id: 1102,
        prodName: "Iphone 15",
        prodCategory: Category.Electronics,
        prodDescription: "Ultra pro max camera iphone 15 100x zoom",
        price: 80000,
        buyPrice: 60000,
        stock: 1,
    },

    {
        id: 1103,
        prodName: "Best Lamp",
        prodCategory: Category.Appliances,
        prodDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, asperiores.",
        price: 1000,
        buyPrice: 700,
        stock: 20,
    },


    {
        id: 1104,
        prodName: "Spoons Set",
        prodCategory: Category.KitchenWare,
        prodDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, asperiores.",
        price: 250,
        buyPrice: 125,
        stock: 30,
    },
]