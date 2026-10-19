# Design system original do Grok Bot 0.71.2

## Fonte e método

Referência: `Grok Bot.app/Contents/Resources/app.asar`, SHA-256 `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`. O ASAR foi extraído sem alteração para `.research/reference-electron/` e permanece ignorado pelo Git. O arquivo `dist/renderer/assets/index-DkV65EBE.css` tem 701.661 bytes, 9.305 regras e 351 declarações `--sand-*` (declarações repetidas em seletores e contextos também são contadas); o stylesheet e os recursos de referência não foram incorporados ao produto.

REA `inspect_artifact` confirmou inventário completo de 735 ocorrências. REA `analyze_javascript_application` recebeu seleção de Main, Core, Coordinator e `index.html`: 3 arquivos JavaScript foram parseados, 1.101.592 nós AST percorridos e zero falhas de parse. Cobertura semântica ficou parcial (7.152 incógnitas); Main atingiu limite de stack, Core/Coordinator limites de orçamento e 608 ocorrências ficaram fora da seleção. O resumo REA identificou quatro browser windows, 11 observações de preferências Electron, seis operações IPC dinâmicas e dois locais candidatos de validação do remetente; esses números não demonstram registro ou execução em runtime. As seis divergências de integridade em binários/addons foram marcadas como não confiáveis e não fundamentam as propriedades abaixo.

### Tipografia

| Propriedade | Valor observado | Classe |
| --- | --- | --- |
| Família UI | `--cursor-font-family-sans` resolve para `--cursor-font-family`, fallback `--vscode-font-family`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, sans-serif | Recuperada do CSS |
| Família de marca | `XVF`, fonte variável peso 200–800 | Recuperada do `@font-face` |
| Família monoespaçada | `XVF Mono`, fonte variável peso 200–800 | Recuperada do `@font-face` |
| Pesos semânticos | regular 400, medium 500, semibold 600 | Recuperados |
| Tamanhos | 11, 12, 13, 14, 15, 17, 22 e 26 px (`xxs` até `xxxl`) | Recuperados |
| Line heights | 16, 16, 18, 20, 22, 24, 28 e 32 px (`xxs` até `xxxl`) | Recuperadas |
| Letter spacing | `.005em`, `0`, `0`, `0`, `0`, `-.008em`, `-.012em`, `-.015em` | Recuperados |
| Rendering | antialiasing WebKit ativado | Recuperado |

Os arquivos `X-VF-C7NyO54W.woff2` e `XMono-VF-K4lk0ar0.woff2` da referência têm os mesmos hashes dos dois arquivos já mantidos em `apps/desktop/src/assets/`; as cópias têm SHA-256 `0e287249b246a4fa1b2e87c15a1f95daa831938a44e2c2a0b1a61a0df8b18a43` e `2a5fda92be2d5288468b6e231ca260135acb6e913e77a37634c145eb4d93e341`. Originais permanecem em `.research` e não são reexportados neste documento.

### Paleta clara e estados

Tokens lidos diretamente do CSS: pane `#fff`, chrome `#fcfcfc`, sidebar `#f5f5f5`, hover `#1c1c1c0f`, active `#1c1c1c14`, primary `#1c1c1c`, texto primário `#1c1c1c`, texto secundário `#1c1c1cad`, terciário `#1c1c1c8f`, quaternário `#1c1c1c66`, borda primária `#1c1c1c3d`, secundária `#1c1c1c1f`, terciária `#1c1c1c14`, foco `#1e86fc`. Também são declaradas cores semânticas de sucesso, alerta, perigo e onze famílias de acento. São tokens recuperados, não uma medição da tela inicial nem prova de qual tema aparece no primeiro boot.

Sombras nomeadas no CSS incluem controle `#1c1c1c1f`, card `#1c1c1c09`, popover ambient/key `#1c1c1c1a`, modal ambient/key `#1c1c1c1a` e janela ambient `#1c1c1c8f`. Não associo esses valores a um componente visual específico sem rastrear o seletor/estado correspondente.

### Geometria e componentes

| Propriedade | Valor observado | Classe |
| --- | --- | --- |
| Largura mínima do chat | 424 px (`--sand-chat-min-width`) | Recuperada como token, aplicação do layout precisa de trace do componente |
| Item de agente | gap de avatar 8 px; gap de título 0 px; radius 10 px | Recuperada |
| Transcript | line-height de prosa 22 px, bubble radius 18 px | Recuperada |
| Menu | row gap 4 px; altura 30 px; line-height 18 px; radius 12 px; row radius 6 px | Recuperada |
| Menu de novo chat | radius 14 px; row radius 8 px | Recuperada |
| Toolbar | `--sand-titlebar-block`, fallback 38 px | Recuperada com valor dinâmico/fallback |
| Sidebar | fallback expandido 280 px; resize 240–400 px; colapsado 88 px; `--x---sand-sidebar-width` | Recuperado do app chunk e dos setters de layout; largura efetiva pode vir do estado persistido e da disponibilidade da janela/info pane |
| Shell principal | grid base `280px minmax(0,1fr) auto`; transcript/chat mínimo 424 px; titlebar usa fallback 38 px e variantes CSS de 44/52 px | Recuperado da composição `l9`/`ZQ` e das classes atomizadas; app chunk pode substituir a largura da sidebar conforme estado/janela |
| Glyph | nudge vertical 1.5 px | Recuperado |

