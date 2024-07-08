
function App() {

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 bg-slate-100 p-5 rounded-md">
        <button className="px-3 py-2 bg-green-500 rounded-md text-xl font-semibold text-white ">Increment</button>
        <h1 className="text-3xl mx-5">0</h1>
        <button className="px-3 py-2 bg-red-500 rounded-md text-xl font-semibold text-white ">Decrement</button>
      </div>
    </div>
  )
}

export default App
