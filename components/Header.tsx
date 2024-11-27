import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <div className='bg-[#F7F7F7] flex items-center space-x-4 h-[54px] max-w-screen-xl top-[100px] left-[100px] pl-[62px] pr-[64px] w-[1280px] border-b-[2px] border-black '>
      <h6 className='font-roboto text-[14px]'>Phone Number: +92319  266  343</h6>
      <span className="border-[#676767] border-l-2 h-6 mx-2"></span>
      <h6 className='font-roboto text-[14px]'>Email: aminsamo3@gmail.com</h6>

      <div className='flex gap-5 justify-end w-[680px]'>
      <a href="https://www.facebook.com/profile.php?id=100014406211815&ref=xav_ig_profile_web">
      <Image src="/image/facebook/Vector.svg" alt="Facebook" height={10} width={10}/>
      </a>

      <a href="https://www.instagram.com/itx__hady?fbclid=IwY2xjawGtxX9leHRuA2FlbQIxMAABHaftHGZ8gLcrMEoJzol0YNEcXBO1f5PjZjIhxamJoYbFEmsFL62PtEXHgA_aem_VCwa4Q68gmebiMOYa6yP7A">
      <Image src="/image/instagram/Vector.svg" alt="Instagram" height={24} width={19}/>
      </a>

      <a href="https://x.com">
      <Image src="/image/twitter/Vector.svg" alt="Twitter" height={24} width={19}/>
      </a>

      <a href="https://pk.linkedin.com">
      <Image src="/image/linkedin/Vector.svg" alt="Linkedin" height={24} width={19}/>
      </a>
      </div>
    </div>
  )
}

export default Header;
