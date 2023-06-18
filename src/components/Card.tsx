import Image from "next/image";
import Card1 from "../assets/card1.svg"

interface Props {
  imgUrl: string;
  titulo: string
}


export function Card({imgUrl,titulo}: Props) {
  return(
    <div className="bg-[#433D60] text-center p-5 rounded-2xl">
      <div>
        <div className="rounded-full overflow-hidden border-[10px] w-[190px] h-[190px] border-black/20 m-auto mb-5">
          <Image src={imgUrl} alt="card" width={190} height={190} />
        </div>
      </div>

      <div className="">
        <span className="font-bold text-2xl pb-4 border-b border-white/50 ">{titulo}</span>
      </div>

      <div className="mt-10">
        <p>
          Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus 
          libero justo laoreet sit amet vitae.
        </p>
      </div>
      <div className="mt-9">
        <button className="bg-[#8176AF] text-[#343045] font-bold text-xs py-4 px-10 rounded-3xl">TRY IT NOW</button>
      </div>
    </div>
  )
}