import { ContainerList, BoxOne, BoxTwo, CardProduct } from './style';
import iconAdd from '../../assets/iconAddNewProduct.svg'
import { useContext, useState } from 'react';
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext';
import  iconEdit  from '../../assets/iconEditProduct.svg'
import  deleteIcon  from '../../assets/iconDeleteItem.svg'
import { AdmContext } from '../../providers/AdmContext/AdmContext';
import { AddProduct } from '../AddProduct';
import { EditProduct } from '../EditProduct';
import { IProduct } from '../../providers/GlobalContext/@types';

export const ListProduct = () => {

    const { ProductsList } = useContext(GlobalContext)
    const {setIsNewProductModalOpen,isNewProductModalOpen, isEditModalOpen, setIsEditModalOpen, deleteProduct} = useContext(AdmContext)

    const handleAddProduct = ()=> {
        setIsNewProductModalOpen(true)
    }
    const handleEditProduct = () => {
        setIsEditModalOpen(true)
    }

    const [ProductEdit, setProductEdit] = useState<IProduct | null>(null) 

    return (<>
        <section>
            <ContainerList>
                {isNewProductModalOpen ? <AddProduct></AddProduct> : null}
                {isEditModalOpen ? <EditProduct product={ProductEdit} ></EditProduct> : null}
                <BoxOne>
                    <div className='InternalBoxOne'>
                        <h2> PRODUTOS  </h2>
                        <p>  Gerencie seus produtos </p>
                    </div>
                    <div className='InternalBoxTwo'>
                        <button onClick={handleAddProduct} > <img src={iconAdd} alt='adicionar produto' /> NOVO PRODUTO </button>
                    </div>
                </BoxOne>
                <BoxTwo>
                    
                        {ProductsList.map(element => {
                            return (
                                
                                    <CardProduct key={element.id}>
                                        <div className='BoxCardOne'>
                                            <img src={element.image} alt='Imagem produto' />
                                        </div>
                                        <div className='BoxCardTwo'>
                                            <p> {element.name} </p>
                                            <span> R$ {(element.price).toFixed(2)} </span>
                                        </div>
                                        <div className='BoxCardTree'>
                                            <button onClick={() => {handleEditProduct(), setProductEdit(element)}}> <img src={iconEdit} alt='Icone de editar' /> </button>
                                            <button onClick={() => deleteProduct(element.id)}> <img src={deleteIcon} alt='Icone de deletar' /></button>
                                        </div>
                                    </CardProduct>
                            )
                        })}
                    
                </BoxTwo>
            </ContainerList>
        </section>
    </>);
}
