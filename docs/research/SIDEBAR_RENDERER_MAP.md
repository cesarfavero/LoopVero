# Mapa de renderer: sidebar e roster de agentes

Data da inspeção: 2026-10-19. Este documento mapeia código estático do Grok Bot 0.71.2 para guiar a reconstrução depois da fase de descoberta. Não usa screenshots como especificação e não afirma que uma branch foi vista em execução.

## Identidade e método

- Referência: `Grok Bot.app/Contents/Resources/app.asar`, SHA-256 `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`.
- Renderer entry: `.research/reference-electron/dist/renderer/assets/index-wlkGG389.js`, SHA-256 `5194bef4ba4cbe4ffb697273f1458b7bca3733fb35d3c4c8d165fd4dbc9d0154`.
- App chunk: `.research/reference-electron/dist/renderer/assets/index.eager-app-DSuGVQNC.js`, SHA-256 `cb1f20a05ee14c4e6c8f5fe37e7cad7074ed432b7f67ca29b3fd928042f1547b`.
- CSS: `.research/reference-electron/dist/renderer/assets/index-DkV65EBE.css`, SHA-256 `30beefeee1dd1b707732f529954a6ab7b9be5bbb43fa2ec4ac9525c4dee7ed5a`.
- REA análise focada mais recente do entry: `ev_7f2a2ebe72e6f23a657dacb05b450753baed3b96acbe85285fc5ca4f5da1eb3a`; resumo `ev_44e782203f10f68167620a2d81ebc8831de8263506ec91e245a1b84f231c6507`. REA parseou o arquivo selecionado (783.818 nós AST, zero falhas), mas registrou limite de orçamento para reter seu grafo semântico. Abaixo, offsets e relações de JSX foram verificados por leitura/parse AST local do bundle extraído; não são observação de runtime.
- REA seleção focada de `chunk-list-item-BCf5Y_X6.js` e `chunk-team-bot-line-render-WvYPGoAy.js`: Evidence `ev_60d3637a40107c17c27872f6c4d3f5dc708f68cb9aeed424905cf6680d46f025`; resumo `ev_c72607b02bacb850287fe691e6f624b55d2ba55f625cb2fd813b63adeb93c02b`. Os dois arquivos (380.443 bytes, 3.790 nós AST, 27 findings) foram parseados sem falha; escopo da aplicação e semântica continuam parciais porque a análise foi deliberadamente selecionada. `chunk-list-item` contém componentes genéricos de botão/list item; a linha do roster abaixo é a função `Nv` no entry, não foi confundida com aquele chunk.

## Árvore observada no código

