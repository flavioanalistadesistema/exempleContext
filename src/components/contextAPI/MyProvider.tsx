import { useState } from "react";
import MyContext from "./MyContext";

type MyComponentProps = React.PropsWithChildren<{}>;

export function MyProvider({children}: MyComponentProps){
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(100)
     return (
        <MyContext.Provider value={{count, setCount, price, setPrice}}>
            {children}            
        </MyContext.Provider>
     )
}