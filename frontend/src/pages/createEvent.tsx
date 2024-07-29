

const CreateEvent = () => {
  return (
    <div className="relative bg-white">
      <section className="flex justify-center items-center flex-col w-full font-Poppins">
        <div className="my-4">
          <h1 className="text-xl md:text-2xl text-slate-800 font-bold">
            Create Event
          </h1>
          <form className="p-2 md:p-4">
            <div className="w-full my-2 md:my-4">
              <label htmlFor="name" className="text-lg font-semilbold text-slate-800">Event Name</label>
              <input name="name" className="relative m-0 block w-[200px] md:w-[400px] rounded border border-solid border-neutral-200 bg-white bg-clip-padding px-3 py-[0.25rem] text-gray-800 font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none" />
            </div>
            <div className="w-full my-2 md:my-4">
              <label htmlFor="description" className="text-lg font-semilbold text-slate-800">Description</label>
              <input name="description" className="relative m-0 block w-[200px] md:w-[400px] rounded border border-solid border-neutral-200 bg-white bg-clip-padding px-3 py-[0.25rem] text-gray-800 font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none" />
            </div>
            <div className="w-full my-2 md:my-4">
              <label htmlFor="location" className="text-lg font-semilbold text-slate-800">Location</label>
              <input name="location" className="relative m-0 block w-[200px] md:w-[400px] rounded border border-solid border-neutral-200 bg-white bg-clip-padding px-3 py-[0.25rem] text-gray-800 font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none" />
            </div>
            <div className="w-full my-2 md:my-4">
              <label htmlFor="price" className="text-lg font-semilbold text-slate-800">Price</label>
              <input type="number" name="price" className="relative m-0 block w-[200px] md:w-[400px] rounded border border-solid border-neutral-200 bg-white bg-clip-padding px-3 py-[0.25rem] text-gray-800 font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none" />
              
              <div className="flex justify-start items-center gap-4 py-2">
                <label htmlFor="free" className="text-lg font-semilbold text-slate-800">Free</label>
                <input type="radio" className="" />
              </div>
            </div>
            <div className="">
              <button className="
              bg-gray-800 px-2.5 py-1.5 md:px-4 md:py-2 rounded-md font-Poppins font-semibold text-[#fff] shadow-md text-[14px] md:text-lg text-center justify-center items-center
              hover:bg-blue-800 transition-all ease-in" type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CreateEvent