| Função compilada / intervalo no entry | Papel sustentado pelo código | Relação principal |
|---|---|---|
| `MJ`, 2.223.994–2.256.971 | Shell principal | Compõe estado do workspace, agente atual, transcript, composer, tarefas, computador, painel de informação, dialogs, busca e sidebar. |
| `Jtt`, 2.147.363–2.150.997 | Derivação do estado de roster/sidebar | Prepara agentes visíveis/ocultos, pins, seções, cursores e estados de indisponibilidade, wake e recuperação para o shell. |
| `xq`, 583.107–595.266 | Sidebar/rail | Recebe estado e handlers; monta cabeçalho, ações, lista, rodapé e resize handle. O `aside` tem rótulo acessível, teclado, ref e estilo geométrico dinâmico. |
| `ED`, 477.568–479.905 | Header de sidebar e ações normais/seleção | Em estado normal mostra collapse condicional, search e new bot; ao selecionar itens troca para mover a seção, delete e clear. |
| `kq`, 575.262–576.487 | Ações de seleção no rail | Delete com estado disabled, clear selection e tooltips. |
| `cq`, 543.858–544.912; `uq`, 544.912–545.743 | Status/retry banners | Aviso de conexão do roster e falha ao salvar seções; retry muda de disabled/conteúdo conforme `isRetrying`. |
| `yq`, 576.487–577.651 | Ações compactas | New Bot e collapse em botões circulares com tooltip; aparece quando collapsed e sem seleção. |
| `bD`, 450.109–453.646 | Rodapé da sidebar | Perfil/account, sign-in/out, update pill/dot, Settings e shortcut Plugins; layout muda de coluna para linha quando colapsado. |
| `gq`, 555.188–574.498 | Lista de agentes e interações de roster | Coordena itens virtuais, pins, seções, tarefas, estados de carregamento/erro, seleção em lote e operações de drag-and-drop. |
| `vq`, 579.001–582.712 | Adaptador de uma linha de agente | Deriva estado visual/ações por agente e passa dados para `VD`; também adiciona as linhas de tarefas quando abertas/expandidas. |
| `VD`, expressão compilada em 496.363–507.814 | Componente visual e interativo da linha/tile | Recebe `agent`, nome, estado de host, foco/cursor, apresentação (`expanded`, `pinned`/tile/collapsed), pin, drag, seleção, criação, seção e callbacks. |
| `Nv`, 262.523–270.943 | Primitive visual do roster | Constrói a linha clicável a partir dos mapas atômicos `Ea` e encaminha avatar, título/edição, preview, tempo, badge, marcador, seleção e overlay de ações. `VD` → `Nv` é uma chamada JSX direta dentro do entry. |
| `YD`, 522.653–524.044 | Grupo de pins | Cabeçalho expansível com contagem e itens de agente em lista. |
| `aq`, 533.143–536.713 | Grade/área de tiles fixados | Zona de drop, grid de pins, abertura/animação e apresentação de tiles. |
| `ZD`, 519.391–522.570 | Lista agrupada por seções | Renderiza cabeçalhos e grupos, collapse e reorder de seções; controla ghost/drop visual. |
| `QD`, início em 524.243; `Qv`, início em 525.244 | Grupos de tarefas por agente | Cabeçalho dobrável e linhas de task/thread por agente. Offsets corrigidos pela leitura do membro íntegro do ASAR; ver [mapa de tasks e threads](TASK_THREAD_SOURCE_MAP.md). |
| `hq`, 554.154–555.146 | Wrapper de lista arrastável | Zona de drop para agentes, adiciona shield durante drag. |
| `bq`, 577.651–578.749 | Alça de resize | `role=separator`, orientação vertical e gesto pointer para resize. |

Os nomes acima são símbolos minificados locais; não são nomes recuperados do código-fonte original. Os filhos `VD` e `xq` pertencem ao entry; não se inferiu um módulo independente pelo nome.

## Dados, ações e estados ligados

`xq` passa ao `gq`: agentes, pins, estado colapsado, indicador de criação pendente, seções resolvidas, agentes ocultos, threads e contagens não lidas, grupos de threads dobrados, estado do roster/host, privacidade, wake/retry/recover, e callbacks de seleção, abertura, prefetch, pin, reorder, edição de seção e recuperação. A lista possui navegação por teclado e foco/cursor de ciclo; a interface não se reduz a uma lista estática.

`ED` é o header principal e a primeira linha visível: o seu mínimo é `--sand-titlebar-block` (fallback 38 px), com 12 px de padding vertical e 16 px horizontal; quando o shell está compactado usa `--sand-titlebar-collapsed-block` (8 px) e padding lateral 4 px. O layout normal é flex alinhado ao centro e `space-between`; Search e New Bot estão ligados a callbacks reais, enquanto o botão de collapse é condicionado por plataforma/preferência. Seleção substitui essa fileira por ações de seção/delete/clear. `kq` mantém delete e clear em coluna, centralizados, gap 2 px e margin-bottom 12 px.

