# `createServerTranscriptTail/recordListedRows`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713422-713444](../../../../../../../reference/runtime/host-main.cjs#L713422-L713444) | `ArrowFunctionExpression` | não | `state, rows, bodiesById` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713422-713444](../../../../../../../reference/runtime/host-main.cjs#L713422-L713444) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:713422

Chamadas escritas diretamente neste corpo: `BigInt`, `bodiesById.get`, `state.rows.get`, `state.rows.set`.

Alvos de atribuição ou incremento: `floor2`, `newest`, `recordedNewer`, `state.maxLiveSeq`, `state.streamAckUpdatedSeq`, `state.windowFloorSeq`.

SHA-256 do trecho: `fbcf12762301fad999dd1fc1a47cc59d556b0836cb4dd37c186d0452e16f0c28`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
