
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import './App.css'
import Reviews from './pages/Reviews'
import Weather from './pages/Weather'
import News from './pages/News'
import ElspotPrice from './pages/Elspotprice'


function App () {

  const router = createBrowserRouter(

    [
      {
        // PUBLIC - layout
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [
          { path: "/", element: <Home /> },
          { path: "reviews", element: <Reviews /> },
          { path: "weather", element: <Weather /> },
          { path: "news", element: <News /> },
          { path: "elspotprice", element: <ElspotPrice /> },
        ]
      },
    ]
  )

  return (
    <div data-theme="dark">
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
