import React, { useState } from 'react';
import Slider from 'react-slick';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', time: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Horário agendado para ${formData.name} no dia ${formData.date} às ${formData.time}.`);
    setFormData({ name: '', email: '', date: '', time: '' }); // Limpar campos após envio
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Habilita o autoplay
    autoplaySpeed: 1500,    // Define o intervalo de 1.5 segundos
  };

  return (
    <div>
      <header>
        <h1>Barbearia Vikings</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#booking">Agendar</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="banner">
        <h2>Bem-vindo à Barbearia Vikings</h2>
        <p>Aqui você encontra o melhor corte de cabelo e barba.</p>
      </section>

      <section id="carousel">
  <h2>Nossos Trabalhos</h2>
  <Slider {...settings}>
    <div>
      <img src="./barba1.jpg" alt="Corte de cabelo 1" />
    </div>
    <div>
      <img src="./cabelobarba.jpg" alt="Corte de cabelo 2" />
    </div>
    <div>
      <img src="./corte.jpg" alt="Corte de cabelo 3" />
    </div>
  </Slider>
</section>


      <section id="services">
        <h2>Serviços</h2>
        <ul>
          <li>Corte de cabelo</li>
          <li>Barba e bigode</li>
          <li>Tratamento capilar</li>
          <li>Design de sobrancelhas</li>
        </ul>
      </section>

      <section id="testimonials">
        <h2>Depoimentos</h2>
        <div className="testimonial">
          <p>"Melhor barbearia da cidade! Sempre saio satisfeito!"</p>
          <p><strong>– João Silva</strong></p>
        </div>
        <div className="testimonial">
          <p>"Ambiente agradável e profissionais incríveis!"</p>
          <p><strong>– Pedro Santos</strong></p>
        </div>
        <div className="testimonial">
          <p>"Recomendo a todos! Atendimento nota 10!"</p>
          <p><strong>– Maria Oliveira</strong></p>
        </div>
      </section>

      <section id="booking">
        <h2>Agende seu Horário</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Seu Nome" 
            value={formData.name} 
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Seu E-mail" 
            value={formData.email} 
            onChange={handleChange}
            required 
          />
          <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange}
            required 
          />
          <input 
            type="time" 
            name="time" 
            value={formData.time} 
            onChange={handleChange}
            required 
          />
          <button type="submit">Agendar</button>
        </form>
      </section>

      <footer>
        <p>© 2024 Barbearia Vikings</p>
      </footer>
    </div>
  );
}

export default App;
