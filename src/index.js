import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Captcha from './components/Captcha';
import TabMenu from './components/TabMenu';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes, Links } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Content from './components/Content';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>


      <Login></Login>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard'>
            <Navbar/>
            <Content/>
          </Route>
        </Routes>
      </BrowserRouter> */}
      
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
