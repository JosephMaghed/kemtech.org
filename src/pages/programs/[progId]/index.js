import { useRouter } from "next/router";

export default function ProgramDetails() {
  const router = useRouter();
  const { progId } = router.query;

  return <p>Post: {progId}</p>;
}
