export enum Category {
    Electronics = "Electronics",
    Appliances = "Appliances",
    KitchenWare = "KitchenWare",
}

export interface IFormInput {
    id?: number;
    title: string;
    category: Category|"";
    // prodDescription: string;
    price: number;
    // buyPrice: number;
    stock: number;
}

export const DummyData: IFormInput[] = [
    {
        id: 1101,
        title: "Iphone 16",
        category: Category.Electronics,
        // prodDescription: "New ultra pro max camera iphone 16 100x zoom",
        price: 100000,
        // buyPrice: 70000,
        stock: 7,
    },

    {
        id: 1102,
        title: "Iphone 15",
        category: Category.Electronics,
        // prodDescription: "Ultra pro max camera iphone 15 100x zoom",
        price: 80000,
        // buyPrice: 60000,
        stock: 1,
    },

    {
        id: 1103,
        title: "Best Lamp",
        category: Category.Appliances,
        // prodDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, asperiores.",
        price: 1000,
        // buyPrice: 700,
        stock: 20,
    },


    {
        id: 1104,
        title: "Spoons Set",
        category: Category.KitchenWare,
        // prodDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, asperiores.",
        price: 250,
        // buyPrice: 125,
        stock: 30,
    },
]