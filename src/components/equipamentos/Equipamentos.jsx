import React, { useState } from 'react';
import { equipamentosPT, equipamentosEN, equipamentosFR } from '../../Data';
import shapeOne from '../../assets/shape-1.png';
import { useTranslation } from 'react-i18next';
import './equipamentos.css';

const Equipamentos = () => {
    const { t, i18n } = useTranslation(); // Inicializa o hook de tradução
    const [zoomedImg, setZoomedImg] = useState(null);

    const data = i18n.language === 'fr' ? equipamentosFR 
                : i18n.language === 'en' ? equipamentosEN 
                : equipamentosPT; // Padrão para português

    return (
        <section className="equipamentos section" id="equipamentos">
            <h2 className="section__title text-cs">{t('equipmentsTitle')}</h2>

            <p className="section__subtitle"></p>

            <div className="services__container container equipamentos__grid">
                {
                    data.map(({ img, name, description }, index) => {
                        return (
                            <article className="services__item card card-one" key={index}>
                                <button
                                    type="button"
                                    className="equipamentos__img-button"
                                    onClick={() => setZoomedImg({ src: img, alt: name })}
                                    aria-label={`Abrir imagem de ${name}`}
                                >
                                    <img src={img} alt={name} className="testimonial__img" />
                                </button>
                                <span className="services__subtitle text-cs">{name}</span>
                                <p className="services__description">{description}</p>
                            </article>
                        )
                    })
                }
            </div>

            {zoomedImg && (
                <div
                    className="equipamentos__lightbox"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setZoomedImg(null)}
                >
                    <div className="equipamentos__lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={zoomedImg.src} alt={zoomedImg.alt} />
                        <button
                            type="button"
                            className="equipamentos__lightbox-close"
                            onClick={() => setZoomedImg(null)}
                            aria-label="Fechar imagem"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            <div className="section__deco deco__right">
                <img src={shapeOne} alt="" className='shape' />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title"></span>
            </div>
        </section>
    );
};

export default Equipamentos;
