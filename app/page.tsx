import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/login')
  
  // Ceci ne sera jamais rendu à cause de la redirection
  return null
}