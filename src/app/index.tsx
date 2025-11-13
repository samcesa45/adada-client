import { AppProvider } from "./provider";
import { AppRouter } from "./router";
import '../index.css'

export function App() {
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    )
}