# `stopAllRunningSubagents`

[Componente: subagents](../../components/subagents/README.md) · [Índice](../../README.md)

**Fonte primária:** [host-main.cjs:780933-781021](../../../reference/runtime/host-main.cjs#L780933-L781021). Análise estática do snapshot original; nomes preservados do bundle.

## Contrato

`stopAllRunningSubagents(controller,args)` tenta parar filhos ativos e trabalho delegado que o controller consegue alcançar. Retorna relatório agregado; não promete cancelamento universal de qualquer serviço remoto.

## Algoritmo

Primeiro obtém `listRunningSubagents`. Dispara os aborts dos filhos em paralelo e, em paralelo com o conjunto, `stopDelegatedWorkSafely`. Cada abort possui try/catch independente. Um retorno ok entra em stopped; not-running entra em alreadyFinished; exceção vira failed com erro. O relatório agrega resultados delegados e informa `delegatedWorkUnavailable` quando a porta não existe.

## Concorrência e falhas

Um filho pode terminar entre a listagem e o abort; isso é tratado como alreadyFinished, sem declarar falha. Uma exceção em um filho não impede cancelar os demais. A listagem inicial está fora desse try/catch individual e pode falhar como operação inteira. A porta de trabalho delegado possui captura própria.

## Ligação com a ferramenta

StopSubagent com `all:true` chama esse helper, registra delegações interrompidas e devolve relatório. A confirmação vem da ferramenta de stop; a descrição informa que o filho interrompido não produzirá uma retomada separada com resultado final.

## Limites

Abort aceito não comprova encerramento instantâneo de um processo remoto. O contrato concreto do controller define até onde a tentativa se propaga. O relatório preserva essa diferença em vez de devolver apenas “tudo cancelado”.
