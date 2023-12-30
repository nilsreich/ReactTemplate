import useSWR, { preload } from "swr";

interface JokeApiResponse {
  error: boolean;
  category: string;
  type: string;
  joke: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Preload the resource before rendering the User component below,
// this prevents potential waterfalls in your application.
// You can also start preloading when hovering the button or link, too.
preload(`https://v2.jokeapi.dev/joke/Any?type=single`, fetcher);

export const useJoke = () => {
  const { data, error, isLoading } = useSWR<JokeApiResponse, Error>(
    `https://v2.jokeapi.dev/joke/Any?type=single`,
    fetcher
  );

  return {
    joke: data,
    isLoading,
    isError: error,
  };
};
