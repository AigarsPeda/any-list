import { type NextPage } from "next";
import PageHead from "../components/elements/PageHead/PageHead";
import { api } from "../utils/api";

const MyLists: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <PageHead
        descriptionShort="Create, customize, organize, share, collaborate. Unleash your list-making potential!"
        descriptionLong="Create, customize, organize, and share lists effortlessly. Collaborate in real-time. Unleash your list-making potential, the ultimate list creation platform."
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            You are logged in!
          </h1>
        </div>
      </main>
    </>
  );
};

export default MyLists;
