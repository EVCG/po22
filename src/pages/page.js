import styles from "../styles/page.module.css";
import friends from "../img/friends.jpg";
import livro from "../img/livro.jpg";
import sino from "../img/sino.jpg";
import lupa2 from "../img/lupa2.png";
import Image from "next/image";
import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <div className={styles.body}>
      {/* Cabeçalho */}
      <Header />
      {/* Conteudo Principal do site */}
      <div className={styles.main}>
        {/* Area de recepção e anuncios */}
        <div className={styles.recepcao}>
          <div className={styles.apresentacao}>
            <span>Olá *Seu Nome*,</span><br></br>
            <span>Seja Bem-Vindo(a) ao</span><br></br>
            <span className={styles.mensagem_organizador}>Organizador</span>

            <button className={styles.tutorial}><Image src={livro} className={styles.livro}/>Tutorial</button>
          </div>
          {/* Mural de alertas */}
          <div className={styles.anuncio}>
            <div className={styles.quadro_alerta}>
              <div className={styles.tituloMural}>
                <span><Image src={sino} className={styles.sino}/></span>
                <h2>Mural de Alertas</h2>
              </div>
              <p>Aqui aparecerá as turmas que estão sem professores definidos.</p>

              <div className={styles.lista_alerta}>
                <AlertItem />
                <AlertItem />
                <AlertItem />
                <AlertItem />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          {/* Filtros */}
          <div className={styles.filtros}>
            <select>
              <option>Curso</option>
              <option>Direito</option>
              <option>Medicina</option>
              <option>Psicologia</option>
            </select>

            <select>
              <option>Semestres</option>
              <option>1º Semestre</option>
              <option>2º Semestre</option>
              <option>3º Semestre</option>
            </select>

            <select>
              <option>Turno</option>
              <option>Matutino</option>
              <option>Vespertino</option>
              <option>Noturno</option>
            </select>

            <input type="text" placeholder="Buscar" className={styles.buscar}/><Image src={lupa2} className={styles.lupa}/>
          </div>

          {/* Grid de Cards */}
          <div className={styles.grade_cartoes}>
            {Array.from({ length: 12 }, (_, i) => (
              <Cartao key={i} />
            ))}
          </div>

          {/* Paginação */}
          <div className={styles.paginacao}>
            <span><img className={styles.esquerda} src="https://cdn-icons-png.flaticon.com/512/109/109617.png"></img>  Anterior</span>
            <div className={styles.paginas}>
              <a href="#" className={styles.numero1}>1</a>
              <a href="#" className={styles.numero2}>2</a>
              <a href="#" className={styles.numero3}>3</a>
              <a href="#" className={styles.numeros}>...</a>
              <a href="#" className={styles.numero7}>7</a>
              <a href="#" className={styles.numero8}>8</a>
            </div>
            <span>Próximo  <img className={styles.direita} src="https://cdn-icons-png.flaticon.com/512/109/109617.png"></img></span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function AlertItem() {
  return (
    <div className={styles.lista_alerta}>
      <div className={styles.esquerda_alerta_item}>
        <div className={styles.turmaResumida}>
          <div className={styles.icone_alerta}>!</div>
          <div className={styles.text_alerta}>Turma Resumida</div>
        </div>
        <button className={styles.botao_professor}><Image src={friends} className={styles.friends}/> Professores</button>
      </div>
    </div>
  );
}

function Cartao() {
  return (
    <div className={styles.cartao}>
      <div className={styles.conteudo_cartao}>
        <div className={styles.cabecalho_cartao}>
          <div className={styles.icone} />
        </div>
        <div className={styles.corpo_cartao}>
          <h3>Nome do Curso</h3>
          <p>Semestre</p>
          <p>Matutino</p>
        </div>
      </div>
      <div className={styles.rodape_cartao}>
        <span className={styles.status}>Resolvido</span>
      </div>
    </div>
  );
}
