import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=' h-auto w-[1280px]'>
      <div className='bg-[#F7F7F7] h-[72px] w-[1280px] top-[170px] left-[100px] pr-[64px] pl-[64px] flex items-center justify-between mt-5  border-b-[1px] border-black '>
        <div className='flex items-center gap-[10.5px]'>
        <Image className='h-[30.38px] w-[32.58px]' src={"image/Frame 1.svg"} alt='logo' height={100} width={1}/>
        <h1 className='text-[25.07px] font-bold mr-20 '>Ddsgnr</h1>
        </div>

        <nav  className="flex items-center justify-end ml-[63px] w-full">
          <ul className="flex text-[16px] font-roboto gap-[39px] bg-[#FFFFFF] h-[44px] w-[910px] items-center">
            <li className="cursor-pointer p-2 w-14 border-b-2 border-black">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Courses</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Achievements</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Testimonials</li>

            <li className='ml-6'>
            <button className="bg-white border border-black text-black px-4 py-2 rounded hover:bg-gray-100 font-roboto pt-[8px] pr-[20px] pb-[8px] pl-[20px]">
              Login
            </button>
            </li>
            <li>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 font-roboto pt-[8px] pr-[20px] pb-[8px] pl-[20px]">
              Sign Up
            </button>
            </li>
            </ul>
        </nav>
      </div>
      <div className='h-[800px] w-[1280px] flex'>

        <div className='flex flex-col justify-start pt-[80px]'>
      <h1 style={{ fontWeight: '700' }} className="font-roboto text-[64px] pt-[120px] pl-[80px]"><span className='block'>Learn new skills</span><span className='block'>online with ease</span></h1>
      <h1 style={{ fontWeight: '400' }} className="font-roboto text-[18px] pt-[px] pl-[80px]"> <span className='block'>Discover a wide range of courses covering a variety of</span> <span className='block'>subjects, taught by expert instructors.</span></h1>
      <div className='flex gap-[15px] pt-[20px] pl-[80px]'>
            <button style={{ fontWeight: '400' }}  className="bg-black text-white px-4 py-2 rounded font-roboto pt-[8px] pr-[20px] pb-[8px] pl-[20px]">
              Start learning now
            </button>
            <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 py-2 rounded font-roboto pt-[8px] pr-[20px] pb-[8px] pl-[20px]">
              Explore courses
            </button>
            </div>
      </div>  

      <div className='flex justify-end ml-auto'>       
        <Image className='h-auto w-[640px]' src={"/image/girl/Image.svg"} alt='girl' height={100} width={100} />
      </div>
      </div>

      <div className='bg-[#F7F7F7] w-[1280px] h-[228px] top-[1038] left-[100px] pt-[64px] pr-[64px] pb-[80px] pl-2 flex items-center gap-[100px]'>
        <h1 style={{ fontWeight: '700' }} className='font-roboto text-[24px] pl-1 h-auto w-[350px] '><span className='block'>Trusted by 2000+ companies</span> <span className='block'>worldwide.</span></h1>
        <div className='flex gap-[20px] pt[8.74px] pb-[8.74px]'>
        <Image className='h-[38.52px] w-auto' src={"/image/logo1/Airbnb Logo.svg"} alt='logo' height={100} width={100}/>
        <Image className='h-[38.52px] w-auto' src={"/image/logo2/Airbnb Logo.svg"} alt='logo' height={100} width={100}/>
        <Image className='h-[38.52px] w-auto' src={"/image/logo3/Airbnb Logo.svg"} alt='logo' height={100} width={100}/>
        <Image className='h-[38.52px] w-auto' src={"/image/logo4/Airbnb Logo.svg"} alt='logo' height={100} width={100}/>
        <Image className='h-[38.52px] w-auto' src={"/image/logo5/Airbnb Logo.svg"} alt='logo' height={100} width={100}/>
        <Image className='h-[38.52px] w-auto' src={"/image/logo6/Airbnb Logo.svg"} alt='logo' height={100} width={100}/>
        </div>
      </div>

      <div className='bg-[#FFFFFF] h-[1049px] w-[1280px] top-[112px] left-[100px] pt-[112px] pr-[64px] pb-[112px] pl-[64px] gap-6 flex flex-col items-center'>
        <h2 style={{ fontWeight: '700' }} className='font-roboto text-[48px] h-[58px] w-[768px] items-center'>Explore Courses By Category</h2>
        <h2 style={{ fontWeight: '400' }} className='font-roboto text-[18px] h-[27px] w-[768px] pt-3 pr-5'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</h2>
  {/* 1 */}
  <div className='flex justify-center gap-[32px] pt-[70px]'>
    <div className='bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px] '>
      <Image className='h-[100px] w-[100px] gap-[10px]' src='/image/icon1/Frame 292.svg' alt='Icon 1' height={50} width={50} />
      <div>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[20px] h-[30px] w-auto'>Design & Development</h3>
        <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'>50+ Courses Available</h3>
      </div>
    </div>

    <div className='bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px] '>
      <Image className='h-[100px] w-[100px] gap-[10px]' src='/image/icon2/Frame 292.svg' alt='Icon 1' height={50} width={50} />
      <div>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[20px] h-[30px] w-auto'>Marketing</h3>
        <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'>50+ Courses Available</h3>
      </div>
    </div>

    <div className='bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px] '>
      <Image className='h-[100px] w-[100px] gap-[10px]' src='/image/icon3/Frame 292.svg' alt='Icon 1' height={50} width={50} />
      <div>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[20px] h-[30px] w-auto'>Development</h3>
        <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'>50+ Courses Available</h3>
      </div>
    </div>
  </div>

  {/* 2 */}
  <div className='flex justify-center gap-[32px] pt-[50px]'>
    <div className='bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px] '>
      <Image className='h-[100px] w-[100px] gap-[10px]' src='/image/icon4/Frame 292.svg' alt='Icon 1' height={50} width={50} />
      <div>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[20px] h-[30px] w-auto'>Communication</h3>
        <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'>50+ Courses Available</h3>
      </div>
    </div>

    <div className='bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px] '>
      <Image className='h-[100px] w-[100px] gap-[10px]' src='/image/icon5/Frame 292.svg' alt='Icon 1' height={50} width={50} />
      <div>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[20px] h-[30px] w-auto'>Digital Marketing</h3>
        <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'>50+ Courses Available</h3>
      </div>
    </div>

    <div className='bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px] '>
      <Image className='h-[100px] w-[100px] gap-[10px]' src='/image/icon6/Frame 292.svg' alt='Icon 1' height={50} width={50} />
      <div>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[20px] h-[30px] w-auto'>Self Development</h3>
        <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'>50+ Courses Available</h3>
      </div>
    </div>
  </div>

  {/* 3 */}
  <div className='flex justify-center gap-[32px] pt-[50px]'>
    <div className='bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px] '>
      <Image className='h-[100px] w-[100px] gap-[10px]' src='/image/icon7/Frame 292.svg' alt='Icon 1' height={50} width={50} />
      <div>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[20px] h-[30px] w-auto'>Business</h3>
        <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'>50+ Courses Available</h3>
      </div>
    </div>

    <div className='bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px] '>
      <Image className='h-[100px] w-[100px] gap-[10px]' src='/image/icon8/Frame 292.svg' alt='Icon 1' height={50} width={50} />
      <div>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[20px] h-[30px] w-auto'>Finance</h3>
        <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'>50+ Courses Available</h3>
      </div>
    </div>

    <div className='bg-[#F7F7F7] rounded-lg p-[24px] h-[132px] w-[410px] flex items-center gap-[16px] '>
      <Image className='h-[100px] w-[100px] gap-[10px]' src='/image/icon9/Frame 292.svg' alt='Icon 1' height={50} width={50} />
      <div>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[20px] h-[30px] w-auto'>Consulting</h3>
        <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'>50+ Courses Available</h3>
      </div>
    </div>
  </div>
  
  <div className='pt-[30px]'>
  <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 py-2 rounded font-roboto pr-[20px] pl-[20px]">
              View All courses
            </button>
            </div>
          </div>

          <div className='bg-[#FFFFFF] h-[488px] w-[1280px] pt-[112px] pr-[64px] pb-[112px] pl-[80px] gap-[80px] mt-[40px]'>
               
               <div className='h-[160px] w-[1152px] '>
                <h2 style={{ fontWeight: '700' }} className='h-[58px] w-[1152px] text-[48px] font-roboto pl-[365px]'>Our Achivements</h2>
                <h2 style={{ fontWeight: '400' }} className=' h-[54px] w-[1152px] text-[18px] font-roboto pt-[30px] items-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra<span className='block pl-[276px]'> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</span></h2>
               </div>

            <div className='flex gap-[24px] pb-10 pl-[20px]'>
             <div>
                <h3 style={{ fontWeight: '700' }} className='w-[296px] text-[40px] font-roboto'>+200</h3>  
                <h3 style={{ fontWeight: '400' }} className='w-[59px] text-[16px] font-roboto pl-[20px]'>Courses</h3>            
             </div>

             <div>
                <h3 style={{ fontWeight: '700' }} className='w-[296px] text-[40px] font-roboto'>50k</h3>  
                <h3 style={{ fontWeight: '400' }} className='w-[59px] text-[16px] font-roboto pl-[3px]'>Mentors</h3>            
             </div>

             <div>
                <h3 style={{ fontWeight: '700' }} className='w-[296px] text-[40px] font-roboto'>370k</h3>  
                <h3 style={{ fontWeight: '400' }} className='w-[59px] text-[16px] font-roboto pl-[10px]'>Students</h3>            
             </div>

             <div>
                <h3 style={{ fontWeight: '700' }} className='w-[296px] text-[40px] font-roboto'>100+</h3>  
                <h3 style={{ fontWeight: '400' }} className='w-[59px] text-[16px] font-roboto'>Recognition</h3>            
             </div>
            </div>
           </div>

           <div className='bg-[#FFFFFF] h-[488px] w-[1280px] pt-[112px] pr-[64px] pb-[112px] pl-[80px] gap-[80px]'>
               
               <div className='h-[160px] w-[1152px] '>
                <h2 style={{ fontWeight: '700' }} className='h-[58px] w-[1152px] text-[48px] font-roboto pl-[365px]'>Our Achivements</h2>
                <h2 style={{ fontWeight: '400' }} className=' h-[54px] w-[1152px] text-[18px] font-roboto pt-[30px] items-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra<span className='block pl-[276px]'> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</span></h2>
               </div>

            <div className='flex gap-[24px] pb-10 pl-[20px]'>
             <div>
                <h3 style={{ fontWeight: '700' }} className='w-[296px] text-[40px] font-roboto'>+200</h3>  
                <h3 style={{ fontWeight: '400' }} className='w-[59px] text-[16px] font-roboto pl-[20px]'>Courses</h3>            
             </div>

             <div>
                <h3 style={{ fontWeight: '700' }} className='w-[296px] text-[40px] font-roboto'>50k</h3>  
                <h3 style={{ fontWeight: '400' }} className='w-[59px] text-[16px] font-roboto pl-[3px]'>Mentors</h3>            
             </div>

             <div>
                <h3 style={{ fontWeight: '700' }} className='w-[296px] text-[40px] font-roboto'>370k</h3>  
                <h3 style={{ fontWeight: '400' }} className='w-[59px] text-[16px] font-roboto pl-[10px]'>Students</h3>            
             </div>

             <div>
                <h3 style={{ fontWeight: '700' }} className='w-[296px] text-[40px] font-roboto'>100+</h3>  
                <h3 style={{ fontWeight: '400' }} className='w-[59px] text-[16px] font-roboto'>Recognition</h3>            
             </div>
            </div>
           </div>
{/* break */}
<div className='h-[1642px] w-[1280px] bg-[#FFFFFF]'>
  <div>
    <h1 style={{ fontWeight: '700' }} className='font-roboto text-[56px] text-center'>Courses</h1>
    <h1 style={{ fontWeight: '400' }} className='font-roboto text-[18px] text-center'>Your Ultimate Guide to learning</h1>
  </div>

  <div className='h-auto w-[1152px]'>
    <nav className="flex items-center pl-[460px] pt-[50px]">
      <ul className='flex items-center text-center'>
        <li style={{ fontWeight: '400' }} className="p-2 font-roboto text-[16px] cursor-pointer border-b-[1px] border-black justify-center w-[87px] mx-auto text-right inline-flex">Popular</li>
        <li className="font-roboto text-[16px] cursor-pointer pl-[24px] pr-[16px]">Recommended</li>
        <li className="font-roboto text-[16px] cursor-pointer pl-[16px]">Best Price</li>
      </ul>
    </nav>
  </div>

  <div className='flex justify-center mt-[80px] pr-[35px]'>
    <div className='flex gap-[24px]'>
{/* b1 */}
      <div className='bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pl-4'>
      <Image className='h-[300px] w-[416px] ' src={"/image/box1/Image.svg"} alt='Image' height={100} width={100}/>
      <div className='flex pt-[20px]'>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[21px] w-[326px] pl-[10px]'>Design</h3>
        <Image className='h-[24px] w-[24px] pb-[5px]' src={"/image/Star 1.svg"} alt='Star' width={100} height={100}/>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[24px] w-[20px] pl-[5px]'>5.0</h3>
      </div>
      <div className=' pl-[10px] pt-[10px]'>
        <h5 style={{ fontWeight: '700' }} className='font-roboto text-[24px] h-[34px] w-[382px]' >UX/UI Design 201</h5>
        <h6 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[48px] w-[382px] pt-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h6>
      </div>
      <div className='flex items-center gap[16px] pt-[35px] pl-[10px] gap-[35px]'>
      <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
            </button>
            <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[37px]'>$400</h1>
      </div>
      </div>

