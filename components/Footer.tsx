import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#FFFFFF] h-[684px] w-[1280px] p-[80px] gap-[80px] '>

      <div className='h-[424px] w-[1120px] gap-[80px]'>

        <div className='h-[82px] w-[1120px] justify-between flex'>

          <div className='h-[51px] w-[500px]'>
            <h3 style={{ fontWeight: '600' }} className='font-roboto text-[18px]'>Subscribe to our newsletter</h3>
            <h5 style={{ fontWeight: '400'}}  className='font-roboto text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
          </div>

          <div className='h-[82px] w-[400px] gap-[16px]'>
            <div className='h-[48px] w-[400px] gap-[16px] flex'>
              <input className='h-[48px] w-[265px] bg-white border border-black rounded-[5px] p-[12px]' type="text" placeholder="Enter your email" />
              <button style={{ fontWeight: '400' }} className='h-[48px] w-[119px] border-[1px] border-black rounded-[5px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] font-roboto text-[16px]'>Subscribe</button>
            </div>
            <h5 style={{ fontWeight: '400' }} className='font-roboto text-[12px] pt-3'>By subscribing you agree to with our Privacy Policy</h5>
          </div>
        </div>
      

      <div className='h-[225px] w-[1120px] gap-[40px] flex pt-[80px]'>

         <div className='w-[250px] h-[40px]'>
          <div className='h-[40px] w-[130.6px] flex items-center gap-[8.02px]'>
           <Image className='h-[30.38px] w-[30.38px]' src={"image/Frame 1.svg"} alt='logo' height={100} width={100}/>
           <h1 className='font-bold text-[25.05px]'>Ddsgnr</h1>
          </div>
         </div>

         <div className='h-[225px] w-[250px] gap-[16px]'>
          <h3 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[250px]'>Courses</h3>

          <div className='h-[185px] w-[250px]'>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Business</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Development</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Technology</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Design</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Programming</h5>
            </div>
          </div>

          </div>  

          <div className='h-[225px] w-[250px] gap-[16px]'>
          <h3 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[250px]'>Resources</h3>

          <div className='h-[185px] w-[250px]'>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Career</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Resume</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Learning</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Interview Preparation</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Jobs</h5>
            </div>
          </div>

          </div>  

          <div className='h-[225px] w-[250px] gap-[16px]'>
          <h3 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[250px]'>About Us</h3>

          <div className='h-[185px] w-[250px]'>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Contact</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Help/Support</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>FAQ</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Terms and Conditions</h5>
            </div>
            <div className='h-[37px] w-[250px] pt-[8px] pb-[8px]'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px]'>Partners</h5>
            </div>
          </div>
          </div>  
          </div> 

      </div>

         <div className='h-[57px] w-[1120px] gap-[32px] border-t-[1px] border-black relative'>
           <div className='h-[24px] w-[1120px] absolute bottom-0 flex justify-between'>
             <div className='h-[21px] w-[564px] gap-[24px] flex'>
             <h3 style={{ fontWeight: '400' }} className='font-roboto text-[14px] h-[21px] w-[195px]'>2023 Ddsgnr. All right reserved.</h3>
              <div className='h-[21px] w-[345px] gap-[24px] flex'>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px] underline h-[21px] w-[87px]'>Privacy Policy</h5>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px] underline h-[21px] w-[105px]'>Terms of Service</h5>
              <h5 style={{ fontWeight: '400' }} className='font-roboto text-[14px] underline h-[21px] w-[105px]'>Cookies Settings</h5>
              </div>
             </div>

             <div className='h-[24px] w-[132px] gap-[12px] flex items-center pl-[10px]'>
      <a className='h-[24px] w-[24px]' href="https://www.facebook.com/profile.php?id=100014406211815&ref=xav_ig_profile_web">
      <Image src="/image/facebook/Vector.svg" alt="Facebook" height={10} width={10}/>
      </a>

      <a className='h-[24px] w-[24px]' href="https://www.instagram.com/itx__hady?fbclid=IwY2xjawGtxX9leHRuA2FlbQIxMAABHaftHGZ8gLcrMEoJzol0YNEcXBO1f5PjZjIhxamJoYbFEmsFL62PtEXHgA_aem_VCwa4Q68gmebiMOYa6yP7A">
      <Image src="/image/instagram/Vector.svg" alt="Instagram" height={24} width={19}/>
      </a>

      <a className='h-[24px] w-[24px]' href="https://x.com">
      <Image src="/image/twitter/Vector.svg" alt="Twitter" height={24} width={19}/>
      </a>

      <a className='h-[24px] w-[24px]' href="https://pk.linkedin.com">
      <Image src="/image/linkedin/Vector.svg" alt="Linkedin" height={24} width={19}/>
      </a>
      </div>

           </div> 

         </div>

    </div>
  )
}

export default Footer
