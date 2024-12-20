// Classe que controla a barra de navegação no modo mobile
class MobileNavbar {
  // O construtor é chamado quando criamos uma nova instância da classe MobileNavbar
  constructor(mobileMenu, navList, navLinks) {
    // Pega o botão/menu (ícone de hambúrguer) da barra de navegação
    this.mobileMenu = document.querySelector(mobileMenu);
    // Pega a lista de navegação (os links do menu)
    this.navList = document.querySelector(navList);
    // Pega todos os links individuais dentro da lista
    this.navLinks = document.querySelectorAll(navLinks);
    // Define a classe "active", que será usada para alternar o estado do menu
    this.activeClass = "active";

    // Garante que o método `handleClick` terá o "this" correto ao ser chamado
    this.handleClick = this.handleClick.bind(this);
  }

  // Método que anima os links da lista de navegação
  animateLinks() {
    // Para cada link, adiciona ou remove uma animação
    this.navLinks.forEach((link, index) => {
      // Se o link já tem uma animação, remove
      link.style.animation
        ? (link.style.animation = "")
        // Senão, adiciona uma nova animação
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3 // O tempo de atraso da animação aumenta para cada link
          }s`);
    });
  }

  // Método que é chamado ao clicar no menu (ícone de hambúrguer)
  handleClick() {
    // Alterna (liga/desliga) a classe "active" na lista de navegação
    this.navList.classList.toggle(this.activeClass);
    // Também alterna a classe "active" no ícone do menu
    this.mobileMenu.classList.toggle(this.activeClass);
    // Chama o método para animar os links
    this.animateLinks();
  }

  // Método que adiciona o evento de clique ao botão/menu
  addClickEvent() {
    // Quando clicarmos no botão/menu, chama o método `handleClick`
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  // Método principal que inicializa a classe
  init() {
    // Verifica se o botão/menu existe na página (evita erros)
    if (this.mobileMenu) {
      // Adiciona o evento de clique
      this.addClickEvent();
    }
    // Retorna a própria instância da classe (para encadeamento, se necessário)
    return this;
  }
}

// Cria uma nova instância da classe MobileNavbar
const mobileNavbar = new MobileNavbar(
  ".mobile-menu", // Seleciona o botão/menu pelo seletor CSS
  ".nav-list", // Seleciona a lista de navegação pelo seletor CSS
  ".nav-list li" // Seleciona todos os links individuais pelo seletor CSS
);

// Inicializa o menu mobile chamando o método `init`
mobileNavbar.init();
