
import { MyProvider } from "./components/contextAPI/MyProvider"
import { CountCycleComponent } from "./components/CountCycleComponent"
import { CountProductComponent } from "./components/CountProductComponent"

export function Home() {    
    return (
        <>
            <h1>Home</h1>
            <MyProvider>
                <CountCycleComponent />
                <CountProductComponent />
            </MyProvider>
        </>
    )
}
