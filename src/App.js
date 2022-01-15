import './App.css'
import { useState } from "react";


function App() {

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])
  const [title, setTitle] = useState('App to do List')


  const handleSubmit = () => {

    
    setJobs((prev)=>{
      const newJobs = [...prev, job] 
      return newJobs
    })
    setJob('')
  }

  const handleDelete = (index) => {

    setJobs((prev)=>{

      const newJobs = [...prev] 
      newJobs.splice(index,1)

      return newJobs
    })
  }
  const handleClear = (index) => {

    setJobs((prev)=>{

      const newJobs = [] 

      return newJobs
    })
  }
  const handleTitle = ()=> {

    setTitle('Võ Nái')
  }


  return (
    <div className="App">
        <div className="container">
            <div className="header">
                <div onClick={handleTitle} className="header__title">
                  {title}
                </div>
            </div>
            <div className="body">
                <div className="form__group">
                  <input type="text" required value={job} onChange={(e)=>setJob(e.target.value)} className="_input"></input>
                  <button type="submit" onClick={handleSubmit} className="_btnAdd">Thêm vào</button>
                </div>
                <div className="form__list">
                  <ul className="list__todo">
                        {jobs.map((job, index) =>(
                          <li key={index} className="list__todo__item">
                          {job} 
                          <button type="button" onClick={()=> {handleDelete(index)}} className="btn__delete">X</button>
                          </li>
                        ))}
                  </ul>
                </div>
            </div>
            <div className="footer">
                <span className="span__number">Số việc cần làm: {jobs.length}</span>
                <button type="button" onClick={handleClear} className="btn__clear">Clear All</button>
            </div>
        </div>
    </div>
  );
}

export default App;
