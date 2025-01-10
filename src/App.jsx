import './App.css'
import AppNumber from './components/AppNumber'
import AppString from './components/AppString'
import AppBoolean from './components/AppBoolean'
import AppObject from './components/AppObject'
import AppArray from './components/AppArray'
import AppFunction from './components/AppFunction'

function App() {

  return (
    <div>
      <AppNumber age = {29}/>
      <AppString str = {'QWERY ASDFG'} />
      <AppBoolean isMan = {false}/>
      <AppObject 
      name = {'Alexandra'} 
      username = {'Yashchuk'} 
      city = {'Minsk'}
      />
      <AppArray arr = {[1,2,3,4,5,6,7,8]}/>
      <AppFunction func = {AppFunction}/>
    </div>
  )
}

export default App
