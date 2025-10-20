# rede-social-dev-prototipo

Projeto front-end simples usando Bootstrap 5, Sass e Vite.

Principais arquivos
- index.html — estrutura HTML principal, contém o elemento com id `#theme` usado para alternar tema.
- main.js — script principal; o handler de alternância de tema é o símbolo `themeSwitcher`.
- styles.scss — ponto de entrada Sass que importa Bootstrap e contém estilos customizados.
- package.json — scripts e dependências.
- LICENSE — licença do projeto.
- .gitattributes
- README.md

Instalação e execução
````sh
# instalar dependências
npm install

# rodar em modo dev (Vite)
npm run dev

# build de produção
npm run build
````

Dependências principais
- Bootstrap (JS e SCSS) — configurado nas importações em _bootstrap.scss e incluído em index.html via CDN para os ícones/JS.
- Vite — servidor de desenvolvimento e bundler (scripts em package.json).
- Sass — compilação de SCSS.

Observações
- O botão com id `theme-switcher` em index.html aciona o listener declarado em main.js que alterna o atributo `data-bs-theme` do elemento `#theme` entre "dark" e "light".
