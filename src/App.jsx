import { useState } from 'react'
import * as Icon from 'react-feather';
import './App.css'

function App() {
  const [visible, setVisible] = useState(false)

  const handleToggle = () =>{
    setVisible(!visible);
  }

  return (
    <>
      <div className="parentdiv">

          <div className="left" style={{flex:visible ? 3 :1,}}>
            <div className="inner_left">
              <h3>Logo</h3>
              <div className="linkgroup">
                <Icon.Activity size={visible ? 24 :54} />
                <h4 style={{ display: visible? 'flex' : 'none'}}>Activity</h4>
              </div>

              <div className="linkgroup">
                <Icon.AlertCircle size={visible ? 24 :54} />
                <h4 style={{ display: visible? 'flex' : 'none'}}>AlertCircle</h4>
              </div>

              <div className="linkgroup">
                <Icon.Award size={visible ? 24 :54} />
                <h4 style={{ display: visible? 'flex' : 'none'}}>Award</h4>
              </div>

              <div className="linkgroup">
                <Icon.Camera size={visible ? 24 :54} />
                <h4 style={{ display: visible? 'flex' : 'none'}}>Camera</h4>
              </div>


            </div>
          </div>

          <div className="right" style={{flex:12}}>
            <div className="header">
              <button onClick={handleToggle}> Toggle </button>

            </div>
              <h3>Welcome to this page</h3>
          </div>

      </div>
     
    </>
  )
}

export default App
