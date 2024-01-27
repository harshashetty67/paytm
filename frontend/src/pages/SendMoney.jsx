import Heading from './../components/Heading';

export const SendMoney = () => {
  return <div className="flex justify-center h-screen bg-gray-100">

    <div className="flex flex-col justify-center">
      <div className="border text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-xl">
        <div className="flex flex-col space-y-1.5 p-3">
          <Heading label="Send Money" />
        </div>
        <div className="p-3">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-2xl text-white">A</span>
            </div>
            <h3 className="text-2xl font-semibold pl-2">Friend's Name</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="amount"
              >
                Amount (in Rs)
              </label>
              <input
                type="number"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                id="amount"
                placeholder="Enter amount"
              />
            </div>
            <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}