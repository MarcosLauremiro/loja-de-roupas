import { createContext, useContext, useState} from 'react';
import { IAdmContext, IAdmProviderProps, INewProduct } from './@types';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { GlobalContext } from '../GlobalContext/GlobalContext';


export const AdmContext = createContext({} as IAdmContext)

export const AdmProvider = ({children}: IAdmProviderProps)=>{
    const token = localStorage.getItem('user@TOKEN')
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false)
    const {ProductsList, setProductsList} = useContext(GlobalContext)

    
    const editProduct=async (formData:INewProduct, idProduct:number) => {

        try {
            const {data} = await api.put(`/products/${idProduct}`, formData,{
                headers: {
                   Authorization: `Bearer ${token}`
                }
             })
             
             const updatedList = ProductsList.filter((element) => element.id !== data.id)

             setProductsList([...updatedList, data])

            toast.success('Atualização realizada com sucesso')

             ProductsList.map((product) => {
                if(product.id == idProduct){
                    return data
                }else{
                    return product
                }
             })
             
        } catch (error) {
            toast.error('Não foi possível atualizar o produto')

        }finally{
            setIsEditModalOpen(false)

        }
    }

    const addNewProduct =async (formData:INewProduct) => {
        try {
            const {data} = await api.post('/products', formData,{
                headers: {
                   Authorization: `Bearer ${token}`
                }
             } )
             toast.success('Produto adicionado com sucesso')

             setProductsList([...ProductsList, data])
    
        } catch (error) {
            toast.error('Não foi possível adicionar novo produto')
        }finally{
            setIsNewProductModalOpen(false)
        }
    }

    const deleteProduct =async (idProduct:number) => {
        try {
             await api.delete(`/products/${idProduct}`, {
                headers: {
                   Authorization: `Bearer ${token}`
                }
             })
             
             toast.success('Produto excluido com sucesso')
             setProductsList(ProductsList.filter((product) => {
                return product.id != idProduct
             }))


        } catch (error) {
            toast.error('Não foi possível excluir produto')
        }
    }


    return( 
        <AdmContext.Provider value={{editProduct, addNewProduct, deleteProduct, isEditModalOpen, setIsEditModalOpen, isNewProductModalOpen, setIsNewProductModalOpen }}>
            {children}
        </AdmContext.Provider>
    )

}