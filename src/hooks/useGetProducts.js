import { useEffect, useState } from "react"
import axios from "axios"

const useGetProducts = (API) => {
    const [products, setProducts] = useState([])

	useEffect(() => {
		const getData = async () => {
			const response = await axios(API)
			setProducts(response.data)
		}
		getData()
	}, [])
    return products
}

export default useGetProducts