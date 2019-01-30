import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Flashcard = () => <form>
<div className="form-group">
  <label htmlFor="formGroupExampleInput">Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Method Name"></input>
</div>
<div className="form-group">
  <label htmlFor="formGroupExampleInput2">Description</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Description"></input>
</div><button type="submit" className="btn btn-primary">Submit</button>
</form>

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <Link to="/Flashcard/">Add Flashcard</Link>
      </nav>
        <Route/>
      
      
    </div>
  </Router>
);

export default AppRouter;

