import { createContext, useEffect, useState } from 'react';
import { ICartProduct, ICurrentUser, IGlobalContext, IGlobalProviderProps, IProduct } from './@types';
import { api }  from '../../services/api';
import { toast } from 'react-toastify';
import { TLoginData } from '../../pages/Login/LoginSchema';
import { TRegisterData } from '../../pages/Register/RegisterSchema';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext({} as IGlobalContext)

export const GlobalProvider = ({children}: IGlobalProviderProps )=>{

    const [ProductsList, setProductsList] = useState<IProduct[]>([])
    const [CurrentProduct, setCurrentProduct] = useState<IProduct | null>(null) 
    const [SuggestedProducts, setSuggestedProducts] = useState<IProduct[]>([])
    const [CartList, setCartList]= useState<ICartProduct[]>([]) 
    const [CartValue, setCartValue] = useState(0) 
    const [CurrentUser, setCurretUser] = useState<ICurrentUser | null>(null)
    const [isCartOpen, setIsCartOpen]= useState(false)

    const navigate = useNavigate()

    const renderProduct = async (idProduct:number)=>{
        try {
            const {data} = await api.get<IProduct>(`/products/${idProduct}`)
            setCurrentProduct(data)
            setSuggestedProducts(ProductsList.filter(element => element.id !== idProduct))
        } catch (error) {
            toast.error(`${error}`)
        }
    }

    const addProductToCart = async (idProduct:number)=>{
        try {
            const {data} = await api.get<IProduct>(`/products/${idProduct}`)
            const isProductInCart = () =>{
                const productInCart= CartList.filter(element=> element.id === idProduct)
                
                if(productInCart.length==0){
                    const newProduct = {...data, quantity: 1}
                    setCartList([...CartList, newProduct])
                }
                if(productInCart.length > 0){
                    updateProductInCart(idProduct)
                }
                setCartValue(CartValue+data.price)
            } 
            
            isProductInCart()
            toast.success('Produto adicionado no carrinho com sucesso')

        } catch (error) {
            toast.error('Não foi possível adicionar ao carrinho')
        }
    }
   
    const updateProductInCart = (idProduct:number)=>{
        const updateProduct = CartList.map((element)=>{
            if(element.id === idProduct){
                let newQuantity = element.quantity +1
                return {...element, 'quantity': newQuantity}
            }
            return element
          })
        setCartList(updateProduct)
    }

    const updateCartFromInputs = (inputValue: string, idProduct:number )=>{
        let newCart = CartList.map((element)=>{
            if(element.id === idProduct){
                let value = parseFloat(inputValue)
                if( value > element.quantity){
                    let sum = element.price*(value - element.quantity)
                    setCartValue(CartValue+sum)
                }
                if(value < element.quantity){
                    let sub = element.price*(element.quantity-value)
                    setCartValue(CartValue-sub)
                }
               
                return {...element, 'quantity': value}
            }
            return element
          })
        setCartList(newCart)
    }

    const removeProductFromCart = (product : ICartProduct)=>{
        setCartList(CartList.filter(element=> element.id !== product.id))
        let sub = product.quantity * product.price
        setCartValue(CartValue-sub)

    }

    const loginAdm =async (formData:TLoginData) => {
        
        try {
            const { data } = await api.post<ICurrentUser>('/login', formData)
          localStorage.setItem('user@TOKEN', data.accessToken)
          localStorage.setItem('user@ID', JSON.stringify(data.user.id))
          localStorage.setItem('user@INFO', JSON.stringify(data))
          setCurretUser(data)
          toast.success('Login realizado com sucesso')
          navigate('/adm/dashboard')
            
        } catch (error) {
            toast.error('Não foi possível realizar o login')
        }
    }

    const logoutAdm = () =>{
        localStorage.removeItem('user@TOKEN')
        localStorage.removeItem('user@ID')
        localStorage.removeItem('user@INFO')
        setCurretUser(null)
        toast.success('Logout realizado')
        navigate('/')
    }

    const registerNewUser =async (formData:TRegisterData) => {
        const {confirmPassword, ...newFormData} = formData

        try {
            const { data } = await api.post<ICurrentUser>('/users', newFormData)
            localStorage.setItem('user@TOKEN', data.accessToken)
              localStorage.setItem('user@ID', JSON.stringify(data.user.id))
            
              setCurretUser(data)
              toast.success('Cadastro realizado com sucesso')
              navigate('/adm/dashboard')
            
        } catch (error) {
            toast.error('Não foi possível fazer o cadastro')
        }

    }
    

    useEffect(()=>{
        try {
            const getAllProducts = async()=>{
                const {data} = await api.get<IProduct[]>('/products')
                setProductsList(data)
            }
            
            getAllProducts()
        } catch (error) {
            toast.error('Não foi possível renderizar os produtos')
        }

        let user  = localStorage.getItem('user@INFO')
        if(user){
            setCurretUser(JSON.parse(user))
            navigate('/adm/dashboard')
        }
        
    },[])




    return(
        <GlobalContext.Provider value={{ProductsList, CurrentProduct, 
        SuggestedProducts, 
        CartList, 
        setProductsList,
        setCurrentProduct,
        renderProduct, 
        addProductToCart, 
        removeProductFromCart, 
        updateCartFromInputs, 
        isCartOpen, 
        setIsCartOpen, 
        CurrentUser,
        loginAdm, 
        logoutAdm, 
        registerNewUser,
        CartValue, 
        setCartValue,
        setSuggestedProducts}}>
            {children}
        </GlobalContext.Provider>
    )
}