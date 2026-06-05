import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("Введите сообщение");
      return;
    }

    alert("Сообщение отправлено!");
    setMessage("");
  };

  return (
    <section className="section" id="contacts">
      <div className="contactCard">
        <div className="contactHeader">
          <span className="contactIcon">✉️</span>
          <h2>Связаться со мной</h2>
        </div>

        <p className="contactText">
          Если у вас есть предложение по работе, проект или вопрос —
          напишите мне сообщение.
        </p>

        <form onSubmit={handleSubmit} className="contactForm">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Введите ваше сообщение..."
            rows="6"
            className="contactTextarea"
          />

          <div className="contactBottom">
            <span className="charCounter">
              {message.length} символов
            </span>

            <button type="submit" className="contactButton">
              Отправить →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}