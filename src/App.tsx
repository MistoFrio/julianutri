import React, { useState } from 'react';
import { Instagram, MapPin, Users, Star, Calendar, ExternalLink, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { contactConfig } from './config/contact';

function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleAgendarConsulta = () => {
    const whatsappUrl = `https://wa.me/${contactConfig.phoneNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLigar = () => {
    window.open(`tel:${contactConfig.phoneNumber}`, '_blank');
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5FAEE] to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transforme Seu Corpo de Forma
                <span className="text-[#9ACD66]"> Saudável</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Especialista em emagrecimento e treinos de força. Mais de 500 pacientes transformados com acompanhamento personalizado e resultados comprovados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handleAgendarConsulta}
                  className="bg-[#9ACD66] hover:bg-[#8BB85C] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Agendar Consulta Gratuita
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <a 
                  href="https://instagram.com/juliacruz.nutri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-[#9ACD66] text-[#9ACD66] hover:bg-[#9ACD66] hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Seguir no Instagram
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#9ACD66] mr-2" />
                  <span>Consulta sem compromisso</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#9ACD66] mr-2" />
                  <span>Resultados garantidos</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#9ACD66] rounded-full blur-3xl opacity-20 scale-110"></div>
                <img 
                  src="/image.png" 
                  alt="Julia Cruz - Nutricionista" 
                  className="relative w-80 h-80 rounded-full object-cover border-8 border-white shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#9ACD66] text-white p-4 rounded-full shadow-lg">
                  <Star className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#9ACD66] mb-2">500+</div>
              <div className="text-gray-600">Pacientes Transformados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#9ACD66] mb-2">5★</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#9ACD66] mb-2">8+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#9ACD66] mb-2">95%</div>
              <div className="text-gray-600">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a <span className="text-[#9ACD66]">Julia Cruz</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia comprovada que combina nutrição personalizada com treinos de força para resultados duradouros
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#9ACD66] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-[#9ACD66]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Acompanhamento Personalizado</h3>
              <p className="text-gray-600 leading-relaxed">
                Plano alimentar exclusivo baseado no seu perfil, objetivos e preferências alimentares.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#9ACD66] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#9ACD66]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Especialista em Força</h3>
              <p className="text-gray-600 leading-relaxed">
                Única nutricionista da região especializada em musculação, powerlifting e LPO.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#9ACD66] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-[#9ACD66]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Resultados Comprovados</h3>
              <p className="text-gray-600 leading-relaxed">
                Mais de 500 transformações reais com acompanhamento científico e humanizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#9ACD66] to-[#8BB85C]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronta para Transformar Sua Vida?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Agende sua consulta gratuita e descubra como alcançar seus objetivos de forma saudável e duradoura
          </p>
          <button 
            onClick={handleAgendarConsulta}
            className="bg-white text-[#9ACD66] hover:bg-gray-100 font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto group"
          >
            <Phone className="w-6 h-6 mr-3" />
            Agendar Consulta Gratuita
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <p className="text-white text-sm mt-4 opacity-75">
            ✓ Sem compromisso ✓ Primeira consulta gratuita ✓ Atendimento humanizado
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600">Processo simples e eficaz em 3 etapas</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#9ACD66] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Avaliação Completa</h3>
              <p className="text-gray-600">Análise detalhada do seu perfil, histórico e objetivos para criar o plano perfeito.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#9ACD66] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plano Personalizado</h3>
              <p className="text-gray-600">Cardápio exclusivo e orientações específicas para treino de força e emagrecimento.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#9ACD66] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Acompanhamento Contínuo</h3>
              <p className="text-gray-600">Suporte constante, ajustes no plano e monitoramento dos seus resultados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#F5FAEE] to-white rounded-3xl p-12 text-center">
            <Users className="w-16 h-16 text-[#9ACD66] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comunidade Viva Leve
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Entre para nossa comunidade exclusiva no WhatsApp e receba semanalmente orientações gratuitas para emagrecimento saudável, receitas e dicas de treino.
            </p>
            <a 
              href="https://chat.whatsapp.com/comunidade-viva-leve" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center group"
            >
              Participar Gratuitamente
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <p className="text-gray-500 text-sm mt-4">
              +2.500 membros ativos • Conteúdo exclusivo • Totalmente gratuito
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que dizem sobre meu trabalho
            </h2>
            <p className="text-xl text-gray-600">Depoimentos reais de pacientes transformados</p>
          </div>
          
          <div className="text-center">
            <a 
              href="https://www.google.com/search?q=julia+cruz+nutricionista+avaliações" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center group"
            >
              <Star className="w-5 h-5 mr-2" />
              Ver Avaliações no Google
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MapPin className="w-16 h-16 text-[#9ACD66] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Localização</h2>
          <p className="text-xl text-gray-600 mb-8">
            Atendimento presencial na Clínica Físima
          </p>
          <a 
            href="https://maps.google.com/clinica-fisima" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center group"
          >
            Ver no Google Maps
            <MapPin className="w-5 h-5 ml-2 group-hover:bounce transition-transform duration-300" />
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#9ACD66]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Não Deixe Para Amanhã o Que Pode Começar Hoje
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Sua transformação começa com uma decisão. Agende sua consulta gratuita agora!
          </p>
          <button 
            onClick={handleAgendarConsulta}
            className="bg-white text-[#9ACD66] hover:bg-gray-100 font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto group mb-6"
          >
            <Calendar className="w-6 h-6 mr-3" />
            Agendar Minha Consulta Gratuita
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Primeira consulta gratuita</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Atendimento humanizado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Phone className="w-16 h-16 text-[#9ACD66] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
          <p className="text-xl text-gray-600 mb-8">
            Agende sua consulta gratuita ou tire suas dúvidas
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <button 
              onClick={handleAgendarConsulta}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Agendar via WhatsApp
            </button>
            <button 
              onClick={handleLigar}
              className="bg-[#9ACD66] hover:bg-[#8BB85C] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </button>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Informações de Contato</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">WhatsApp</h4>
                <p className="text-gray-600">{contactConfig.displayPhone}</p>
                <p className="text-sm text-gray-500">Atendimento via mensagem</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Telefone</h4>
                <p className="text-gray-600">{contactConfig.displayPhone}</p>
                <p className="text-sm text-gray-500">{contactConfig.businessHours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Julia Cruz</h3>
              <p className="text-gray-400">Nutricionista Especialista em Emagrecimento</p>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://instagram.com/juliacruz.nutri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-[#9ACD66] hover:text-white transition-colors duration-300 group"
              >
                <Instagram className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300" />
                @juliacruz.nutri
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Julia Cruz Nutricionista. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;