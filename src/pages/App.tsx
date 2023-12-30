import { count } from "@/lib/signals";
import { useJoke } from "@/hooks/useJoke";

const Joke = () => {
  const { joke, isLoading, isError } = useJoke();

  if (isLoading) return <div>Waiting</div>;
  if (isError) return <div>Error</div>;
  return <div>{joke?.joke}</div>;
};

export const App = () => {
  return (
    <div className="">
      MainPage - {count} - <Joke />
    </div>
  );
};
