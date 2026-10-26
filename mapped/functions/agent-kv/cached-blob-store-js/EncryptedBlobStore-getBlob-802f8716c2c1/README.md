# `_EncryptedBlobStore.getBlob`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/cached-blob-store.js` · [README do módulo](../../../../modules/agent-kv/cached-blob-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616462-616491](../../../../../reference/runtime/host-main.cjs#L616462-L616491) | `method` | sim | `ctx, blobId` |
| [evaluation:285002-285031](../../../../../reference/runtime/sand-eval-runner.cjs#L285002-L285031) | `method` | sim | `ctx, blobId` |
| [state-worker:21835-21864](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21835-L21864) | `method` | sim | `ctx, blobId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616462-616491](../../../../../reference/runtime/host-main.cjs#L616462-L616491) | 2 | 0 | 5 | 2 | 2 | 2 |
| [evaluation:285002-285031](../../../../../reference/runtime/sand-eval-runner.cjs#L285002-L285031) | 2 | 0 | 5 | 2 | 2 | 2 |
| [state-worker:21835-21864](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21835-L21864) | 2 | 0 | 5 | 2 | 2 | 2 |

### host:616462

Chamadas escritas diretamente neste corpo: `cachedNearbyDecryptFallbackSuccess.increment`, `crypto.subtle.decrypt`, `encryptedGetBlobLatency.histogram`, `encryptedValue.slice`, `new NearbyBlobDecryptError`, `new Uint8Array`, `performance.now`, `this.blobStore.getBlob`, `this.getEncryptionKey`, `this.getFallbackDecryptKey`.

Alvos de atribuição ou incremento: `decryptedValue`.

Alvos de lançamento explícito: `NearbyBlobDecryptError`.

SHA-256 do trecho: `77ff952ad0a2c26a8a4e80bf55acacbfe22999a0911d50d0a01fc316080b7836`.

### evaluation:285002

Chamadas escritas diretamente neste corpo: `cachedNearbyDecryptFallbackSuccess.increment`, `crypto.subtle.decrypt`, `encryptedGetBlobLatency.histogram`, `encryptedValue.slice`, `new NearbyBlobDecryptError`, `new Uint8Array`, `performance.now`, `this.blobStore.getBlob`, `this.getEncryptionKey`, `this.getFallbackDecryptKey`.

Alvos de atribuição ou incremento: `decryptedValue`.

Alvos de lançamento explícito: `NearbyBlobDecryptError`.

SHA-256 do trecho: `77ff952ad0a2c26a8a4e80bf55acacbfe22999a0911d50d0a01fc316080b7836`.

### state-worker:21835

Chamadas escritas diretamente neste corpo: `cachedNearbyDecryptFallbackSuccess.increment`, `crypto.subtle.decrypt`, `encryptedGetBlobLatency.histogram`, `encryptedValue.slice`, `new NearbyBlobDecryptError`, `new Uint8Array`, `performance.now`, `this.blobStore.getBlob`, `this.getEncryptionKey`, `this.getFallbackDecryptKey`.

Alvos de atribuição ou incremento: `decryptedValue`.

Alvos de lançamento explícito: `NearbyBlobDecryptError`.

SHA-256 do trecho: `4682f75bba5513f84ae4de407e1a590296d0b2b391d6b256cae6ef9202c6195a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
