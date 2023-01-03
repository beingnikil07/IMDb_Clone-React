import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <Router>
         <Header />
        <Routes>
          <Route index element={<h1>Hello World</h1>}></Route>
          <Route path="movie/:id" element={<h1>Movie details page</h1>}></Route>
          <Route
            path="movies/:type"
            element={<h1>Movies list page</h1>}
          ></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
          {/* 
                 path='/*' ka mean '/' ke baad agar kuch bhi dalega to ye chalega yha 
                 star yehi show krr rha hai agar / ke baad kuch bhi dala to ye render ho
                 
                 path='movie/:id' mean movie/ ke baad kuch bhi daloge  wo isko target karega...
                 
                 path='movies/:type'mean movie ke baad jo bhi daloge wo karega isko hit 
                 */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
