# Academia — App PWA

PWA de treinos: cadastro de treinos, execução guiada com cronômetro de
descanso, histórico de sessões, estatísticas, sistema de nível/XP,
conquistas, acompanhamento de peso corporal e fotos de progresso.

Este é um **site estático puro** — HTML, CSS e JavaScript, sem
framework, sem bundler e **sem nenhum backend**. Todos os dados do
usuário (treinos, histórico, peso, notas, fotos) ficam salvos
localmente no próprio navegador de quem usa o app.

## Estrutura do projeto

```
index.html            → HTML principal (única página do app)
manifest.json          → Manifesto do PWA (nome, ícones, cores)
service-worker.js      → Cache offline (funcionamento como PWA)

css/
  style.css            → Estilo visual do app

js/
  app.js               → Toda a lógica do app

assets/icons/          → Ícones do PWA
```

## Como rodar localmente

Como é um site estático, qualquer servidor local simples funciona.
Por exemplo, com o Node.js instalado:

```bash
npx serve .
```

Ou, se preferir, basta abrir o `index.html` diretamente no navegador
(algumas funcionalidades de PWA, como o Service Worker, exigem que o
arquivo seja servido por http/https, e não aberto direto do disco).

## Como publicar

Por ser 100% estático, este projeto pode ser publicado em qualquer
serviço de hospedagem de sites estáticos, sem nenhuma configuração de
variável de ambiente ou função de servidor — por exemplo: Vercel,
Netlify, GitHub Pages ou Cloudflare Pages. Basta apontar o serviço
escolhido para a raiz deste repositório.
