import { BrowserRouter as Router,Route,Routes, Link } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./pages/Dashboeard"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"))
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const Toss = lazy(() => import("./pages/apps/Toss"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const StopWatch = lazy(() => import("./pages/apps/StopWatch"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={
                <Link to="/admin/dashboard">
                  <button>Visit Dashboard</button>
                </Link>
              }
            />

          <Route path="/admin/dashboard" element={<Dashboard />}/>
          <Route path="/admin/product" element={<Products />}/>
          <Route path="/admin/transaction" element={<Transactions />}/>
          <Route path="/admin/customer" element={<Customers />}/>
          {/* Charts */}
          <Route path="/admin/chart/bar" element={<BarCharts />}/>
          <Route path="/admin/chart/pie" element={<PieCharts />}/>
          <Route path="/admin/chart/line" element={<LineCharts />}/>
          {/* Apps */}
          <Route path="/admin/app/toss" element={<Toss />}/>
          <Route path="/admin/app/coupon" element={<Coupon />}/>
          <Route path="/admin/app/stopwatch" element={<StopWatch />}/>
          {/*manage */}
          <Route path="/admin/product/new" element={<NewProduct />}/>
          <Route path="/admin/product/:id" element={<ProductManagement />}/>
          <Route path="/admin/transaction/new" element={<TransactionManagement />}/>  
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App