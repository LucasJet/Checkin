import React from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";

function ClassList() {
  return (
    <div id="page-news-list" className="container">
      <PageHeader title="Turmas cadastradas" addLink="/class-create">
        <form id="search-news">
          <div className="input-block">
            <label htmlFor="news-title">Turma</label>
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

export default ClassList;
