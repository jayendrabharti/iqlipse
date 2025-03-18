"use client"

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

export default function AdminPage(){

return (
<html>
<body>
<NextStudio config={config} />
</body>
</html>
)

}
