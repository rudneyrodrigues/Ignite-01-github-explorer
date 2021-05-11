import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";

import './styles.scss';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(res => res.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.id} repository={repository} />
          );
        })}
      </ul>
    </section>
  )
}