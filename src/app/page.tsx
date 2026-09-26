import { redirect } from "next/navigation";

export default function Home() {
  redirect("/catalog");

  return (
    <div className="">
      <main className="">Main</main>
    </div>
  );
}
