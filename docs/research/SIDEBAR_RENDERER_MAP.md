# Mapa de renderer: sidebar e roster de agentes

Data da inspeção: 2026-10-19. Este documento mapeia código estático do Grok Bot 0.71.2 para guiar a reconstrução depois da fase de descoberta. Não usa screenshots como especificação e não afirma que uma branch foi vista em execução.

## Identidade e método

- Referência: `Grok Bot.app/Contents/Resources/app.asar`, SHA-256 `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`.
- Renderer entry: `.research/reference-electron/dist/renderer/assets/index-wlkGG389.js`, SHA-256 `5194bef4ba4cbe4ffb697273f1458b7bca3733fb35d3c4c8d165fd4dbc9d0154`.
- App chunk: `.research/reference-electron/dist/renderer/assets/index.eager-app-DSuGVQNC.js`, SHA-256 `cb1f20a05ee14c4e6c8f5fe37e7cad7074ed432b7f67ca29b3fd928042f1547b`.
- CSS: `.research/reference-electron/dist/renderer/assets/index-DkV65EBE.css`, SHA-256 `30beefeee1dd1b707732f529954a6ab7b9be5bbb43fa2ec4ac9525c4dee7ed5a`.
- REA análise focada mais recente do entry: `ev_7f2a2ebe72e6f23a657dacb05b450753baed3b96acbe85285fc5ca4f5da1eb3a`; resumo `ev_44e782203f10f68167620a2d81ebc8831de8263506ec91e245a1b84f231c6507`. REA parseou o arquivo selecionado (783.818 nós AST, zero falhas), mas registrou limite de orçamento para reter seu grafo semântico. Abaixo, offsets e relações de JSX foram verificados por leitura/parse AST local do bundle extraído; não são observação de runtime.

## Árvore observada no código

| Função compilada / intervalo no entry | Papel sustentado pelo código | Relação principal |
|---|---|---|
| `MJ`, 2.223.994–2.256.971 | Shell principal | Compõe estado do workspace, agente atual, transcript, composer, tarefas, computador, painel de informação, dialogs, busca e sidebar. |
| `Jtt`, 2.147.363–2.150.997 | Derivação do estado de roster/sidebar | Prepara agentes visíveis/ocultos, pins, seções, cursores e estados de indisponibilidade, wake e recuperação para o shell. |
| `xq`, 583.107–595.266 | Sidebar/rail | Recebe estado e handlers; monta cabeçalho, ações, lista, rodapé e resize handle. O `aside` tem rótulo acessível, teclado, ref e estilo geométrico dinâmico. |
| `gq`, 555.188–574.498 | Lista de agentes e interações de roster | Coordena itens virtuais, pins, seções, tarefas, estados de carregamento/erro, seleção em lote e operações de drag-and-drop. |
| `vq`, 579.001–582.712 | Adaptador de uma linha de agente | Deriva estado visual/ações por agente e passa dados para `VD`; também adiciona as linhas de tarefas quando abertas/expandidas. |
| `VD`, expressão compilada em 496.363–507.814 | Componente visual e interativo da linha/tile | Recebe `agent`, nome, estado de host, foco/cursor, apresentação (`expanded`, `pinned`/tile/collapsed), pin, drag, seleção, criação, seção e callbacks. |
| `YD`, 522.653–524.044 | Grupo de pins | Cabeçalho expansível com contagem e itens de agente em lista. |
| `aq`, 533.143–536.713 | Grade/área de tiles fixados | Zona de drop, grid de pins, abertura/animação e apresentação de tiles. |
| `ZD`, 519.391–522.570 | Lista agrupada por seções | Renderiza cabeçalhos e grupos, collapse e reorder de seções; controla ghost/drop visual. |
| `QD`, 524.241–525.242 | Grupos de tarefas por agente | Cabeçalho dobrável e linhas de task/thread por agente. |
| `hq`, 554.154–555.146 | Wrapper de lista arrastável | Zona de drop para agentes, adiciona shield durante drag. |
| `bq`, 577.651–578.749 | Alça de resize | `role=separator`, orientação vertical e gesto pointer para resize. |

Os nomes acima são símbolos minificados locais; não são nomes recuperados do código-fonte original. Os filhos `VD` e `xq` pertencem ao entry; não se inferiu um módulo independente pelo nome.

## Dados, ações e estados ligados

