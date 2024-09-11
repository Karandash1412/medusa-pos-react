import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { appRoutes } from './Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient();

const AppRoutes = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [detectTerminal, setDetectTerminal] = useState("Please select the terminal");
    const [disable, setEnable] = useState(true);
    const [client, setClient] = useState("");
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    {appRoutes.map((route) => {
                        if (route.requiresAuth && !isLogged) {
                            return <Route key={route.path} path={route.path} element={<Navigate replace to={"/login"} />} />;
                        } else {
                            return <Route key={route.path} path={route.path} element={<route.component setEnable={setEnable} setClient={setClient} disable={disable} setIsLogged={setIsLogged} detectTerminal={detectTerminal} setDetectTerminal={setDetectTerminal} client={client} />} />
                        }
                    })}
                </Routes>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default AppRoutes;
