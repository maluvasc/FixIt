import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu/menu';
import styles from './home.module.css';
import { RiAddLargeFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import api from "../../../api";

function Cards({ repositoryId, repositoryName, repositoryDescription }){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/repository/${repositoryId}/`);
  };

  return (
    <>
    <div className={styles.repositoryFlex} onClick={handleClick}>
      <div>
        <h5>{repositoryName}</h5>
        <p>{repositoryDescription}</p>
      </div>
    </div>
    </>
  )
}

function Home() {
  const [repositories, setRepositories] = useState([])

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/createRepository");
  };
  const handleClickReports = () => {
    navigate("/relatorios");
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await api.get('/app/repository/user/', {
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
          }
        })
        setRepositories(response.data)
      } catch (error) {
        alert(error)
      } 
    }

    fetchRepositories();
  }, [])

  return (
      <>
      <Menu />
      <div className={styles.mainHome}>
        <div className={styles.homeGrid}>
          <h3>Repositórios</h3>
          <input type='text' className={styles.searchbar} placeholder='Buscar Repositório'></input>
          <button className={styles.buttonCriarRepositorio} onClick={handleClick}>
            <RiAddLargeFill style={{width: '30px', height: '30px', paddingTop: 5 , cursor:'pointer'}}/>
          </button>
          <button className={styles.buttonAbrirRelatórios} onClick={handleClickReports}>Abrir relatórios</button>
        </div>
      </div>
        <div className={styles.line}></div>
        <div className={styles.column}>
          {repositories.map((repo) => (
            <Cards
              repositoryId={repo.id}
              repositoryName={repo.nome}
              repositoryDescription={repo.descricao}
            />
          ))}  
        </div>
      </>
    );
  }
  
export default Home;