`xq` passa ao `gq`: agentes, pins, estado colapsado, indicador de criação pendente, seções resolvidas, agentes ocultos, threads e contagens não lidas, grupos de threads dobrados, estado do roster/host, privacidade, wake/retry/recover, e callbacks de seleção, abertura, prefetch, pin, reorder, edição de seção e recuperação. A lista possui navegação por teclado e foco/cursor de ciclo; a interface não se reduz a uma lista estática.

`gq` escolhe caminhos agrupados ou não agrupados. `ZD` cuida da apresentação por seções; `YD` e `aq` tratam pins; `QD` trata as tarefas relacionadas a cada agente. Há alvos distintos de drag identificados como `pinned-tile`, `agent`, `pin-grid`, `agent-list`, `section` e `section-body`. O código lida com mover/reordenar, fixar/desafixar e drag overlay em portal. Há também navegação a threads não lidas e conteúdo rolável com fades superior/inferior. A disponibilidade dos caminhos depende de estado/feature gates; não se afirma que todos aparecem juntos.

`vq` define a apresentação da linha como `collapsed`, `pinned` ou `expanded`, conforme estado e posição. Encaminha para `VD` estado ativo, seleção múltipla, foco de teclado/cursor, pin e drag, rótulo/nome temporário durante criação, status de host, preview e seção. O corpo de `VD` trata ainda preview de draft/awaiting response, indicador de digitação/atividade, última entrada, metadados/badges de agente/equipe e ações contextuais; clique simples abre, modificadores selecionam, Shift seleciona intervalo, e o menu contextual permite renomear. Tiles e linhas usam avatares em tamanhos distintos, badge e marcadores com variantes de layout. Estes detalhes vêm do fluxo estático e requerem confirmação de aparência em cenário controlado.

## Geometria recuperada

No app chunk, constantes associadas ao layout são `Nd=280`, `li=240`, `ol=400`, `yR=88`, `Dd=320`, `bi=280`, `il=424`. O estado inicial codificado `SR={expandedWidth:Nd,isCollapsed:!1}` dá fallback expandido de 280 px e não colapsado; preferências persistidas podem alterar o valor efetivo.

O setter geométrico `nGe` clampa largura entre 240 e 400 px. A largura colapsada é 88 px. O layout mede o conteúdo disponível no container/window e a largura requerida pelo painel de informação; se faltar espaço, colapsa a sidebar (e, em limite menor, também pode marcar colapso no estado). Ao expandir, largura é limitada pela largura disponível e pelo mínimo/máximo. `xa` escreve `gridTemplateColumns: "<largura>px minmax(0, 1fr) auto"`, sincroniza `data-sidebar-collapsed`/`data-sidebar-animating` e define `--sand-sidebar-width` no `.sand-info-pane` quando presente. `bq` começa pelo `getBoundingClientRect().width` do pai e deriva o novo valor do delta de `clientX`, com limite passado ao helper de resize. Portanto, os valores por conta/janela podem diferir do fallback.

O shell usa CSS atômico para flex coluna, dimensões mínimas, borda de fim, fundo semântico sidebar e container query `sand-sidebar`; o elemento raiz também recebe uma classe semântica `sand-agents-sidebar`. As regras atômicas são emitidas pelo runtime CSS-in-JS e não aparecem como seletores literais `.sand-<hash>` no stylesheet principal. Para não inventar o significado de classes, este mapa registra as propriedades recuperadas do callsite e deixa a extração computada das regras atômicas como próximo trabalho. O componente da lista também usa nomes semânticos `sand-agents-list__list`, `sand-agents-list__rows`, `sand-agents-sections`, `sand-agents-section`, `sand-agent-item` e `sand-sidebar-resize-handle`; ocorrências em JSX indicam hooks de estilo, não substituem a regra CSS.

## Limites restantes antes de implementar esta superfície

1. Recuperar as regras computadas para classes atômicas CSS-in-JS e associá-las aos callsites, inclusive estilos de estado, hover, ativo, foco, drag e compactação.
2. Fechar a sequência de componentes internos de `VD` (menus/badges/avatars) e os módulos/contratos dos componentes de task row, toolbar e footer.
3. Rastrear a origem e migração dos valores persistidos, breakpoints/medidas auxiliares e combinações com a largura do info pane.
4. Mapear condições do feature gate e dos estados de privacidade, unavailable, waking e recovery até os componentes apresentados.
5. Depois de fechar o mapa de código e CSS, reconstruir a superfície e comparar uma execução controlada; ainda não declarar paridade visual.

