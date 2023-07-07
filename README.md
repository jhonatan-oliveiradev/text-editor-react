# Editor de Texto em React

![Preview](./public/preview.png)

Este é um editor de texto desenvolvido em React utilizando as seguintes tecnologias: Typescript, ViteJS, Tiptap, Tailwindcss e pnpm.

## Requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (v14 ou superior)
- pnpm (v6 ou superior)

## Configuração do Projeto

1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/jhonatan-oliveiradev/text-editor-react.git
    ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
    ```

3. Instale as dependências utilizando o pnpm:

   ```bash
   pnpm install
    ```

## Executando o Projeto

1. Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:

  ```bash
   pnpm run dev
  ```

   Isso iniciará o servidor de desenvolvimento em <http://localhost:5173>.

2. Abra o seu navegador e acesse <http://localhost:5173> para visualizar o editor de texto.

## Build de Produção

Se você deseja criar uma versão otimizada para produção do seu editor de texto, siga as etapas abaixo:

1. Execute o seguinte comando para criar os arquivos otimizados:

   ```bash
   pnpm build
    ```

   Isso criará uma pasta `dist` com os arquivos otimizados para produção.

2. Você pode implantar a pasta `dist` em um servidor web para disponibilizar o seu editor de texto.

## Personalização

O editor de texto utiliza o framework CSS Tailwindcss, que permite a personalização dos estilos. Você pode editar os estilos existentes ou adicionar novas classes no arquivo `tailwind.css`.

## Referências

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [ViteJS](https://vitejs.dev/)
- [Tiptap](https://www.tiptap.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.js.org/)

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
