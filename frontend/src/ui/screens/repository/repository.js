import React from 'react'
import Menu from '../../components/menu/menu';
import styles from './repository.module.css';
import { FiSliders } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function Cards({ videoName, isAnalised }) {
  return (
    <>
    <div className={styles.videoFlex}>
      <div className={styles.videoThumbnail}></div>
      <div>
        <h5 style={{cursor: 'pointer', maxWidth: '150px', fontStyle: 'italic'}}>{videoName}</h5>
        <p>{isAnalised}</p>
      </div>
    </div>
    </>
  )
};

function Repository() {

  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };
  const handleClickSettings = () => {
    navigate("/updateRepository");
  };
  const handleClickTrash = () => {
    navigate("/repositoryTrash");
  };

    return (
      <>
      <Menu />
      <div className={styles.mainRepository}>
        <div className={styles.repoGrid}>
        <FiArrowLeftCircle style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={handleClickHome}/>
          <div className={styles.repoFlex}>
            <img src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" alt="" class="img-thumbnail" id={styles.imageRepository}></img>
                <div className={styles.titleFlex}>
                    <h5 className={styles.repositoryName}>Nome do repositório</h5>
                    <p className={styles.repositoryDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aaaaaaaa</p>
                </div> 
              </div>
                <input type='text' className={styles.searchbar} placeholder='Procure um vídeo...'></input>
                <FiSliders style={{width: '30px', height: '30px', cursor: 'pointer'}}/>
                <FiTrash2 style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={handleClickTrash}/>
                <FiSettings style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={handleClickSettings}/>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.column}>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
          <Cards videoName={"Video Name"} isAnalised={"Analisado"}/>
      </div>
      </>
    );
  }
  
  export default Repository;