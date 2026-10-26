# `runMemoryExtraction`

[Componente: memory](../../components/memory/README.md) · [Índice](../../README.md)

**Fonte primária:** [sand-eval-runner.cjs:590613-590674](../../../reference/runtime/sand-eval-runner.cjs#L590613-L590674). Análise estática do snapshot original; nomes preservados do bundle.

## Contrato

`runMemoryExtraction(memoryStore, session, ctx, exchange, runner, isRenamedSpelling, options)` executa o passe auxiliar de memória pós-turno. É diferente do tipo Dream. Retorna `{ok:true}` ou `{ok:false,error}`.

## Algoritmo

Obtém audiência da memória privada da pessoa, registra exchange pendente e inclui exchanges anteriores ainda não revisados. Reúne perfil, recentes e arquivo relevante. `extractMemories` usa `session.getExecutor()` para pedir fatos; o resultado é parseado e deduplicado. Em sucesso limpa pendências, aplica remoções conhecidas/adições e incrementa métricas por tipo e escopo.

## Quando o caller executa

O caminho em `settleCompletedTurn` exige memória habilitada para extração, store presente, run não superseded, turno visível, prompt não vazio/memorável e runner principal. Subagentes e turnos hidden não passam por essa chamada. [Condições completas](../../../reference/runtime/sand-eval-runner.cjs#L591126-L591150).

## Continuidade

A chave de audiência evita juntar pendências de pessoas diferentes. Quando a chamada falha, mantém pendências somente se a continuidade diz que houve interrupção e o erro é de cancelamento. Outro erro limpa pendências e retorna falha com diagnóstico. Isso é uma decisão explícita de continuidade, não um retry universal.

## Dependências e limites

`gatherExtractionMemories` examina um arquivo com limite solicitado de 500 e acrescenta até 10 fatos relevantes. O prompt default pede fatos de perfil duradouros. O parser suporta categorias mais amplas e `applyExtractedMemories` impede remover fatos que não estavam no conjunto conhecido. O store decide a persistência real e a semântica de `addMemory`/`removeMemoryByContent`.

## Evidência

Há implementação completa de controle e chamada ao executor no eval. Esta página não afirma que a mesma passagem esteja ativada em todos os turnos/contas de produção, nem que a inferência produza memória correta em todos os casos.
