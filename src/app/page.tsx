import Image from 'next/image'
import Logo from  '../assets/imgLogo.png'
import NameLogo from  '../assets/nameLogo.png'
import Menina from '../assets/pexels-michelangelo-buonarroti-8728382 1.png'
import Ceta from '../assets/ceta.svg'
import Localizacao from '../assets/localizacao.svg'
import CetaGrande from '../assets/cetaGrande.svg'
import Menino from '../assets/Menino.png'
import Unreal from '../assets/Unreal.svg'
import Unyt from '../assets/Unyt.svg'
import Oculus from '../assets/Oculus.svg'
import Vive from '../assets/Vive.svg'
import Chevron from '../assets/chevron-small-down.png'
import Facebook from '../assets/facebook.svg'
import Pinterest from '../assets/pinterest.svg'
import Linkedin from '../assets/linkedin.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'
import Youtube from '../assets/youtube.svg'
import Hamburger from '../assets/Hamburger-Button.svg'










import { Card } from '@/components/Card'
import { Bola } from '@/components/bola'
import { Form } from '@/components/Form'






export default function Home() {
  return (
    <main className="m-auto max-w-7xl py-[10px] px-[68px] bg-[#302C42] ">
      {/* Primeira Sessao */}
        <div>
          <header className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <div className='max-sm:w-[50px] max-sm:h-[50px]'> <Image src={Logo} alt='Logo' height={100} width={100}/>    </div>
              <div className='max-sm:hidden'>  < Image src={NameLogo} alt='Logo' height={46} width={76}/>    </div>
            </div>
            <nav>
              <div className='max-sm:hidden'>
                <ul className='flex gap-10 items-center font-bold text-xs'>
                  <li>ABOUT</li>
                  <li>SERVICES</li>
                  <li>TECHNOLOGIES</li>
                  <li>HOW TO</li>
                </ul>
              </div>
              
            </nav>
            <div className='flex gap-9 font-bold text-xs max-sm:hidden'>
                <button className='py-4 px-9 border-2 border-white rounded-3xl'>CONTACT</button>
                <button className='py-4 px-9 rounded-3xl text-[#343045] bg-[#8176AF]'>JOIN HYDRA</button>
             </div>
             <div className='hidden max-sm:block'>
                <Image src={Hamburger} alt='ham'/>
             </div>
          </header>
              {/*meio da primeira sessao */}
          <div className='mt-[40px] flex gap-[300px] max-sm:flex-col-reverse max-sm:gap-10'>
              <div className='max-w-[456px] pt-12'>
                <h1 className='text-5xl font-bold'> <span className='text-[#C0B7E8]'>Dive</span> Into The Depths Of <span className='text-[#C0B7E8]'>Virtual Reality</span> </h1>
                <p className='text-[#FFFFFF] text-xs mt-9 max-sm:hidden'> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto voluptatum pariatur! Tempore, id nihil. 
                  Reiciendis aperiam, dolorum earum repellendus, optio harum est quibusdam non ea eveniet animi, recusandae facere?
                </p>
                <div className='flex items-center gap-9 mt-16'>
                  <button className='text-[#343045] bg-[#8176AF] py-4 px-10 rounded-3xl font-bold max-sm:w-full'>BUILD YOUR WORLD</button>
                  <span className='max-sm:hidden' ><Image src={Ceta} alt='ceta'/> </span>
                </div>
              </div>

              <div className='flex  flex-1 '>
                <div className='border-[10px] border-[#000000]/20 rounded-tl-[90px] rounded-bl-[200px] rounded-tr-[90px] rounded-br-[90px]   overflow-hidden '>

                  <Image src={Menina} alt='menina' className='h-full' />
                </div>
              </div>
          </div>
          
          {/* fim da primeira sessao*/}
          <div className='mt-[50px]'>
          <div className='flex  p-3 max-w-[95%] justify-center rounded-[90px] bg-[#3A3456] shadow-md-[rgba(192, 183, 232, 0.01)] rou '>
            <div className='flex gap-5 items-center border-r border-white/50 p-1 px-6  max-sm:hidden'>
              <div>
                <Image src={Localizacao}  alt='Localizacao' />
              </div>
              <div>
                <h1 className='font-bold text-6'>Pay Us a Visit</h1>
                <p className='text-xs text-[#ffffff] '>Union St, Seattle, WA 98101, United States</p>
              </div>
            </div>

            <div className='flex gap-3 items-center border-r border-white/50  px-6 max-sm:hidden '>
              <div>
                <Image src={Localizacao}  alt='Localizacao' />
              </div>
              <div>
                <h1 className='font-bold text-6 '>Pay Us a Visit</h1>
                <p className='text-xs text-[#ffffff] '>Union St, Seattle, WA 98101, United States</p >
              </div>
            </div>

            <div className='flex gap-3 items-center  px-6 '>
              <div>
                <Image src={Localizacao}  alt='Localizacao' />
              </div>
              <div>
                <h1 className='font-bold text-6'>Pay Us a Visit</h1>
                <p className='text-xs text-[#ffffff]'>Union St, Seattle, WA 98101, United States</p>
              </div>
            </div>
          
          </div>
         </div>

        </div>
        
        {/*Segunda Sessao */}

        <section className='mt-10'>
          <div className='grid grid-cols-2  max-sm:grid-cols-1'>
            <div>
              <div className='flex items-center'>
                <div>
                  <h1 className='text-4xl font-bold'>INTRODUCTION</h1>
                  <h2 className='text-3xl font-light'>TO HYDRA VR</h2>
                </div>
                <div className='mt-9  max-sm:hidden'>
                   <Image src={CetaGrande} alt='CetaGrande'  />
                </div>
              </div>

              <div>
                <div className='rounded-tl-[200px] rounded-bl-[60px]  rounded-br-[260px]  rounded-tr-[60px]  overflow-hidden  max-sm:mt-[30px]'>
                    <Image  src={Menino} alt='' />
                </div>
                  
              </div>

            </div>

              <div>
                <div className='mt-5  max-sm:hidden'>
                  <p>
                          Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.

                  </p>
                </div>

                  <div className='mt-[140px]  max-sm:mt-[30px]'>
                   <h1  className='font-bold  max-sm:hidden'>ABOUT</h1>
                   <h1 className='font-light  max-sm:hidden'>HYDRA VR</h1>
                   <p className='text-base  font-normal text-[#FFFFFF] mt-9  max-sm:text-justify'>
                                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                      urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                      dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                      Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                      sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                      etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                      cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                      retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                      n tempor.
                   </p>
                   <button className='mt-6 px-10 py-4 bg-[#8176AF] text-[#343045] font-bold rounded-3xl'>LET’S GET IN TOUCH</button>
                  </div>
                 
              </div>
          </div>
        </section>
        
        <section className='mt-[100px]'>
          <div className='grid grid-cols-2 max-sm:grid-cols-1'>
      
            <div className=''>
                <div className=' max-sm:flex max-sm:flex-col'>
                  <h1 className='text-4xl font-bold  max-sm:text-2xl'>WHY BUILD</h1>
                  <h1 className='text-3xl font-light max-sm:text-lg '>WITH HYDRA?</h1>
                </div>
                  <div className='mt-9  max-sm:hidden'>
                      <Image src={CetaGrande} alt='CetaGrande '  />
                  </div>
              </div>
              <div className='mt-[60px]  max-sm:hidden'>
                <p>
                     Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                 </p>
              </div>
          </div>

          <div className='flex justify-between gap-3 mt-[50px] '>
           
              <Card  
              imgUrl='http://localhost:3000/card1.svg'
              titulo='SIMULATION'
            
            />
        
            
            <div className=' max-sm:hidden'>
                <Card
                imgUrl='http://localhost:3000/card2.svg'
                titulo='EDUCATION'

              />
            </div>
           <div className='max-sm:hidden'>
            <Card 
              imgUrl='http://localhost:3000/card3.svg'
              titulo='SELF-CARE'

            />
           </div>
            
            <div className='max-sm:hidden'>
               <Card 
              imgUrl='http://localhost:3000/card4.svg'
              titulo='OUTDOOR'

            />
            </div>
           
          </div>
        </section>
        
        <section className='mt-[100px]'>
          <div className='flex justify-center'>
            <div className='bg-[url("http://localhost:3000/bg.svg")] bg-center w-full h-[300px] rounded-[160px] flex justify-center items-center flex-col max-sm:h-[160px]'>
                <h1 className='font-bold text-2xl max-sm:text-base'>TECHNOLOGIES & HARDWARE</h1>
                <h1 className='font-light'>USED BY HYDRA VR.</h1>
            </div>
          </div>
          <div className='flex justify-center -mt-8 '>
            <div className='border-[10px] border-black/20 overflow-hidden rounded-full max-sm:hidden'>
               <Image src={Chevron} alt='Chevron' className='bg-[#C0B7E8]' />
            </div>
            </div>
           <div>
          </div>

          <div className='flex justify-between items-center max-sm:mt-[40px]'>

            <div className='max-sm:hidden'>
                <Image src={Unreal} alt='Unreal' />
            </div>
            <div className='max-sm:hidden'>
                <Image src={Unyt} alt='Unreal' />
            </div>
            <div className='max-sm:hidden'>
                <Image src={Oculus} alt='oculus' />
            </div>
            <div className='max-sm:ml-[100px]'>
                <Image src={Vive} alt='vive' />
            </div>

          </div>

        </section>
          
        <section>

              <div className='grid grid-cols-2 max-sm:grid-cols-1'>
          
                  <div className='flex items-center mt-5 '>
                        <div>
                          <h1 className='text-4xl font-bold max-sm:text-2xl '>WHY BUILD</h1>
                          <h2 className='text-3xl font-light max-sm:text-2xl ' >WITH HYDRA?</h2>
                        </div>
                          <div className='mt-9 max-sm:hidden'>
                              <Image src={CetaGrande} alt='CetaGrande'  />
                          </div>
                      </div>
                      <div className='mt-[60px] max-sm:hidden'>
                        <p>
                            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                        </p>
                     </div>
                   </div>
               <div>
          
            </div>

          <div className='flex items-center justify-between mt-10 max-sm:ml-[140px]'>
            <Bola numero='01' titulo='3D Conception' subtitulo='& Design'/>
            <div className='max-sm:hidden'>
              <Bola numero='02' titulo='Interaction' subtitulo='Design'/>
            </div>
           
            <div className='max-sm:hidden'>
               <Bola numero='03' titulo='VR World' subtitulo='User Testing' />
            </div>
            <div className='max-sm:hidden'>
             <Bola numero='04' titulo='Hydra VR' subtitulo='Deploy'/>
            </div>

          </div>
        </section>

        <section className='mt-[100px]   '>
          

            <Form />
         
        </section>


        <footer className='mt-[100px]'>
          <div className='flex items-center justify-between border-b border-[#C0B7E8] pb-[70px]  max-sm:flex-col  '>
            <div className='border-r pr-[96px] border-[#C0B7E8]  max-sm:border-0  max-sm:ml-20 '>
              <Image src={Logo} alt='logo'/>
            </div>
            <div  className='border-r pr-[96px] border-[#C0B7E8]  max-sm:hidden' >
              <ul className='font-bold text-base'>
                <li >ABOUT</li>
                <li>SERVICES</li>
                <li>TECHNOLOGIES</li>
                <li>HOW TO</li>
                <li>JOIN HYDRA</li>
              </ul>
            </div>
            <div className='border-r pr-[96px] border-[#C0B7E8] max-sm:hidden '>
              <ul className='font-bold text-base'>
                <li >F.A.Q</li>
                <li >SITEMAP</li>
                <li >CONDITIONS</li>
                <li >LICENSES</li>
              </ul>
            </div>
            <div className='flex flex-col gap-3 justify-center items-center'>
              <h1 className='max-sm:mt-10'>SOCIALIZE WITH HYDRA</h1>
              <div className='flex gap-2 '>
                <div><Image src={Facebook} alt='facebook' /> </div>
                <div><Image src={Twitter} alt='Twitter' /> </div>
                <div><Image src={Linkedin} alt='Linkedin' /> </div>
                <div><Image src={Youtube} alt='Youtube' /> </div>
                <div><Image src={Instagram} alt='Pinterest' /> </div>
                <div><Image src={Pinterest} alt='Pinterest' /> </div>
               
              </div>
              <div>
                <button className='py-2 px-3 rounded-3xl text-[#343045] bg-[#8176AF] max-sm:mt-10'>BUILD YOUR WORLD</button>

              </div>
            </div>
          </div>
            <p className='font-bold text-sm py-5 text-center'>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
        </footer>
    </main>
  )
}
