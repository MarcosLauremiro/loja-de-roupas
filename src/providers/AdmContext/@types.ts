
export interface IAdmProviderProps{
    children: React.ReactNode;
}

export interface INewProduct{
    name: string;
    price: number;
    description: string;
    image: string;
}

export interface IAdmContext{
    editProduct: (formData: INewProduct, idProduct: number) => Promise<void>;
    addNewProduct: (formData: INewProduct) => Promise<void>;
    deleteProduct: (idProduct: number) => Promise<void>;
    isEditModalOpen: boolean;
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isNewProductModalOpen: boolean;
    setIsNewProductModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}