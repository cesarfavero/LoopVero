# Tarefas e threads do renderer original 0.71.2

Data: 2026-10-19. Fonte primária: `Grok Bot.app/Contents/Resources/app.asar`, SHA-256 `055b087a9bacc3be4e5f80c468edf2fd031dd5b928ab2e7da7e01dd10de0e860`. O REA analisou diretamente os membros `dist/renderer/assets/index-wlkGG389.js` e `chunk-thread-card-Bd1pjUBX.js` com zero falhas de parse (Evidence `ev_d3eb9779bf243fadf7c166412c2b0d98fe823cf59b08d665ad637f2decce597a`); a semântica do entry foi truncada pelo orçamento. Uma seleção isolada do card, Evidence `ev_9b226928a4ee01bcc7ba6acece02f90fb5f1fcf513ff36df73cf8b07b9fe6c73`, percorreu 878 nós AST e também teve zero falhas. A leitura abaixo confere diretamente os bytes dos membros do ASAR com `integrity.hash`. É análise estática, sem afirmação de estado ativo no runtime.

## Contratos recuperados

| Componente compilado | Dados e comportamento sustentados pelo código |
|---|---|
| `QD` (entry, offset 524.241) | Recebe seções `{agentId,name,tasks}`, conjunto de agentes dobrados, abertura de thread e toggle. Renderiza cabeçalho com contagem, lista expansível de `Qv`, e usa a seleção corrente para indicar a linha aberta. |
| `Qv` | Recebe `agentId`, `task`, `isOpen`, `isNested`, `onOpen`. O registro tem ao menos `id`, `name`, `unreadEntryId`; ao clicar abre `{agentId,taskId:task.id}`. O estado aberto marca `aria-current="page"`; há ação de desafixar por `setPinned({agentId,taskId,isPinned:false})`. |
| `TJ` (entry, offset 2.214.917) | Lê a thread selecionada; sem seleção retorna `null`. Chaveia a superfície por `agentId:taskId` e passa `focusEntryId`/`focusSeq` para `AJ`. |
| `AJ` (entry, offset 2.215.345) | Lê entries e geração por `uE({agentId,taskId})`, encontra o agente atual, usa draft indexado pelo mesmo target, e envia com `sendTarget:{kind:"task",taskId}`. Mantém target de reply, editor, find e ações de transcript. |
| `lZ` (entry, offset 1.736.394) | Lê metadados da tarefa pelo par `{agentId,taskId}`, usa `name` ou `taskId` como título, carrega transcript pela session da tarefa, acompanha `unreadEntryId` e chama `markRead`. Recebe composer, toolbar, dock, find bar, back e split. |
| `XQ` (entry, offset 2.134.095) | Mede largura efetiva com `ResizeObserver`, chama `onWidthChange`, elemento apenas de medição com `aria-hidden`. Não é o painel de informações. |
| `ZQ` (entry, offset 2.139.843) | Aplica layout `split`, `held` ou `takeover` no chat principal. `held` e `takeover` tornam o chat `inert`; `takeover` também o oculta visualmente. |
| `chunk-thread-card-Bd1pjUBX.js` | SHA-256 `0a7960b0ae1ac228640aed5c26aca5c9e90b697a7a703b9aa147ed4dadc1599c`. Exporta `T`: botão com ícone, nome e detalhe, `bdi`, `onOpen` após `stopPropagation`; variante de classe/tipografia depende de `sand_tasks`. |

O shell `MJ` só monta a thread quando os gates e a seleção compatível com o agente atual permitem. Mede espaço para escolher `split` ou `takeover`; `held` preserva um modo próprio. Os guards minificados restantes, o valor efetivo do gate `sand_tasks`, o schema integral da entidade task, sincronização com Coordinator e o conjunto completo de cards/estilos da thread ainda precisam ser rastreados. O card isolado não representa a superfície da thread inteira.

## Confronto com a réplica

`apps/desktop/src/renderer.jsx` possui uma única conversa ativa por bot. Ela mostra `toolCalls` e `subagentRuns` dentro de um `task-outline`, mas não mantém uma seleção `{agentId,taskId}`, transcript/rascunho separado por tarefa, reply target, unread/markRead, pin, back, ou layouts `split`/`held`/`takeover`. O runtime local emite `taskId` e `parentTaskId` nas chamadas e subagentes e persiste mensagens do subagente no bot filho (`main.cjs`), mas esse registro não equivale automaticamente à entidade task e à sessão de transcript do original. Antes de fazer o card abrir algo, é necessário mapear a origem e o lifecycle da task no harness/Coordinator e a relação entre `taskId`, session ID, entries e bot. Sem esse vínculo, a tela só simularia a navegação original.
