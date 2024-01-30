import Link from 'next/link'


function Page() {
  return (
      <div className="bg-white">
          <h1>Store</h1>
          <br/>
          <Link href="/login">Login</Link>
      </div>
  )
}

export default Page;
