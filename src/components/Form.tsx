export function Form() {
  return(
    <form className="bg-[#211E2E] rounded-3xl p-10">
        <h1 className="m-auto text-center pb-5 border-b border-white/80 font-bold text-4xl max-sm:text-2xl max-sm:w-auto " >JOIN HYDRA</h1>

        <h1 className="text-center font-light text-4xl mt-5 max-sm:text-2xl">Let’s Build Your VR Experience</h1>

      <div className="flex gap-2 mt-[65px] max-sm:flex-col">
        <div  className="flex-1">
          <input type="text"  className="w-full bg-transparent border-2 border-white rounded-3xl  py-4 px-6" placeholder="First Name"/>
        </div>
        <div className="flex-1">
          <input type="text"  className="w-full bg-transparent border-2 border-white rounded-3xl py-4 px-6" placeholder="Last Name"/>
        </div>
      </div>

      <div className="flex gap-2 mt-10  max-sm:flex-col">
        <div  className="flex-1">
          <input type="text"  className="w-full bg-transparent border-2 border-white rounded-3xl  py-4 px-6" placeholder="Email"/>
        </div>
        <div className="flex-1">
          <input type="text"  className="w-full bg-transparent border-2 border-white rounded-3xl py-4 px-6" placeholder="Phone Number"/>
        </div>
      </div>

      <div  className="mt-10">
        <input type="text"  className="w-full bg-transparent border-2 border-white rounded-3xl py-4 px-6" placeholder="Subject"/>
      </div>

      <div className="mt-10">
        <textarea className="w-full bg-transparent border-2 border-white rounded-3xl py-4 px-6 h-[200px]" placeholder="Tell Us Something..."></textarea>
      </div>

      <div className="text-center mt-12">
        <button className="bg-[#8176AF] py-4 px-10 rounded-3xl font-bold text-[#343045] text-2xl  max-sm:text-sm">SEND TO HYDRA</button>
      </div>

    </form>
  )
}