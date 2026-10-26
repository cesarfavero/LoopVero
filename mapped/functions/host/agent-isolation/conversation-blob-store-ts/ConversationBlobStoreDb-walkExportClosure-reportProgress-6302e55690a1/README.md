# `ConversationBlobStoreDb.walkExportClosure/reportProgress`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-store.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:22438-22445](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22438-L22445) | `ArrowFunctionExpression` | não | `force = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22438-22445](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22438-L22445) | 1 | 0 | 0 | 1 | 0 | 0 |

### state-worker:22438

Chamadas escritas diretamente neste corpo: `onProgress`.

Alvos de atribuição ou incremento: `reportedBlobCount`, `reportedByteSize`.

SHA-256 do trecho: `369f09dca948c558b8efe8cc6a374e898656817fa374670392e48fce481785a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
