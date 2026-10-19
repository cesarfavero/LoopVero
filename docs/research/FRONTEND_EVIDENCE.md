# Renderer original: evidência inicial

## Proveniência e método

- Referência: `Grok Bot.app/Contents/Resources/app.asar`; `CFBundleShortVersionString` de `Info.plist`: `0.71.2`.
- SHA-256 de `app.asar`: `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`.
- O cabeçalho ASAR foi lido estaticamente (JSON a partir do offset 16). Os offsets apontaram para conteúdos lidos diretamente do arquivo, sem executar código original e sem modificar os artefatos. O inventário contém 668 entradas. Não há source maps identificados neste levantamento.
- `GrokBotResearch/sand/` contém Sand Host e dependências auxiliares; o renderer está no ASAR da aplicação original. O diretório de implementação ainda não existia neste levantamento.

## Entrada e composição

`dist/renderer/index.html` contém `#root`, shell de boot transparente `#sand-boot-shell`, título `Grok Bot`, viewport responsivo e CSP. Carrega `assets/index-wlkGG389.js`, quatro módulos `index.eager-*`, `assets/index-DkV65EBE.css` e `chunk-prompt-editor-A2oxbQX4.js` como preload. Isto estabelece a composição inicial, mas não identifica sozinho todas as rotas ou o estado inicial de usuário autenticado.

O CSS principal tem 701.663 bytes. Declara camadas `reset`, `anysphere.tokens`, `anysphere.scss`, `anysphere.stylex`, `glass.scss`, `glass.stylex` e `overrides`. A família de classes `sand-*` e tokens `--sand-*` aparecem amplamente. Há também tokens `--cursor-*` e classes `ui-*`; não se deve substituir automaticamente todos por um único tema simplificado. O root CSS declara stack sans baseada em `--cursor-font-family`/VS Code e fallback de sistema; XVF/XVF Mono estão declaradas como famílias separadas, sem evidência de que sejam a fonte global padrão.

Tokens confirmados em `assets/index-DkV65EBE.css`:

| Token | Valor encontrado | Leitura |
| --- | --- | --- |
| `--sand-bg-pane` | `#ffffff` | Paleta clara definida em `:root,.sand-1wuigm2` |
| `--sand-bg-chrome` | `#fcfcfc` | Chrome da paleta clara |
| `--sand-bg-sidebar` | `#f5f5f5` | Sidebar da paleta clara |
| `--sand-bg-primary` | `#1c1c1c` | Superfície/ação primária nessa paleta |
| `--cursor-accent` | `#599CE7` | Token de camada UI herdada |

O CSS contém `@font-face` para `XVF` (200–800), `XVF Mono` (200–800) e `cursor-icons`. Os arquivos correspondentes estão em `dist/renderer/assets/` (`X-VF-C7NyO54W.woff2`, `XMono-VF-K4lk0ar0.woff2`, `cursor-icons-16-gwXtdAvu.woff2`). Há referência a `SF Pro` como fallback em classes `ui-*`. O CSS revela `--sand-sidebar-width` variável, e um cálculo responsivo usa fallback de `280px` para sidebar e `424px` para largura mínima do chat; são pistas de layout, ainda sem verificação por screenshot.

## Superfícies apontadas por módulos

O inventário do ASAR mostra chunks dedicados a `chunk-onboarding-flow-Bvw-idpK.js`, `chunk-prompt-editor-A2oxbQX4.js`, `chunk-automation-detail-panel-C7pwVm8D.js`, `chunk-thread-card-Bd1pjUBX.js` e `chunk-computer-screen-preview-LY_WYUeq.js`. Existem dezenas de `chunk-chat-*`, `chunk-settings-*` e `chunk-agents-*`, além de `chunk-team-bot-*`, `chunk-cloud-agent-card-elevated-*`, `chunk-box-desktop-modal-*`, `chunk-transcript-markdown-*`, `chunk-voice-memo-bubble-*` e `chunk-auto-review-*`.

Estes nomes evidenciam código empacotado para essas superfícies; não provam que todas sejam alcançáveis para toda conta, nem seus detalhes de interação. O chunk de preview de computador contém classes `sand-computer-cursor-overlay`, `sand-computer-cursor-glyph` e variável `--sand-computer-preview-fit`, compatíveis com uma prévia de tela e cursor sobreposto. A validação exata requer trace de módulos/contratos e observação do aplicativo original.

## Próximas medições para paridade visual

1. Capturar screenshots da aplicação original nas telas de onboarding, conversa vazia, conversa ativa, sidebar, agentes, automações, configurações e computer use, com largura/altura e tema registrados.
2. Comparar geometria, tipografia, cores, densidade, estados de hover/foco, animações e overflow por tela. Não inferir dimensões definitivas de um fallback CSS.
3. Rastrear imports/exportações de chunks centrais e contratos renderer ↔ preload ↔ Electron main antes da implementação dos fluxos.
4. Registrar as variantes claras/escuras e estado de autenticação com evidência visual; a paleta clara no CSS não demonstra qual tema é padrão.

