import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  action: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, action, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="card-img-top"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button
          onClick={action}
          className="btn btn-primary"
        >
          Acción
        </button>
      </div>
    </div>
  );
};

export default Card;