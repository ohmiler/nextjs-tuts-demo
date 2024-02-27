import Image from "next/image";
import Header from "./component/Header";
import Nav from "./component/Nav";

export default function Home() {
  return (
    <main>
      <Header />
      <Nav />
      <div className="container mx-auto">
        <h3 className="font-bold">Home Page</h3>
        <p>Welcome to nextjs homepage</p>
        <Image src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png" width={500} height={0} />
      </div>
    </main>
  );
}
