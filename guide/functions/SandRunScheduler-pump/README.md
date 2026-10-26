# `SandRunScheduler.pump`

**Fonte primária:** [host-main.cjs:739756–739836](../../../reference/runtime/host-main.cjs#L739756-L739836).

**Componente:** [scheduling](../../components/scheduling/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Responsabilidade

Escolher e iniciar o próximo item de um agente quando seu slot lógico está livre.

## Precondições

Retorna sem efeitos se scheduler está disposed, fila não existe ou há `active`. A prioridade é `user`, depois `agent`, depois `background`. A lane de usuário usa `takeNextUserTask`.

## Estado instalado antes da execução

Incrementa `generationCounter`, cria uma Promise `settled`, guarda início e fase `running`, e atribui o registro a `queue.active`. Só então chama `next.task()`. Assim até uma função que lance sincronicamente tem um ativo registrado e tratamento de finalização.

## Finalização

O resultado da tarefa entra em `onTaskSettled`. Essa função resolve/rejeita a Promise pública do item. Se a geração já mudou, registra `late_settle` e retorna. Caso ainda seja a ativa, limpa o slot, desarma watchdog e chama `pump` novamente.

A Promise `settled` marca o término real da tarefa. Ela é distinta da Promise retornada ao chamador, que pode ser resolvida antes pelo escape de watchdog.

## Concorrência

No caminho normal há um ativo por agente. Agentes diferentes têm filas independentes. Após `escapeWedgedRun`, um zombie pode continuar enquanto o próximo item começa; não anunciar serialização física absoluta nesse caso.

## Observabilidade

Na retirada, registra espera total, tempo desde aceitação quando informado, background ultrapassado e profundidades. São medidas da fila, não estimativas de quanto o modelo vai demorar.