## Complemento desta implementação

- REA voltou a analisar o ASAR original (`055b087a…de0e860`) selecionando os dois bundles React centrais. A operação foi estática, com `record-and-continue` por seis divergências de integridade em arquivos nativos desempacotados. Evidence pai `ev_73141b05e408feca636666170d2df9710b6a658e805e38b866739df58f402b42`; resumo `ev_45bc5776ee8506be5cb9d85a01d5b91b3ffd66e76cf0bd5b21ca46279b55f892`. O resumo confirma 610 arquivos não selecionados e grafos semânticos parciais; os dois bundles React centrais excederam o orçamento de resultado restante. Não usar ausência de arestas como ausência de funcionalidade.
- A implementação local agora carrega os arquivos XVF e XVF Mono que acompanham o app original, copiados para `apps/desktop/src/assets/` com autorização explícita do usuário para o build de teste local. Os hashes de origem podem ser recuperados do índice ASAR; esses arquivos são assets de referência autorizados para esta cópia de teste, não uma conclusão sobre redistribuição pública.
- O CSS da implementação foi ajustado para a paleta clara encontrada no código original (`#fff`, `#fcfcfc`, `#f5f5f5`, texto `#1c1c1c`, accent `#599CE7`) e mantém a stack global sans baseada no sistema, conforme o root CSS original. As fontes XVF/XVF Mono do artefato estão incluídas no app de teste, mas não foram forçadas como família global sem evidência de uso global no original. Isso corrige a contradição anterior de superfícies escuras, mas não estabelece fidelidade de layout ou paridade visual: a estrutura React ainda é uma implementação provisória e faltam traces de componentes/estados e comparação controlada com a aplicação original.
- Captura controlada por REA em 2026-10-19 (`capture_electron_scenario`, Evidence `ev_be59a2e523c4956c400709516ebf9de8a67b3b55d7d5e4fcdb8a4ba3855f86cd`) usou o executável Electron absoluto do workspace, entrada `apps/desktop/src/main.cjs`, raiz `apps/desktop` e perfil temporário. Observou janela visível `TheGrok` em `http://127.0.0.1:4180/`, carregamento concluído e invocações IPC `state:load` e `provider:status`, sem erro nesses handlers. A captura foi parcial: o hook não instrumenta o contexto preload/renderer, os valores IPC não foram retidos e não houve envio de mensagem; não comprova o fluxo completo nem paridade visual. O launcher existente resolve Electron dentro do workspace, valida o caminho da entrada e não tem fallback para abrir a página padrão. Uma seleção CUA posterior apontou para um Electron preexistente do GG-Bot; essa janela não foi iniciada pelo launcher TheGrok e não é evidência sobre ele.


## Composição estática adicional

O rastreio focado de composição, estados de layout, tema e ciclo do composer está em [RENDERER_TRACE.md](RENDERER_TRACE.md). Ele aponta que a estrutura atual da implementação (lista de bots + chat + painel de detalhes) ainda não representa o shell completo baseado em tarefas do original; não promover paridade visual até mapear e implementar essa composição.

## REA e transcript tipado: nova análise

Em 2026-10-19, REA refez a análise estática do ASAR focando `index-wlkGG389.js` e `index.eager-app-DSuGVQNC.js`: Evidence de análise pai `ev_8d917749d8bac2f07b1b2affdfde39c7e3454fd360752a732e66831114c3bcb9`, resumo `ev_e6a0b5cab857987a144d6f620bd27616df6c3d92aa54987c652e539c380e55ae`. O hash ASAR confere com o inventário. A análise parseou os bundles como texto inerte, mas deixou 610 arquivos não selecionados; ambos os módulos centrais excederam o orçamento de grafo e a cobertura resultante é parcial. Seis artefatos nativos desempacotados têm bytes que contradizem metadados de integridade e foram excluídos como base de conclusões.

No código minificado do bundle principal, `tool-call` é uma variante de entry do outline com `id`, `status` e `summary`; seu nome deriva de `name`, com ícones `loading` para pending, `x-circle` para failed e `wrench` nos demais estados. A linha do outline pode expandir detalhes. Um renderer de transcript retorna `null` para essa variante. O coordinator contém um validador mais amplo com `name`, `argumentsJson`, `atMs` e resultado opcional. São observações estáticas sobre renderer/coordinator, não prova de exibição em runtime nem protocolo de ferramenta do CodexRouter. Referência detalhada: [CHAT_PROTOCOL.md](CHAT_PROTOCOL.md).
