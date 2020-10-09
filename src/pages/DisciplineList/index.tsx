import React from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";

function DisciplineList() {
  return (
    <div id="page-news-list" className="container">
      <PageHeader title="Disciplinas cadastradas" addLink="/discipline-create">
        <form id="search-news">
          <div className="input-block">
            <label htmlFor="news-title">Nome da disciplina</label>
            <input type="text" id="news-title" />
          </div>
          <div className="input-block">
            <label htmlFor="registration-date">Data de cadastro</label>
            <input type="date" id="registration-date" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="news-item"></article>
      </main>
    </div>
  );
}

export default DisciplineList;
