import Link from "next/link";
import Paypal from "../../components/Paypal";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Paypal />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