{/* b2 */}
      <div className='bg-[#F7F7F7] rounded-lg h-[534px] w-[416px]'>
      <Image className='h-[300px] w-[416px]' src={"/image/box2/Image.svg"} alt='Image' height={100} width={100}/>
      <div className='flex pt-[20px]'>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[21px] w-[326px] pl-[10px]'>Programmimg</h3>
        <Image className='h-[24px] w-[24px] pb-[5px]' src={"/image/Star 1.svg"} alt='Star' width={100} height={100}/>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[24px] w-[20px] pl-[5px]'>5.0</h3>
      </div>
      <div className=' pl-[10px] pt-[10px]'>
        <h5 style={{ fontWeight: '700' }} className='font-roboto text-[24px] h-[34px] w-[382px]' >Introduction to Python</h5>
        <h6 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[48px] w-[382px] pt-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h6>
      </div>
      <div className='flex items-center gap[16px] pt-[35px] pl-[10px] gap-[35px]'>
      <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
            </button>
            <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[37px]'>$400</h1>
      </div>
      </div>

{/* b3 */}
      <div className='bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pr-4'>
      <Image className='h-[300px] w-[416px] ' src={"/image/box3/Image.svg"} alt='Image' height={100} width={100}/>     
      <div className='flex pt-[20px]'>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[21px] w-[326px] pl-[10px]'>Business</h3>
        <Image className='h-[24px] w-[24px] pb-[5px]' src={"/image/Star 1.svg"} alt='Star' width={100} height={100}/>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[24px] w-[20px] pl-[5px]'>5.0</h3>
      </div>
      <div className=' pl-[10px] pt-[10px]'>
        <h5 style={{ fontWeight: '700' }} className='font-roboto text-[24px] h-[34px] w-[382px]' >Data Analysis for Beginners</h5>
        <h6 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[48px] w-[382px] pt-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h6>
      </div>
      <div className='flex items-center gap[16px] pt-[35px] pl-[10px] gap-[35px]'>
      <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
            </button>
            <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[37px]'>$400</h1>
      </div>
      </div>

    </div>
  </div>

  <div className='flex justify-center mt-[50px] pr-[35px]'>
  <div className='flex gap-[24px]'>
      <div className='bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pl-4'>
      <Image className='h-[300px] w-[416px] ' src={"/image/box4/Image.svg"} alt='Image' height={100} width={100}/>
      <div className='flex pt-[20px]'>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[21px] w-[326px] pl-[10px]'>Art</h3>
        <Image className='h-[24px] w-[24px] pb-[5px]' src={"/image/Star 1.svg"} alt='Star' width={100} height={100}/>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[24px] w-[20px] pl-[5px]'>5.0</h3>
      </div>
      <div className=' pl-[10px] pt-[10px]'>
        <h5 style={{ fontWeight: '700' }} className='font-roboto text-[24px] h-[34px] w-[382px]' >Art Specialization</h5>
        <h6 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[48px] w-[382px] pt-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h6>
      </div>
      <div className='flex items-center gap[16px] pt-[35px] pl-[10px] gap-[35px]'>
      <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
            </button>
            <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[37px]'>$400</h1>
      </div>
      </div>

      <div className='bg-[#F7F7F7] rounded-lg h-[534px] w-[416px]'>
      <Image className='h-[300px] w-[416px] ' src={"/image/box5/Image.svg"} alt='Image' height={100} width={100}/>
      <div className='flex pt-[20px]'>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[21px] w-[326px] pl-[10px]'>Law</h3>
        <Image className='h-[24px] w-[24px] pb-[5px]' src={"/image/Star 1.svg"} alt='Star' width={100} height={100}/>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[24px] w-[20px] pl-[5px]'>5.0</h3>
      </div>
      <div className=' pl-[10px] pt-[10px]'>
        <h5 style={{ fontWeight: '700' }} className='font-roboto text-[24px] h-[34px] w-[382px]' >Rule of Law</h5>
        <h6 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[48px] w-[382px] pt-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h6>
      </div>
      <div className='flex items-center gap[16px] pt-[35px] pl-[10px] gap-[35px]'>
      <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
            </button>
            <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[37px]'>$400</h1>
      </div>
      </div>

      <div className='bg-[#F7F7F7] rounded-lg h-[534px] w-[416px] pr-4'>
      <Image className='h-[300px] w-[416px] ' src={"/image/box6/Image.svg"} alt='Image' height={100} width={100}/>
      <div className='flex pt-[20px]'>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[21px] w-[326px] pl-[10px]'>Tech</h3>
        <Image className='h-[24px] w-[24px] pb-[5px]' src={"/image/Star 1.svg"} alt='Star' width={100} height={100}/>
        <h3 style={{ fontWeight: '600' }} className='font-roboto text-[14px] h-[24px] w-[20px] pl-[5px]'>5.0</h3>
      </div>
      <div className=' pl-[10px] pt-[10px]'>
        <h5 style={{ fontWeight: '700' }} className='font-roboto text-[24px] h-[34px] w-[382px]' >Introduction to webflow</h5>
        <h6 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[48px] w-[382px] pt-[10px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h6>
      </div>
      <div className='flex items-center gap[16px] pt-[35px] pl-[10px] gap-[35px]'>
      <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 text-[16px] py-2 rounded font-roboto pr-[20px] pl-[20px]">
      Enroll Now
            </button>
            <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[37px]'>$400</h1>
      </div>
      </div>

    </div>
  </div>

  <div className='pt-[60px] pl-[550px]'>
  <button style={{ fontWeight: '400' }} className="bg-white border border-black text-black px-4 py-2 rounded font-roboto pr-[20px] pl-[20px]">
              View All courses
            </button>
            </div>

</div>

<div className='h-[895px] w-[1280px] pt-[112px] pr-[64px] pb-[112px]  bg-[#F7F7F7] gap-[80px]'>
  <div className='w-[768px] h-[109px] gap-[24px] pr-[100px] pl-[256px]'>
  <h2 style={{ fontWeight: '700' }} className='h-[58px] w-[768px] font-roboto text-[48px] text-center'>Our team</h2>
  <h2 style={{ fontWeight: '400' }} className='h-[27px] w-[768px] font-roboto text-[18px] text-center pt-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
  </div>

  <div>
   <div className='flex h-[209px] w-[1280px] gap-[48px] pt-[80px] '>

    <div className='h-[209px] w-[394.67px]'>
      <Image className='h-[80px] w-[80px] justify-center mx-auto' src={"/image/person1/Image.svg"} alt='' width={100} height={100}/>
      <h1 style={{ fontWeight: '600' }} className='font-roboto text-[20px] text-center h-[30px] w-[394.67px]'>James Nduku</h1>
      <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px] text-center h-[27px] w-[394.67px]'>Marketing Coordinator</h3>
     <div className='flex gap-[14px] justify-center items-center pt-[50px]'>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://pk.linkedin.com">
        <img className='h-[20px] w-[20px]' src="/image/linkedin/Vector.svg" alt="Linkedin" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://x.com">
        <img className='h-[20px] w-[20px]' src="/image/twitter/Vector.svg" alt="Twitter" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://dribbble.com/">
        <img className='h-[24px] w-[24px]' src="/image/dribbel/Dribble.svg" alt="Dribbel" />
      </a>
     </div>
    </div>

    <div className='rounded-lg h-[209px] w-[394.67px]'>
    <Image className='h-[80px] w-[80px] justify-center mx-auto' src={"/image/person2/Image.svg"} alt='' width={100} height={100}/>
    <h1 style={{ fontWeight: '600' }} className='font-roboto text-[20px] text-center h-[30px] w-[394.67px]'>Joseph Munyambu</h1>
      <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px] text-center h-[27px] w-[394.67px]'>Nursing Assistant</h3>
     <div className='flex gap-[14px] justify-center items-center pt-[50px]'>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://pk.linkedin.com">
        <img className='h-[20px] w-[20px]' src="/image/linkedin/Vector.svg" alt="Linkedin" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://x.com">
        <img className='h-[20px] w-[20px]' src="/image/twitter/Vector.svg" alt="Twitter" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://dribbble.com/">
        <img className='h-[24px] w-[24px]' src="/image/dribbel/Dribble.svg" alt="Dribbel" />
      </a>
     </div>
    </div>

    <div className='rounded-lg h-[209px] w-[394.67px]'>
    <Image className='h-[80px] w-[80px] justify-center mx-auto' src={"/image/person3/Image.svg"} alt='' width={100} height={100}/>
    <h1 style={{ fontWeight: '600' }} className='font-roboto text-[20px] text-center h-[30px] w-[394.67px]'>Joseph Ngumbau</h1>
      <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px] text-center h-[27px] w-[394.67px]'>Medical Assistant</h3>
     <div className='flex gap-[14px] justify-center items-center pt-[50px]'>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://pk.linkedin.com">
        <img className='h-[20px] w-[20px]' src="/image/linkedin/Vector.svg" alt="Linkedin" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://x.com">
        <img className='h-[20px] w-[20px]' src="/image/twitter/Vector.svg" alt="Twitter" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://dribbble.com/">
        <img className='h-[24px] w-[24px]' src="/image/dribbel/Dribble.svg" alt="Dribbel" />
      </a>
     </div>
    </div>
  </div>
  </div>

  
  <div>
   <div className='flex h-[209px] w-[1280px] gap-[48px] pt-[150px] '>

    <div className='h-[209px] w-[394.67px]'>
      <Image className='h-[80px] w-[80px] justify-center mx-auto' src={"/image/person4/Image.svg"} alt='' width={100} height={100}/>
      <h1 style={{ fontWeight: '600' }} className='font-roboto text-[20px] text-center h-[30px] w-[394.67px]'>Erick Kipkemboi</h1>
      <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px] text-center h-[27px] w-[394.67px]'>Web Designer</h3>
     <div className='flex gap-[14px] justify-center items-center pt-[50px]'>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://pk.linkedin.com">
        <img className='h-[20px] w-[20px]' src="/image/linkedin/Vector.svg" alt="Linkedin" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://x.com">
        <img className='h-[20px] w-[20px]' src="/image/twitter/Vector.svg" alt="Twitter" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://dribbble.com/">
        <img className='h-[24px] w-[24px]' src="/image/dribbel/Dribble.svg" alt="Dribbel" />
      </a>
     </div>
    </div>

    <div className='rounded-lg h-[209px] w-[394.67px]'>
    <Image className='h-[80px] w-[80px] justify-center mx-auto' src={"/image/person5/Image.svg"} alt='' width={100} height={100}/>
    <h1 style={{ fontWeight: '600' }} className='font-roboto text-[20px] text-center h-[30px] w-[394.67px]'>Stephen Kerubo</h1>
      <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px] text-center h-[27px] w-[394.67px]'>President of Sales</h3>
     <div className='flex gap-[14px] justify-center items-center pt-[50px]'>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://pk.linkedin.com">
        <img className='h-[20px] w-[20px]' src="/image/linkedin/Vector.svg" alt="Linkedin" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://x.com">
        <img className='h-[20px] w-[20px]' src="/image/twitter/Vector.svg" alt="Twitter" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://dribbble.com/">
        <img className='h-[24px] w-[24px]' src="/image/dribbel/Dribble.svg" alt="Dribbel" />
      </a>
     </div>
    </div>

    <div className='rounded-lg h-[209px] w-[394.67px]'>
    <Image className='h-[80px] w-[80px] justify-center mx-auto' src={"/image/person6/Image.svg"} alt='' width={100} height={100}/>
    <h1 style={{ fontWeight: '600' }} className='font-roboto text-[20px] text-center h-[30px] w-[394.67px]'>John Leboo</h1>
      <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px] text-center h-[27px] w-[394.67px]'>Dog Trainer</h3>
     <div className='flex gap-[14px] justify-center items-center pt-[50px]'>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://pk.linkedin.com">
        <img className='h-[20px] w-[20px]' src="/image/linkedin/Vector.svg" alt="Linkedin" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://x.com">
        <img className='h-[20px] w-[20px]' src="/image/twitter/Vector.svg" alt="Twitter" />
      </a>
      <a className='flex items-center justify-center h-[24px] w-[24px]' href="https://dribbble.com/">
        <img className='h-[24px] w-[24px]' src="/image/dribbel/Dribble.svg" alt="Dribbel" />
      </a>
     </div>
    </div>
  </div>
  </div>

