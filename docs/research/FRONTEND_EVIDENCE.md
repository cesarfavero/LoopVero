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
- A inspeção da janela local é somente verificação de que o alvo aberto é TheGrok em `127.0.0.1:4180`; não foi usada como fonte de especificação. O launcher agora resolve Electron dentro do workspace e exige um caminho de app existente, para impedir que uma chamada sem alvo abra a página de erro padrão do Electron.


## Composição estática adicional

O rastreio focado de composição, estados de layout, tema e ciclo do composer está em [RENDERER_TRACE.md](RENDERER_TRACE.md). Ele aponta que a estrutura atual da implementação (lista de bots + chat + painel de detalhes) ainda não representa o shell completo baseado em tarefas do original; não promover paridade visual até mapear e implementar essa composição.
