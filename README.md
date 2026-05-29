# Projeto de Automação de Testes E2E - Portal RDV

Este repositório contém a automação de testes de ponta a ponta (E2E) para a funcionalidade de **Login** do **Portal RDV**, desenvolvida utilizando o framework **Cypress** com **JavaScript**.

O objetivo deste projeto é garantir a estabilidade e a segurança do fluxo de autenticação, validando cenários de sucesso (Caminho Feliz), tratamento de erros e resiliência da interface.

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Um gerenciador de pacotes (npm já vem instalado com o Node)

---

## Instalação e Execução

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
   cd seu-repositorio
   ```

2. **Instalar as dependências do projeto:**
   ```bash
   npm install
   ```

---

## Configuração das Variáveis de Ambiente (Credenciais Seguras)

Por motivos de segurança e boas práticas de QA, as credenciais de acesso válidas **não estão salvas no repositório** (configuradas via `.gitignore`). 
Para rodar os testes localmente, você deve configurar o arquivo de ambiente utilizando o modelo fornecido (`cypress.env.example.json`):

1. Na raiz do projeto, localize o arquivo chamado `cypress.env.example.json`.
2. Faça uma cópia deste arquivo e renomeie a cópia para **`cypress.env.json`**.
3. Abra o seu novo arquivo **`cypress.env.json`** e substitua as variáveis fictícias pelos dados reais de teste fornecidos pela empresa:

```json
{
  "User_Company": "Company Name",
  "User_Username": "User Name",
  "User_Password": "User Password"
}
```

*Nota: O arquivo `cypress.env.json` já está listado no `.gitignore` e nunca deve ser comitado. Ele deve permanecer apenas no seu ambiente local.*

---

## Executando os Testes

Após configurar as variáveis de ambiente, você pode rodar os testes de duas maneiras:

### Modo Interativo (Interface Visual do Cypress)
Para abrir o painel visual do Cypress e acompanhar a execução em tempo real:
```bash
npx cypress open
```
*Após o painel abrir, selecione **E2E Testing**, escolha o navegador de sua preferência e clique no arquivo `login.cy.js` para rodar.*
