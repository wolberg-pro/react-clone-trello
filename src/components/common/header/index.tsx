/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Headers = (props: Props) => {
  return (
    <div className="flex ">
      <div className="flex-1 px-4">
        <h1 className="font-serif text-3xl font-extrabold">Sivan Wolberg</h1>
        <span className="font-serif text-xs">Developer, Solver , tinker</span>
      </div>
      <div className="flex-1 self-center">
        <ul className="flex">
          <li className="mr-6">
            <a
              className="text-blue-500 hover:text-blue-800"
              href="javascript:void(0)">
              Active
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-blue-500 hover:text-blue-800"
              href="javascript:void(0)">
              Link
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-blue-500 hover:text-blue-800"
              href="javascript:void(0)">
              Link
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-gray-400 cursor-not-allowed"
              href="javascript:void(0)">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Headers