O banner de reconnect e o de erro de persistência de seções são `role=status`, uma linha flex com gap 6 px, min-height 28 px, texto XS/line-height SM e ellipsis. O retry fica disabled durante a tentativa. A versão compacta `yq` empilha botões circulares e tem animação de reveal de 200 ms/easing `cubic-bezier(.22,1,.36,1)`. O rodapé `bD` usa coluna com gap 2 px e padding 16 px; no modo colapsado passa para linha, gap 8 px e padding 8 px. Ele liga login/logout, avatar/account, ação de Settings, Plugins, estado de update e affordance de hover/focus; a conta também tem fluxo de completar nome de perfil.

`gq` escolhe caminhos agrupados ou não agrupados. `ZD` cuida da apresentação por seções; `YD` e `aq` tratam pins; `QD` trata as tarefas relacionadas a cada agente. Há alvos distintos de drag identificados como `pinned-tile`, `agent`, `pin-grid`, `agent-list`, `section` e `section-body`. O código lida com mover/reordenar, fixar/desafixar e drag overlay em portal. Há também navegação a threads não lidas e conteúdo rolável com fades superior/inferior. A disponibilidade dos caminhos depende de estado/feature gates; não se afirma que todos aparecem juntos.

`vq` define a apresentação da linha como `collapsed`, `pinned` ou `expanded`, conforme estado e posição. Encaminha para `VD` estado ativo, seleção múltipla, foco de teclado/cursor, pin e drag, rótulo/nome temporário durante criação, status de host, preview e seção. `VD` usa `Nv`, cujo objeto CSS-in-JS local `Ea` descreve o root e cada variante. O root é button-like: posição relativa, display flex, min-width zero, sem borda, fundo transparente, radius token, tipografia herdada, foco outline controlado e transições de transform/width/padding. A variante `expanded` dispõe conteúdo em linha, alinha ao centro, usa gap do token de avatar e largura fluida; a variante `collapsed` mantém linha com gap 8 px e largura/altura de 54 px; a variante `pinned` vira coluna, gap 6 px, largura/altura 100% e padding vertical/horizontal próprios. A classe selecionada define `--sand-bg-active` no fundo e overlay do avatar. A regra CSS `@container sand-sidebar (max-width: 130px)` substitui a largura fluida de `expanded` por 54 px; portanto, a condição compacta também é derivada da largura disponível, não apenas do breakpoint mobile.

O primitive separa avatar, body, título, nome, badge, tempo, preview, caption, trailing action region e corner status. O body cresce/encolhe com overflow oculto; título fica em linha com gap 6 px, nome trunca com ellipsis, preview usa altura mínima 18 px, cor semântica secundária e ellipsis. A região trailing fica posicionada absolutamente com largura 72 px, alinhada ao fim e com pointer-events desligados na camada; animação de reveal dura 130 ms com easing `cubic-bezier(.22,1,.36,1)`. O container do avatar tem opacidade controlada por `--sand-agent-item-avatar-opacity`; status corner suporta marcador, atividade, ring e main-agent. O modo reduced-motion tem classe com duration zero. Esses valores foram associados por nome de classe nos mapas estáticos (`Ea` em 257.250–261.578 e o seletor de container no stylesheet); ainda falta comparar o resultado renderizado em estados equivalentes.

O corpo de `VD` trata preview de draft/awaiting response, indicador de digitação/atividade, última entrada, metadados/badges de agente/equipe e ações contextuais; clique simples abre, modificadores selecionam, Shift seleciona intervalo, e o menu contextual permite renomear. Tiles e linhas usam avatares em tamanhos distintos, badge e marcadores com variantes de layout. Estes detalhes vêm do fluxo estático e requerem confirmação de aparência em cenário controlado.

## Geometria recuperada

No app chunk, constantes associadas ao layout são `Nd=280`, `li=240`, `ol=400`, `yR=88`, `Dd=320`, `bi=280`, `il=424`. O estado inicial codificado `SR={expandedWidth:Nd,isCollapsed:!1}` dá fallback expandido de 280 px e não colapsado; preferências persistidas podem alterar o valor efetivo.

