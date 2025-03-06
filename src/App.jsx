import {data} from './data.js'
function App() {

  return (
    <>
     <h1 className='text-3xl font-bold underline text-red-500 font-jakarta'>Test tailwind</h1>
     {data.loggedInUser.name}
     <img src={data.tasks[0].imageUrl} alt=""/>
    </>
  )
}

export default App
