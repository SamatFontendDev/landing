import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { AppRoutes } from './routes/AppRoutes'
import Layout from './components/Layout'

interface RouteItem {
    path: string
    element: any
}

const routes: RouteItem[] = [{ path: AppRoutes.main, element: <MainPage /> }]

const App: React.FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {routes.map(item => (
                    <Route
                        key={item.path}
                        path={item.path}
                        element={item.element}
                    />
                ))}
            </Route>
        </Routes>
    )
}

export default App
