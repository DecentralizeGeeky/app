import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-emereld-50 to-green-50 pt-8 pb-16">
      <div className="container mx-auto px-4 text-center">
        {/* <div className="mb-8"> */}
          {/* <p className="text-sm text-gray-600 mb-2">Sponsored by:</p> */}
          {/* <Image src="/logo.png" alt="logo" width={100} height={24} className="mx-auto" /> */}
        {/* </div> */}
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
        Training TheNext Generation  of <span className="underline decoration-green-500">Builders</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Join an army of developers, builders, and chain bridgers at GeekInk. Master Programming, System Design, UI/UX, and Web3 Development through real-world projects guided by industry experts. Gain the skills to lead disruptive innovation in tech  evolving landscape
        </p>
        
        <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full">
          Start learning for free
        </Button>
        
        <div className="mt-8">
          {/* <p className="text-sm text-gray-600 mb-2">Over 100,000+ students taught</p> */}
          <div className="flex justify-center">
            <Image src="/hero.png" alt="Student Avatars" width={200} height={40} />
          </div>
        </div>
        
        <div className="mt-16">
          <Image src="/course.png" alt="Course Interface" width={800} height={450} className="mx-auto" />
        </div>
      </div>
    </div>
  )
}