import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reactDom from 'react-dom';
import { createBrowserRouter,Router,RouterProvider } from 'react-router';
import About from './about/About';

const page_link= createBrowserRouter(

    [
        {
            path:"/",
            element:<App/>

        },
        {
            path:"aboutpage",
            element:<About/>
        }

    ]
)


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={page_link}/>
)
