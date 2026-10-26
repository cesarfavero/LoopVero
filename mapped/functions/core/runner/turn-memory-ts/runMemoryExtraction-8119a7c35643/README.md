# `runMemoryExtraction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/turn-memory.ts` · [README do módulo](../../../../../modules/core/runner/turn-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590613-590665](../../../../../../reference/runtime/sand-eval-runner.cjs#L590613-L590665) | `FunctionDeclaration` | sim | `memoryStore, session, ctx, exchange, runner, isRenamedSpelling, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590613-590665](../../../../../../reference/runtime/sand-eval-runner.cjs#L590613-L590665) | 4 | 1 | 1 | 2 | 0 | 1 |

### evaluation:590613

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `.slice`, `Date.now`, `applied.added.filter`, `applyExtractedMemories`, `archiveWithUserBotNotes`, `errorLogTag`, `extractMemories`, `extractionWrite.increment`, `gatherExtractionMemories`, `memoryStore.recall`, `memoryWriteScope`, `new Date`, `pending.clearPendingExchanges`, `pending.getPendingExchanges`, `pending.recordPendingExchange`, `process.stderr.write`, `renderTurnMemoryDate`, `session.getExecutor`, `turnMemoryProvenance`, `wasCancelledByInterrupt`.

SHA-256 do trecho: `e2e5d6c23c80ffd2222a6625d6598cb049a1feb9822c3371059254e44f2c7179`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
