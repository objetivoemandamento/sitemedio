import { useState } from "react";
import { business } from "./config";
import "./styles.css";

const wa = (message) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export default function App() {
  const [form, setForm] = useState({ name: "", service: business.services[0]?.title || "", date: "", time: "", notes: "" });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const requestAppointment = (e) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de solicitar um agendamento.\nNome: ${form.name}\nServiço: ${form.service}\nData preferida: ${form.date || "A combinar"}\nHorário preferido: ${form.time || "A combinar"}\nObservações: ${form.notes || "Nenhuma"}\nEntendo que o horário será confirmado pelo estabelecimento.`;
    window.open(wa(msg), "_blank", "noopener,noreferrer");
  };
  return <main>
    <nav className="nav"><a className="brand" href="#inicio">{business.name}<small>ATENDIMENTO PROFISSIONAL</small></a><div className="nav-links"><a href="#servicos">Serviços</a><a href="#sobre">Sobre</a><a className="nav-cta" href="#agendar">Agendar</a></div></nav>
    <section className="hero" id="inicio"><div className="hero-copy"><span className="eyebrow">CUIDADO EM CADA DETALHE</span><h1>{business.tagline}</h1><p>{business.description}</p><div className="actions"><a className="button" href="#agendar">Solicitar agendamento ↗</a><a className="text-link" href={wa("Olá! Gostaria de tirar uma dúvida.")} target="_blank" rel="noreferrer">Tirar uma dúvida</a></div><div className="trust"><span>✓ Atendimento personalizado</span><span>✓ Contato direto</span></div></div><div className="hero-panel"><div className="panel-orb">✳</div><span>SEU PRÓXIMO PASSO</span><h2>Vamos encontrar o melhor horário para você.</h2><p>Envie sua preferência e nossa equipe confirmará a disponibilidade pelo WhatsApp.</p></div></section>
    <section className="section" id="servicos"><span className="eyebrow">COMO PODEMOS AJUDAR</span><h2>Serviços</h2><div className="cards">{business.services.map((s,i)=><article className="card" key={s.title}><span className="number">0{i+1}</span><h3>{s.title}</h3><p>{s.description}</p><a href="#agendar">Consultar disponibilidade ↗</a></article>)}</div></section>
    <section className="section about" id="sobre"><div><span className="eyebrow">NOSSO COMPROMISSO</span><h2>Profissionalismo que você percebe.</h2></div><p>Personalize esta área com a história real do estabelecimento, sua equipe, experiência e diferenciais. Use fotos autorizadas e informações verificadas.</p></section>
    <section className="booking" id="agendar"><div><span className="eyebrow">FAÇA SUA SOLICITAÇÃO</span><h2>Vamos agendar?</h2><p>Preencha seus dados. O pedido será enviado ao WhatsApp e o estabelecimento confirmará o horário.</p><p className="small">Este formulário não reserva automaticamente um horário.</p></div><form onSubmit={requestAppointment} className="form"><label>Seu nome<input required name="name" value={form.name} onChange={update} placeholder="Como podemos chamar você?" /></label><label>Serviço<select name="service" value={form.service} onChange={update}>{business.services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><div className="form-row"><label>Data preferida<input type="date" name="date" value={form.date} onChange={update} /></label><label>Horário preferido<input type="time" name="time" value={form.time} onChange={update} /></label></div><label>Observações<textarea name="notes" value={form.notes} onChange={update} placeholder="Conte algo importante (opcional)" rows="3" /></label><button className="button" type="submit">Enviar pedido pelo WhatsApp ↗</button></form></section>
    <footer><span>© {new Date().getFullYear()} {business.name}</span><span>{business.address} · {business.phoneDisplay}</span></footer>
  </main>;
}