O setter geométrico `nGe` clampa largura entre 240 e 400 px. A largura colapsada é 88 px. O layout mede o conteúdo disponível no container/window e a largura requerida pelo painel de informação; se faltar espaço, colapsa a sidebar (e, em limite menor, também pode marcar colapso no estado). Ao expandir, largura é limitada pela largura disponível e pelo mínimo/máximo. `xa` escreve `gridTemplateColumns: "<largura>px minmax(0, 1fr) auto"`, sincroniza `data-sidebar-collapsed`/`data-sidebar-animating` e define `--sand-sidebar-width` no `.sand-info-pane` quando presente. `bq` começa pelo `getBoundingClientRect().width` do pai e deriva o novo valor do delta de `clientX`, com limite passado ao helper de resize. Portanto, os valores por conta/janela podem diferir do fallback.

O shell usa CSS atômico para flex coluna, dimensões mínimas, borda de fim, fundo semântico sidebar e container query `sand-sidebar`; o elemento raiz também recebe uma classe semântica `sand-agents-sidebar`. As classes hashed possuem regras no stylesheet minificado e foram resolvidas para as propriedades principais desta superfície, inclusive a regra de container compacto da linha. Segue pendente catalogar todas as declarações e cascatas para estados de pins, drag/drop, foco/hover, grupos, skeleton/error/recovery e controles do header/footer. Os nomes semânticos `sand-agents-list__list`, `sand-agents-list__rows`, `sand-agents-sections`, `sand-agents-section`, `sand-agent-item` e `sand-sidebar-resize-handle` são hooks no JSX, sem regra literal homônima no CSS.

| Região | Regras recuperadas do CSS atômico e callsite |
|---|---|
| `aside` da sidebar (`xq`) | `display:flex`, coluna, gap 0, min-width/min-height 0, padding 0; borda lógica final de `.5px solid var(--sand-border-tertiary-translucent)`; `background:var(--sand-bg-sidebar)`; largura 100%; container `sand-sidebar` do tipo inline-size; position relative e z-index 1. |
| Header normal/compacto (`ED`) | Flex, align center, space-between; min-height token titlebar/collapsed-titlebar, padding block 12/0 px e inline 16/4 px. Nova ação fica flex end; group tem gap 8 px. |
| Selection actions (`kq`) | Flex coluna, align center, gap 2 px, margin-bottom 12 px. |
| Reconnect/section error (`cq`, `uq`) | Flex, align center, gap 6 px, min-height 28 px, horizontal padding 12/4 px, texto semântico secundário em XS e single-line ellipsis. |
| Ações compactas (`yq`) | Flex coluna, align center, padding-bottom 6 px, reveal animation 200 ms; botões de 30×30 px, radius 9999 px. |
| Footer (`bD`) | Expanded: flex coluna/gap 2 px, padding 0 16px 16px; collapsed: flex row/gap 8 px e padding lateral/baixo 8 px. Perfil, auth, update, settings e plugin actions compartilham o slot. |
| Grupo de agentes | Flex coluna, min-width 0; lista com alinhamento start e row-gap 4 px; espaçador tem tamanho calculado pelo virtualizador. |
| Pin group e tiles | Grupo em coluna com gap 4 px e padding-top 4 px; tile area permite overflow horizontal visível, clip vertical e clip margin 16 px; pin grid muda zona de drop/drag e aplica placeholders/ghosts. |
| Resize hit target | Posição absoluta, top/bottom 0, inset inline-end `-6px`, largura 12 px, fundo transparente, cursor `col-resize`, `-webkit-app-region:no-drag`, `touch-action:none`; elemento separator vertical acessível. |
| Agent row (`Nv`) | Root button-like e variantes estão resumidos acima; a regra `@container sand-sidebar (max-width: 130px)` estreita para 54 px o root de layout expanded que normalmente é fluido. |

Classes atomizadas foram relacionadas com os seletores exatos em `index-DkV65EBE.css`, não inferidas pelo nome do hash. A tabela resume propriedades diretamente declaradas; cascade com estilos inline, media/container queries adicionais e estados condicionais deve ser lida junto com cada callsite antes de reproduzir uma variante.

