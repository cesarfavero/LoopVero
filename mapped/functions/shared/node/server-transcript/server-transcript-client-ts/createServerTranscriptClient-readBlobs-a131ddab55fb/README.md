# `createServerTranscriptClient/readBlobs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-client.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:712468-712496](../../../../../../../reference/runtime/host-main.cjs#L712468-L712496) | `FunctionExpression` | sim | `hashes, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712468-712496](../../../../../../../reference/runtime/host-main.cjs#L712468-L712496) | 3 | 2 | 3 | 2 | 0 | 0 |

### host:712468

Chamadas escritas diretamente neste corpo: `Promise.allSettled`, `batch.map`, `bodies.set`, `client.presignSandBoxStoreReads`, `clientFor`, `hashes.map`, `instructions.slice`, `new Map`, `presigned.instructions.filter`, `requireRouteAccess`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `e0843468f028d2133f56e223b481c205fda1b116c39169e22eb737d9f15fa3f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
