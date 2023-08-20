import { createContext, useContext, useState } from "react"

const HomeContext = createContext({})

export const useHome = () => useContext(HomeContext)

const HomeProvider = ({ children }) => {
  const [completeData,setCompleteData]=useState([])
  const [favData,setFavData]=useState([])
  const [count,setCount]=useState(1)
  const values = { completeData, setCompleteData,count,setCount, favData,setFavData}
  return (
    <HomeContext.Provider value={values} >
      {children}
    </HomeContext.Provider>
  )
}
export default HomeProvider
