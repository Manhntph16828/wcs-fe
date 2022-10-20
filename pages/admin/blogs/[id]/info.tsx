import React, { ReactElement } from 'react'
import { AdminLayout } from '../../../../layouts';

type Props = {}

const InfoBlog = (props: Props) => {
  return (
    <div>InfoBlog</div>
  )
}


InfoBlog.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default InfoBlog