import Link from 'next/link'
import Banner from "@/app/components/Banner";
import NavBar from "@/app/components/NavBar";


function Page() {
  return (
      <div className="bg-white">
          DEXTOPIA
          <Banner/>
          <NavBar/>
          <h1>Store</h1>
          <br/>
        <Link href="/login">Login</Link>
      </div>
  )
}

export default Page;
