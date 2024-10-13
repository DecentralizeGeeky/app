'use client';
import Waitlist from '../../components/Waitlist';
import Image from 'next/image';

export default function CoursesPage({ params }: { params: { courses: string } }) {
  return (
    <div className='min-h-screen bg-gray-100'>
      <h1 className='text-center text-green-500 mt-8 text-3xl lg:text-4xl mb-8'>
        <span className='text-gray-500'>Courses:</span> <span className='text-green-500'>{params.courses}</span>
      </h1>
      
      <div className='container mx-auto px-4 m-8 h-auto w-full lg:w-2/3'>
        <Image src='/team.svg' alt='courses' width={400} height={200} className='mx-auto' />
      </div>

      <div className='container mx-auto px-4 mb-8 text-center'>
        <p className='text-lg text-gray-700 mb-4'>
          At Geek Ink, we are dedicated to building a strong community of tech builders in the north. Our team is currently working on exciting courses and hands-on projects to equip you with essential skills.
        </p>
        <div className='container mx-auto px-4 rounded-full mb-8'>
        <Waitlist />
      </div>
        <p className='text-lg text-gray-700 mb-4'>
          Ready to embark on your tech journey? Sign up for our waitlist and be the first to know when we launch! Join us in shaping the future of tech together.
        </p>
      </div>
    </div>
  );
}
