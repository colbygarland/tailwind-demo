import Container from "./Container"
import Content from "./Content"

const Alert = () => {
  return (
    <Content>
      <div className="">

        <div className="">
          <p className="">Success!</p>
          <p className="">Your action was completed successfully.</p>
        </div>
        <div className="">
          <p className="">Failure!</p>
          <p className="">Your action did not complete.</p>
        </div>
        <div className="">
          <p className="">Warning</p>
          <p className="">Your attention is required.</p>
        </div>
        <div className="">
          <p className="">Info</p>
          <p className="">Welcome to the wonderful world of Tailwind.</p>
        </div>

      </div>
    </Content>
  )
}

export default Alert

// mx-auto flex justify-center flex-col max-w-sm items-center
// border border-l-8 border-green-500 bg-green-100 px-4 py-3 mb-4 self-stretch
// font-bold text-xl text-green-600
// text-green-700