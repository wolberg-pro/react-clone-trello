import React from 'react'
import CoffieBreak from '../coffieBreak'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Headers = (props: Props) => {
  return (
    <div className="p-grid bg-gray-200">
      <div className="p-col">
        <h1 className="font-serif text-5xl font-extrabold">Sivan Wolberg</h1>
        <span className="font-serif text-sm">Developer, Solver , tinker</span>
      </div>
      <div className="p-col">
        <div className="flex ">
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            About me
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            My Skills
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            Mini Games
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            My Projects
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            Contact me
          </div>
        </div>
      </div>
      <div className="p-col">
        <CoffieBreak />
      </div>
    </div>
  )
}

export default Headers
