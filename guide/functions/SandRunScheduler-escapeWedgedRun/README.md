# `SandRunScheduler.escapeWedgedRun`

**Fonte primária:** [host-main.cjs:739879–739903](../../../reference/runtime/host-main.cjs#L739879-L739903).

**Componente:** [scheduling](../../components/scheduling/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Responsabilidade

Liberar o slot lógico depois que uma tarefa permanece presa além da grace do watchdog, sem perder a referência para aguardar seu término real.

## Precondições

Retorna se disposed ou se a geração ativa já não é a mesma. Isso impede que um timer antigo retire o ativo novo.

## Passos

1. Registrar evento de watchdog `escape`, lane, origem, tempo de run e idade do usuário esperando.
2. Resolver a Promise pública do item ativo.
3. Adicionar `active.settled` ao conjunto `zombies`.
4. Remover a Promise do conjunto quando ela realmente terminar.
5. Limpar `queue.active` e chamar `pump`.

## O que essa função não confirma

Não há `AbortController.abort`, terminação de worker nem rollback aqui. Resolver a Promise pública não significa que o trabalho parou. A garantia observada é progresso da fila e proteção contra `late_settle` sobrescrever o próximo ativo.

## Consequência de desenho

`drain` inclui os zombies de sua fotografia, logo aguarda também tarefas escapadas já presentes. Uma reconstrução que omitisse zombies poderia fechar recursos ainda utilizados por uma tarefa antiga. Uma que fingisse que o escape é cancelamento comprovado apagaria a distinção entre controle da fila e efeitos reais.
