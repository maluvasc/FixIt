import React from 'react'
import Menu from '../../components/menu/menu';
import styles from './updateRepository.module.css';

function UpdateRepository() {
    return (
      <>
      <Menu />
      <div className={styles.mainUpdateRepository}>
        <div className={styles.scopeUpdateRepository}>
            <h1 className={styles.h1UpdateRepository}>Editar informações do repositório</h1>
            <div className={styles.line}></div>
            <div className={styles.nameInput}>
              <label>Nome</label>
              <input className={styles.inputInformationName}></input>
            </div>
            <div className={styles.descriptionInput}>
              <label>Descrição</label>
              <input className={styles.inputInformationDescription}></input>
            </div>
            <div className={styles.line2}></div>
            <div className={styles.privateRepositoryInput}>
              <input type='checkbox' className={styles.inputInformationCheckbox}></input>
              <p>Repositório privado?</p>
            </div> 
            <div className={styles.collaboratorsInput}>
              <label>Colaboradores</label>
              <select name="collaborators" id="collaborators">
                <option>Escolha colaboradores</option>
              </select>
            </div>
            <button className={styles.buttonUpdateRepository}>Editar repositório</button>
            <div className={styles.container}>
              <div className={styles.alinharColuna2}>
              <label>Escolha a imagem do repositório</label>
              <label htmlFor="fileUpload" className={styles.uploadLabel}>
                <div className={styles.uploadBox}>
                  <span className={styles.uploadText}>+</span>
                </div>
              </label>
              <input
                type="file"
                id="fileUpload"
                className={styles.uploadInput}
              />
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
export default UpdateRepository;