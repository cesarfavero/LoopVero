# `_EncryptedBlobStore.setBlobLocallyOnly`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/cached-blob-store.js` · [README do módulo](../../../../modules/agent-kv/cached-blob-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616510-616519](../../../../../reference/runtime/host-main.cjs#L616510-L616519) | `method` | sim | `ctx, blobId, blobData` |
| [evaluation:285050-285059](../../../../../reference/runtime/sand-eval-runner.cjs#L285050-L285059) | `method` | sim | `ctx, blobId, blobData` |
| [state-worker:21883-21892](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21883-L21892) | `method` | sim | `ctx, blobId, blobData` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616510-616519](../../../../../reference/runtime/host-main.cjs#L616510-L616519) | 0 | 0 | 2 | 0 | 0 | 0 |
| [evaluation:285050-285059](../../../../../reference/runtime/sand-eval-runner.cjs#L285050-L285059) | 0 | 0 | 2 | 0 | 0 | 0 |
| [state-worker:21883-21892](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21883-L21892) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:616510

Chamadas escritas diretamente neste corpo: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlobLocallyOnly`, `this.encryptBlob`.

SHA-256 do trecho: `8be0116f26a2bfa3cb7ff9968af24ea03ae1ac58d40f1ba73a56183fbad736d3`.

### evaluation:285050

Chamadas escritas diretamente neste corpo: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlobLocallyOnly`, `this.encryptBlob`.

SHA-256 do trecho: `8be0116f26a2bfa3cb7ff9968af24ea03ae1ac58d40f1ba73a56183fbad736d3`.

### state-worker:21883

Chamadas escritas diretamente neste corpo: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlobLocallyOnly`, `this.encryptBlob`.

SHA-256 do trecho: `a24e941ce127a2be53a7a88094d1cf05cfaf300a8dda87c78b48de44e2e8a601`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
