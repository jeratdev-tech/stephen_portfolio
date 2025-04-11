const Button = ({ text, className, id }) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow.svg" alt="Arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
