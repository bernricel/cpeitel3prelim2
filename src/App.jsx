
import './App.css'
import {skillList} from './data.js'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {useState} from 'react'

const SkillPage = () => {
  return (<>
    <img src={skillList}></img>
    </>)
}

function App() {
  const [index, setIndex] = useState(0)
  const skill = skillList[index];

  const hasNext = index < skillList.length - 1;
  const hasBack = index > 0;


  function Next() {
    if (hasNext) setIndex(index + 1);
  }

  function Back() {
    if (hasBack) setIndex(index - 1);
  }
  
  
  return (
    <>
    <div className='container'>
    <Card>
      <div className="innerContainer">
      <h1>10 Things that Require Zero Talent</h1>
      <h3>by Bern Ricel Musngi</h3>

        <img src={skill.url} alt={skill.alt} className="img" />

        <div className="text-content">
          <h2>{skill.thing}</h2>
          <p>{skill.detail}</p>
        </div>

      <div style={{padding: "10px", display: "flex", gap: "10px"}}><Button onClick={Back} variant="contained">Back</Button>
      <Button onClick={Next} variant="contained">Next</Button></div>
      
</div>
    </Card>
    </div>
    </>
  )
}

export default App
