import { decrement, increment, incrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"

function App() {
  const state = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()
  const boxCount = Math.trunc(state / 5)
  const boxes = Array.from({ length: boxCount }, (_, index) => (
    <div key={index} className="bg-orange-500 p-3 m-2"> </div>
  ));

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex border border-purple-300 bg-slate-100 p-10 rounded-md">
        <button onClick={() => dispatch(increment())} className="px-3 py-2 bg-green-500 rounded-md text-xl font-semibold text-white ">Increment</button>
        <button onClick={() => dispatch(incrementByValue(5))} className="px-3 py-2 ml-2 bg-green-500 rounded-md text-xl font-semibold text-white ">Increment  by 5</button>
        <h1 className="text-3xl mx-5">{state}</h1>
        <button onClick={() => dispatch(decrement())} className="px-3 py-2 bg-red-500 rounded-md text-xl font-semibold text-white ">Decrement</button>
      </div>
      <div className="flex text-yellow-500 text-sm">{boxes}</div>
    </div>
  )
}

export default App
