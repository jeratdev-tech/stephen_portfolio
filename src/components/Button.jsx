const Button = ({ text, className, id, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (onClick) {
      onClick(e);
      return;
    }

    const target = document.getElementById("counter");
    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // If custom className is provided, use it directly
  if (className && !className.includes("cta-wrapper")) {
    return (
      <button onClick={handleClick} className={className}>
        {text}
      </button>
    );
  }

  return (
    <a onClick={handleClick} className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="./images/arrow-down.svg" alt="Arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
