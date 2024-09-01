import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { Separator } from '@/components/ui/separator';
import CreateNote from '@/components/CreateNote';

type Props = {}

const DashboardPage = (props: Props) => {
  return (
      <>
          <div className="bg-gradient-to-r min-h-screen from-rose-100 to-teal-100">
              <div className='max-w-7xl mx-auto p-10'>
                  <div className='h-14' />
                  <div className='flex justify-between items-center md:flex-row flex-col'>
                      <div className='flex items-center'>
                          <Link href="/">
                          <Button size="sm" className='bg-emerald-500 text-slate-200 hover:scale-105 hover:text-white hover:bg-emerald-600'><ArrowLeft className='mr-1 h-5 w-5' strokeWidth={3} /> Back</Button>
                          </Link>
                          <div className='w-4' />
                          <div className='text-3xl font-semibold text-gray-900'>My Notes</div>
                          <div className='w-4' />
                          <UserButton />
                  </div>
                  </div>

                  <div className='h-8'></div>
                  <Separator className='bg-slate-300' />
                  <div className='h-8' />
                  <div className='text-center'>
                      <h2 className='text-xl text-gray-500'>You have no notes yet{ /* conditional rendering should be done here*/ }</h2>
                  </div>
                  <div className='grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3'> 
                      <CreateNote />
                  </div>
              </div>
       </div>
      </>
  )
}

export default DashboardPage;