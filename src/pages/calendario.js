import React from 'react';
import styles from '../styles/calendario.module.css';
import calendario from '../img/calendario.png';
import Image from 'next/image';
import Header from "../components/header.js";

export default function Login() {
    return (
        <>
        <Header />
            <div className={styles.body}>

                <div className={styles.container1}>

                    <div className={styles.container2}>
                        <div className={styles.calendario_logo_container}>
                            <Image src={calendario} alt="calendario_logo" className={styles.calendario_logo} />
                            <p>Calendário Semanal</p>
                        </div>
                        <h1>Nome do curso - Semestre - Período</h1>
                    </div>

                    <div className={styles.containerCalendario}>
                        <div className={styles.corpoCalendario}>
                            <table>
                                <thead>
                                    <tr className={styles.cabecalho}>
                                        <th className={styles.colunaDiaHora}>
                                            <span className={styles.dia}>Dia</span>
                                            <span className={styles.linha}></span>
                                            <span className={styles.hora}>Hora</span>
                                        </th>
                                        <th>Segunda-Feira</th>
                                        <th>Terça-Feira</th>
                                        <th>Quarta-Feira</th>
                                        <th>Quinta-Feira</th>
                                        <th>Sexta-Feira</th>
                                        <th>Sábado</th>
                                        <th className={styles.domingo}>Domingo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={styles.horario}><p>07:10 às</p><p>08:50</p></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.colunaDomingo}></td>
                                    </tr>
                                    <tr>
                                        <td className={styles.horario}><p>09:10 às</p> <p>10:00</p></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.colunaDomingo}></td>
                                    </tr>
                                    <tr>
                                        <td className={styles.horario}><p>14:00 às</p> <p>15:50</p></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerVazio}></div></td>
                                        <td className={styles.colunaDomingo}></td>
                                    </tr>
                                    <tr>
                                        <td className={styles.horario}><p>18:10 às</p> <p>19:00</p></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.colunaDomingo}></td>
                                    </tr>
                                    <tr>
                                        <td className={styles.horario}><p>19:10 às</p> <p>20:50</p></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.colunaDomingo}></td>
                                    </tr>
                                    <tr>
                                        <td className={styles.horario}><p>21:10 às</p> <p>22:00</p></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.celulaVazia}><div className={styles.containerLaranja}></div></td>
                                        <td className={styles.colunaDomingoUltima}></td>
                                    </tr>
                                </tbody>
                            </table>

                            <button className={styles.botaoVoltar}>
                                Voltar
                            </button>

                        </div>
                    </div>
                </div >
            </div>
        </>
    );
}
