import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/app/utils/paths'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src={getImgPath('/images/logo/logo.png')}
        alt='Racheal Aber - Virtual Assistant'
        width={280}
        height={92}
        className='h-20 w-auto block dark:hidden'
        priority
      />
      <Image
        src={getImgPath('/images/logo/logo1.png')}
        alt='Racheal Aber - Virtual Assistant'
        width={280}
        height={92}
        className='h-20 w-auto hidden dark:block'
        priority
      />
    </Link>
  )
}

export default Logo