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

Capturas válidas nesta observação: janela original Grok Bot 0.71.2 e janela local do workspace via controle nativo, ambas exibidas em 1920×1050. A local usa perfil de desenvolvimento com mensagens sintéticas; a original contém conversa real e não foi salva no repositório. Estados e conteúdo não estão pareados, então não cabe diff pixel a pixel.

O original observado usa sidebar escura, mensagens em bolhas alternadas, usuário à direita em cinza, assistente à esquerda em grafite e composer pill fixado na base do transcript. O CSS confirma radius de bolha de 18 px e line-height 22 px. A captura local confirma sidebar/chat em tema escuro, painel fechado por padrão, e composer pill na base. As larguras da sidebar são equivalentes em 280 px nesta viewport. O título interno local agora mostra Grok Bot, mas a barra de menu macOS ainda identifica o shell de desenvolvimento como Electron; os traffic lights nativos também aparecem localmente e não aparecem na captura original. O compositor, o controle roxo de Computer e o avatar de agente ainda diferem. O perfil sintético local confirma mensagens alternadas; revelou texto escuro na bolha cinza do usuário, corrigido para claro. A geometria ainda não está validada em paridade por diferença de dimensão e conteúdo.

O JSX local mantém avatares, remetente e hora no DOM, mas a folha os oculta na apresentação do transcript. A captura local atualizada confirma tema escuro, painel fechado por padrão, composer cápsula e texto claro em ambas as variantes de mensagem. O rodapé foi ajustado para mostrar avatar e Connect apps lado a lado, como na captura original. O item local ainda não reproduz o segundo bot Carlos, e os ícones/ações não estão implementados.

Conclusão desta observação: paridade visual não foi alcançada. As capturas nativas consecutivas usam as janelas corretas e são exibidas em 1920×1050; as quatro mensagens da réplica são sintéticas e a conversa original é real, portanto não cabe diff pixel a pixel. A captura atual confirma usuário à direita e agente à esquerda. A inspeção REA selecionada do ASAR original `ev_83f1a1b126dfafeb121b3d6b6a00ceb12f85927dd5a9db2d21a8aa75935c5653` preserva identidade do artefato e analisa o Main; seis binários nativos com divergência de integridade foram marcados como não confiáveis. A inspeção estática não fecha o valor dinâmico `trafficLightPosition` nem prova runtime. A janela local agora mostra Grok Bot no título de conteúdo; o nome do menu macOS continua Electron por ser executada pelo runtime Electron do workspace, e os traffic lights diferem da captura original. O rodapé agora alinha avatar e Connect apps como no original. O avatar dos agentes, ícones de conectores e controles do compositor ainda diferem. A faixa interna de título/ações agora usa 38 px, fallback recuperado do CSS, sem alegar posição idêntica. Conteúdo, escala do texto e scroll não estão pareados. O launcher local resolve Electron dentro de TheGrok e passa explicitamente `apps/desktop/src/main.cjs`; o Electron padrão visto antes pertence a processo separado iniciado por `GG-Bot`, não a esse launcher. Próximo passo é usar fixture equivalente e o mesmo scroll para diffs por região. Veja UI-01/UI-02 na [matriz de paridade](../PARITY_MATRIX.md).
## Limites e próximos passos

Esta é uma base do design system recuperado do código, não um guia de paridade visual concluído. Faltam relacionar tokens a componentes React específicos, observar tema e escala efetivos, mapear ícones/overlays/estados e produzir screenshots pareados com viewport, conteúdo e escala iguais. As cópias autorizadas servem ao app privado de teste; sua inclusão no build não equivale à distribuição do produto.
