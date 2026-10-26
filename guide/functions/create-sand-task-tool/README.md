# `createSandTaskTool`

[Componente: subagents](../../components/subagents/README.md) · [Índice](../../README.md)

**Fonte primária:** [host-main.cjs:763474-763547](../../../reference/runtime/host-main.cjs#L763474-L763547). Análise estática do snapshot original; nomes preservados do bundle.

## Responsabilidade

`createSandTaskTool(args)` cria a ferramenta de delegação a subagentes. O nome singular desta função é importante: não é a fábrica `createSandTaskTools` das tasks documentais.

## Construção

Combina recursos do parent com read executor da box remota; fornece configuração inicial sem tools, sessão de ferramentas e summarization handler; passa tipos e modelos permitidos ao `createTaskTool` genérico. Desativa custom model ID, explore automático e obrigação de execução server-side; habilita client-side, notificações de conclusão e hint contra polling.

## Contexto e modelos

O default exige prompt autocontido porque o filho não vê a conversa. A variante executor forked depende de haver executor nas configs e gate `executorForkContext`; nela novos executors podem herdar o contexto do parent. O parâmetro de esforço/modelo só aparece se o perfil executor permite. Resume conserva contexto de uma execução anterior, em vez de criar sempre um filho novo.

## Pré-carregamento

Se `turn.subagentLaunchPrefetch` existe, a ferramenta recebe wrapper que inicia carga do contexto de revisão quando começam os argumentos em streaming. Isso antecipa trabalho; não dispensa revisão nem prova que o lançamento foi aprovado.

## Fronteiras

Client-side descreve a alternativa de execução usada pelo cliente do agente; não significa automaticamente Mac local. A fábrica não é sandbox de sistema operacional. O código genérico de task, o controlador do host e as políticas específicas determinam execução, cancelamento e persistência.