</div>


<div className='bg-[#F7F7F7] h-[800px] w-[1280px] pt-[112px] pr-[64px] pb-[112px] pl-[64px] gap-[80px] overflow-hidden'>

  <div className='h-[109px] w-[560px] gap-[24px]'>
    <h2 style={{ fontWeight: '700' }} className='font-roboto text-[48px] h-[58px] w-[560px]'>Customer testimonials</h2>
    <h3 style={{ fontWeight: '400' }} className='font-roboto text-[18px] h-[27px] w-[560px] pt-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
  </div>

  <div className='flex gap-[32px] h-[294.89px] w-[1312px] pt-[70px]'>

  <div className="h-[294.89px] w-[416px] border border-[#000000] p-7 gap-6">
    <div className='flex gap-[4px]'> 
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
    </div>
   <div className='pt-[20px]'>
    <h1 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'><span className='block'>"Lorem ipsum dolor sit amet,</span> <span className='block'>consectetur adipiscing elit. </span> <span className='block'>Suspendisse varius enim in eros </span> <span className='block'>elementum tristique. Duis cursus, mi</span> <span className='block'>quis viverra ornare."</span></h1>
     <div className='h-[56px] w-[254px] gap-[20px] flex'>
     <Image className='h-[56px] w-[56px] rounded-full overflow-hidden justify-center mx-auto' src={"/image/person3/Image.svg"} alt='' width={100} height={100}/>
      <div className='h-[48px] w-[178px]'>
      <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[139px]'>James Nuduk</h1>
      <h3 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[24px] w-[139px]'>Softer Developer</h3>
      </div>
     </div>
   </div>
  </div>

  <div className="h-[294.89px] w-[416px] border border-[#000000] p-7 gap-6">
    <div className='flex gap-[4px]'> 
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
    </div>
   <div className='pt-[20px]'>
    <h1 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'><span className='block'>"Lorem ipsum dolor sit amet,</span> <span className='block'>consectetur adipiscing elit. </span> <span className='block'>Suspendisse varius enim in eros </span> <span className='block'>elementum tristique. Duis cursus, mi</span> <span className='block'>quis viverra ornare."</span></h1>
     <div className='h-[56px] w-[254px] gap-[20px] flex'>
     <Image className='h-[56px] w-[56px] rounded-full overflow-hidden justify-center mx-auto' src={"/image/person1/Image.svg"} alt='' width={100} height={100}/>
      <div className='h-[48px] w-[178px]'>
      <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[139px]'>Erick Kipkemboi</h1>
      <h3 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[24px] w-[139px]'>Scrum Master</h3>
      </div>
     </div>
   </div>
  </div>

  <div className="h-[294.89px] w-[416px] border border-[#000000] p-7 gap-6">
    <div className='flex gap-[4px]'> 
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
      <Image className='h-[18.89px] w-[20px]' src={"/image/Black star/Vector.svg"} alt='Star' width={100} height={100}/>
    </div>
   <div className='pt-[20px]'>
    <h1 style={{ fontWeight: '400' }} className='font-roboto text-[18px]'><span className='block'>"Lorem ipsum dolor sit amet,</span> <span className='block'>consectetur adipiscing elit. </span> <span className='block'>Suspendisse varius enim in eros </span> <span className='block'>elementum tristique. Duis cursus, mi</span> <span className='block'>quis viverra ornare."</span></h1>
     <div className='h-[56px] w-[254px] gap-[20px] flex'>
     <Image className='h-[56px] w-[56px] rounded-full overflow-hidden justify-center mx-auto' src={"/image/person6/Image.svg"} alt='' width={100} height={100}/>
      <div className='h-[48px] w-[178px]'>
      <h1 style={{ fontWeight: '600' }} className='font-roboto text-[16px] h-[24px] w-[139px]'>Stephen Kerubo</h1>
      <h3 style={{ fontWeight: '400' }} className='font-roboto text-[16px] h-[24px] w-[139px]'>UI/UX Designer</h3>
      </div>
     </div>
   </div>
  </div>
  </div>

  <div className='h-[48px] w-[1280px] pt-[140px] justify-between flex items-center'>
    <div className='h-[48px] w-[1263px] justify-between flex items-center'>
    <div className='h-[8px] w-[72px] gap-[8px] flex '>
      <Image className='h-[8px] w-[8px]' src={"/image/black dot/Dot.svg"} alt='Black Dot' height={100} width={100}/>
      <Image className='h-[8px] w-[8px]' src={"/image/dot/Dot.svg"} alt='Dot' height={100} width={100}/>
      <Image className='h-[8px] w-[8px]' src={"/image/dot/Dot.svg"} alt='Dot' height={100} width={100}/>
      <Image className='h-[8px] w-[8px]' src={"/image/dot/Dot.svg"} alt='Dot' height={100} width={100}/>
      <Image className='h-[8px] w-[8px]' src={"/image/dot/Dot.svg"} alt='Dot' height={100} width={100}/>
    </div>
    <div>
      <Image className='h-[48px] w-[111px] gap-[15px]' src={"/image/Slider Buttons.svg"} alt='' height={100} width={100}/>
    </div>
    </div>
  </div>

</div>

      </div>
  )
}

export default Hero;
