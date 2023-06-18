import Image from 'next/image'
import Cetamenor from '../assets/cetamenor.svg'

interface Props {
  numero : string
  titulo: string
  subtitulo: string
}


export function Bola({numero,subtitulo,titulo}:Props) {
  return(
    <div className='p-2 '>
      <div className="border-[10px] border-black/25  w-[159px] h-[159px] rounded-full overflow-hidden flex items-center justify-center m-auto">
        <div className="font-bold text-[64px] text-[#343045] bg-[#C0B7E8]  
            flex justify-center items-center h-full w-full">{numero}
         </div>
      </div>

      <div className='mt-5'>
        <div className='flex gap-5'>
          <div>
            
          </div>
          <Image src={Cetamenor} alt='ceta'  className='max-sm:hidden'/>
          <h1 className='font-bold text-2xl max-sm:text-center'>{titulo}<br />{subtitulo}</h1>
        </div>

      </div>
    </div>
  )
}