## Limites restantes antes de implementar esta superfície

1. Associar as regras restantes das classes atômicas CSS-in-JS aos callsites, inclusive variantes visuais de pin, seleção, drag, foco, hover e estados de indisponibilidade.
2. Fechar os componentes internos de `VD` (menu, badge, avatar), tasks e detalhes do popover/header actions/footer profile.
3. Rastrear a origem e migração dos valores persistidos, breakpoints/medidas auxiliares e combinações com a largura do info pane.
4. Mapear condições do feature gate e dos estados de privacidade, unavailable, waking e recovery até os componentes apresentados.
5. Depois de fechar o mapa de código e CSS, reconstruir a superfície e comparar uma execução controlada; ainda não declarar paridade visual.

## Preferências de layout recuperadas do app chunk

O código de `index.eager-app-DSuGVQNC.js` declara `Kf={slice:"ui-layout",schemaVersion:3,scope:"client-persisted",accountSensitive:false}`, `SR={expandedWidth:280,isCollapsed:false}` e as chaves `sand.sidebar.width` / `sand.sidebar.collapsed`. No entry `index-wlkGG389.js`, `xq` consome o hook de layout e instala `ResizeObserver`; `bq` cria uma alça `role="separator"` e deriva a largura do delta de `clientX`. O map anterior identifica o clamp em 240–400 px e o modo compacto em 88 px. A REA Evidence `ev_02013c39590360578ae0070cbddbf1fc21b89cc1fda5d8f9fdb657da7906b518` confirma identidade do diretório extraído e parse sem falha do app chunk, mas seu grafo semântico é parcial; estes detalhes foram conferidos no código estático extraído e não são prova de estado em execução.

## Iteração local em 2026-10-19

Uma análise REA selecionada de `index.eager-app-DSuGVQNC.js` (parent `ev_02013c39590360578ae0070cbddbf1fc21b89cc1fda5d8f9fdb657da7906b518`) parseou 450.196 nós AST sem falhas. A seleção cobriu um dos 612 arquivos inventariados; o grafo semântico excedeu o orçamento e permaneceu parcial. Essa análise foi usada como evidência de identidade/parse, não como prova de execução nem como confirmação de que os componentes de roster ficam nesse chunk.

Na implementação local, a linha de agente usa a última mensagem como preview, omite a descrição genérica sem mensagem e marca `id === "primary"` como `Main Bot`; o rodapé põe perfil e `Connect apps` na mesma linha. A largura expandida agora segue o contrato estático do original: 280 px inicial, ajuste por ponteiro/teclado entre 240–400 px, modo compacto de 88 px, e persistência local por `sand.sidebar.width` / `sand.sidebar.collapsed`. O original guarda essas preferências no slice `ui-layout` (`schemaVersion: 3`, `scope: client-persisted`, `accountSensitive: false`); a réplica usa localStorage do perfil Electron, portanto o comportamento é equivalente na largura/colapso, mas o formato do store ainda não foi portado. Pins, seções, seleção, recovery, roster virtualizado e adaptação automática do shell continuam pendentes. Computer, connector, dictation e voice chat ainda não estão ligados.

A inspeção do bundle Main localizou o helper `zF`: no macOS o original define `frame:true`, `titleBarStyle:"hiddenInset"` e `trafficLightPosition:VF`; veja [contrato desktop](DESKTOP_CONTRACT.md#janela-e-chrome-nativo-no-macos). A réplica preserva `hiddenInset`, mas o valor dinâmico `VF` ainda não foi recuperado com confiança; a captura nativa atual mostra traffic lights que não aparecem na janela original, portanto a paridade desse detalhe segue aberta. A tela vazia local e os itens locais `New Bot` ainda não representam o roster e o estado de conversa do original. Nenhuma paridade foi reivindicada.

