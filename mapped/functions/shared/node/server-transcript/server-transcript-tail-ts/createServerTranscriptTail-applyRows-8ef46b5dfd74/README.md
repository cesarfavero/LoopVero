# `createServerTranscriptTail/applyRows`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713600-713643](../../../../../../../reference/runtime/host-main.cjs#L713600-L713643) | `ArrowFunctionExpression` | sim | `frame, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713600-713643](../../../../../../../reference/runtime/host-main.cjs#L713600-L713643) | 8 | 2 | 3 | 3 | 0 | 0 |

### host:713600

Chamadas escritas diretamente neste corpo: `.filter`, `acceptsAgent`, `adoptGeneration`, `agents.get`, `applyDelete`, `applyEntry`, `bodies.get`, `cancelBodyRetry`, `mergeFrameRows`, `new Map`, `readGenerationFor`, `rehydrate`, `replayBySeq.get`, `reportDroppedRows`, `resolveBodies`, `retried.map`, `rows.flatMap`, `state.pendingBodies.values`, `stateFor`, `tailStateKey`.

Alvos de atribuição ou incremento: `highWater`, `state.streamAckUpdatedSeq`.

SHA-256 do trecho: `8bead052a8d902469aa3ccdf5d40bcf1b0e2a680eafd584d22655e1e5f3ec2f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
