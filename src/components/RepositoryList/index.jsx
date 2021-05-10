import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";

import styles from './styles.module.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(res => res.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className={styles.repositoryList}>
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repositorie => {
          return (
            <RepositoryItem key={repositorie.id} repository={repositorie} />
          );
        })}
      </ul>
    </section>
  )
}