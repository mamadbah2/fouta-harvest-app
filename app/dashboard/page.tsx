import { redirect } from 'next/navigation'

export default function Dashboard() {
  redirect('/parcelles')
  
  return null
}
