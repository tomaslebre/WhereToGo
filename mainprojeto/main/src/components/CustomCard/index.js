import React from 'react';
import './CustomCard.css'; // Garanta que este arquivo exista e esteja no mesmo diretório que seu componente.

const CustomCard = () => {
    return (
        <div className="card custom-card my-5">
            <div className="card-body d-flex justify-content-between">
                <div className="text-section">
                    <h5 className="card-title">Está com dúvidas de onde ir?</h5>
                    <p className="card-text">
                        Use a nossa função de criar roteiro para descobrir novos lugares incríveis!
                    </p>
                </div>
                <button className="btn btn-primary align-self-center">Novo Roteiro</button>
            </div>
        </div>
    );
}

export default CustomCard;
