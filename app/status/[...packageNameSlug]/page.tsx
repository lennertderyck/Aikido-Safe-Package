import { getPackageNameFromSlugArray } from '@/src/lib/utils/general';
import { FC } from 'react';

interface Props {};

const Page: FC<{ params: Promise<{ packageNameSlug: string[] }>}> = async ({ params }) => {
  const { packageNameSlug } = await params;
  
  console.log(getPackageNameFromSlugArray(packageNameSlug));
  console.log(getPackageNameFromSlugArray(['@scope', 'package', 'badge.svg'], 1));
  
  return (
    <>
    </>
  )
}

export default Page;