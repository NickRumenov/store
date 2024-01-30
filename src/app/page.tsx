import Link from 'next/link'
import {Button} from "@aws-amplify/ui-react";

const categories = ["edna", "dve", "trie"]

function Page() {
  return (
      <div className="bg-white">
          <h1></h1>
          <Link href="/login"><Button>Login</Button></Link>
      </div>
  )
}

export default Page;
