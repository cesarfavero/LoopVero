# `_EncryptedBlobStore.encryptBlob`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/cached-blob-store.js` · [README do módulo](../../../../modules/agent-kv/cached-blob-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616492-616499](../../../../../reference/runtime/host-main.cjs#L616492-L616499) | `method` | sim | `blobData` |
| [evaluation:285032-285039](../../../../../reference/runtime/sand-eval-runner.cjs#L285032-L285039) | `method` | sim | `blobData` |
| [state-worker:21865-21872](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21865-L21872) | `method` | sim | `blobData` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616492-616499](../../../../../reference/runtime/host-main.cjs#L616492-L616499) | 0 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:285032-285039](../../../../../reference/runtime/sand-eval-runner.cjs#L285032-L285039) | 0 | 0 | 2 | 1 | 0 | 0 |
| [state-worker:21865-21872](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21865-L21872) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:616492

Chamadas escritas diretamente neste corpo: `combined.set`, `crypto.getRandomValues`, `crypto.subtle.encrypt`, `new Uint8Array`, `this.getEncryptionKey`, `toUint8Array2`.

SHA-256 do trecho: `5dba5ca36e85b29a2eb75e4a5291fbf701582f1a9a2995ce5705e837e2a73591`.

### evaluation:285032

Chamadas escritas diretamente neste corpo: `combined.set`, `crypto.getRandomValues`, `crypto.subtle.encrypt`, `new Uint8Array`, `this.getEncryptionKey`, `toUint8Array`.

SHA-256 do trecho: `c343ed0ad18cc1531050a579bed3f3680ac7802ccde53880ba05286ed7a84dd0`.

### state-worker:21865

Chamadas escritas diretamente neste corpo: `combined.set`, `crypto.getRandomValues`, `crypto.subtle.encrypt`, `new Uint8Array`, `this.getEncryptionKey`, `toUint8Array`.

SHA-256 do trecho: `c343ed0ad18cc1531050a579bed3f3680ac7802ccde53880ba05286ed7a84dd0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
