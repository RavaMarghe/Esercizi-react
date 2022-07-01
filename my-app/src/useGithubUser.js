import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  function fetchGithubUser() {
    mutate();
  }

    return {
      userData: data,
      genericError: error,
      loading: !data && !error && username !== null,
      userError: !data,
      onRefresh: fetchGithubUser,
    };
}
