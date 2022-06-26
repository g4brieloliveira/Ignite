import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

// https://api.github.com/users/g4brieloliveira/repos

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");

  const handleSubmit = () => {
    const inputText = document.querySelector("input")?.value;
    setUser(inputText);
  };

  async function getData() {
    setIsLoading(true);
    await fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getData()
  }, [user]);

  return (
    <>
      {user != "" ? (
        isLoading ? (
          <h1>Carregando</h1>
        ) : (
          <section className="repository-list">
            <h1>
              Lista de Repositórios de{" "}
              <a href={`https://github.com/${user}`}>{user}</a>
            </h1>

            <ul>
              {repositories.map((repository) => {
                return (
                  <RepositoryItem
                    key={repository.name}
                    repository={repository}
                  />
                );
              })}
            </ul>
          </section>
        )
      ) : (
        <div>
          <input type="text" />
          <button type="submit" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      )}
    </>
  );
}