CSS global bloqueia seleção de texto, reabilitando seleção em inputs, textareas e contenteditable. Foco visível usa outline de 2 px com token azul; há tratamento de forced-colors e reduced-motion. Transições observadas incluem 120 ms/ease-out em seletores gerados; não generalizar para todas as animações. O stylesheet também define marcação de transcript, busca, menus, overlays, botões e controles, porém seus estados precisam ser relacionados aos módulos/componentes antes de especificar uma tela.

Os mapas de código da [sidebar/roster](../research/SIDEBAR_RENDERER_MAP.md) e do [shell/transcript](../research/RENDERER_TRACE.md) relacionam os valores acima aos componentes e propriedades atomizadas. A sidebar recupera a container query `sand-sidebar (max-width: 130px)` e estados base `expanded`, `collapsed` e `pinned`; o shell mapeia a grid principal, mínimo do chat e estados do titlebar. Os valores são contratos estáticos de CSS/layout, não dimensões medidas de uma sessão original nem prova do tema ou preferência efetiva de uma conta.

### Assets, camadas e responsividade

O HTML do renderer pré-carrega `cursor-icons-16-gwXtdAvu.woff2`, importa CSS único e bundles eager/lazy e usa CSP com fontes self/data, imagens locais/blob/HTTPS e esquemas `sand-*`. O inventário visual inclui `app-icon-C7NKj2u7.png`, logos de conectores e outros recursos; presença no bundle não prova exibição em uma tela específica. A pilha e a hierarquia de overlays ainda não foram recuperadas de maneira exaustiva.

O stylesheet contém regras media-query e referências a variáveis dinâmicas para largura da sidebar e altura do titlebar. Breakpoints efetivos e comportamento em cada tamanho precisam de captura controlada. Nenhuma dimensão estimada ou medida de screenshot é declarada como recuperada nesta etapa.

## Aplicação local dos tokens recuperados

`apps/desktop/src/styles.css` usa tokens de cor, escala tipográfica, line heights, pesos, radius do item de agente e fonte de foco recuperados. É uma aplicação própria dos valores, não uma cópia do CSS original nem uma alegação de paridade. As fontes e assets licenciados autorizados estão copiados para uso no app privado de teste. A geometria da shell local permanece provisória; a comparação visual pós-correção ainda está pendente. Consulte o [inventário dos assets do renderer](../research/RENDERER_ASSET_INVENTORY.md).

### Comparação visual observada em 2026-10-19

Captura válida nesta observação: apenas a janela original Grok Bot 0.71.2, screenshot de 1920×1050, com painel lateral fechado. Não há captura pareada local válida nesta revisão; a janela Electron acessível ao controle de UI é o app padrão do GG-Bot. A janela TheGrok iniciada pelo executável absoluto do workspace está em processo, mas não apareceu na enumeração de janelas. O transcript original contém dados da conta e não foi salvo no repositório.

O original observado usa sidebar escura, mensagens em bolhas alternadas, usuário à direita em cinza, assistente à esquerda em grafite e composer pill fixado na base do transcript. O texto da conversa parece próximo de 14 px, mas isso não foi medido por pixels; tratar como estimativa. O CSS confirma radius de bolha de 18 px e line-height 22 px. As capturas anteriores não sustentam comparação pareada de larguras.

A inspeção do JSX local revelou avatares, remetente e hora em cada mensagem, cabeçalho com status do CodexRouter e legenda do provedor ausentes no transcript observado. O campo local estava num painel retangular, enquanto o original apresenta cápsula contínua. Fiz uma correção parcial em `apps/desktop/src/styles.css`: tema escuro, bolhas alinhadas por papel e composer cápsula. Build passou, mas a tela local atualizada não foi fotografada, portanto nenhuma semelhança pós-correção está visualmente validada.

Conclusão desta observação: não há prova de paridade. Há evidência visual do original e análise de código que localiza divergências e orienta a correção parcial. A captura pareada equivalente e o diff continuam pendentes. Ver a linha UI-01/UI-02 na [matriz de paridade](../PARITY_MATRIX.md).
## Limites e próximos passos

Esta é uma base do design system recuperado do código, não um guia de paridade visual concluído. Faltam relacionar tokens a componentes React específicos, observar tema e escala efetivos, mapear ícones/overlays/estados e produzir screenshots pareados com viewport, conteúdo e escala iguais. As cópias autorizadas servem ao app privado de teste; sua inclusão no build não equivale à distribuição do produto.
