import Logo from "../Logo";

export function Badge() {
  return (
    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div className="flex-shrink-0">
        <Logo />
      </div>
      <div className="ml-6 pt-1 text-left">
        <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
        <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
      </div>
    </div>
  )
}