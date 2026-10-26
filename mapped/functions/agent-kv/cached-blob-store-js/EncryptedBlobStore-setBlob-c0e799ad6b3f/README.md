# `_EncryptedBlobStore.setBlob`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/cached-blob-store.js` · [README do módulo](../../../../modules/agent-kv/cached-blob-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616500-616509](../../../../../reference/runtime/host-main.cjs#L616500-L616509) | `method` | sim | `ctx, blobId, blobData` |
| [evaluation:285040-285049](../../../../../reference/runtime/sand-eval-runner.cjs#L285040-L285049) | `method` | sim | `ctx, blobId, blobData` |
| [state-worker:21873-21882](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21873-L21882) | `method` | sim | `ctx, blobId, blobData` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616500-616509](../../../../../reference/runtime/host-main.cjs#L616500-L616509) | 0 | 0 | 2 | 0 | 0 | 0 |
| [evaluation:285040-285049](../../../../../reference/runtime/sand-eval-runner.cjs#L285040-L285049) | 0 | 0 | 2 | 0 | 0 | 0 |
| [state-worker:21873-21882](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21873-L21882) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:616500

Chamadas escritas diretamente neste corpo: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlob`, `this.encryptBlob`.

SHA-256 do trecho: `b5ddc2dcadd2b50743df71f043c7ac60c98f99811ac0e1b84c59a7799926a8f9`.

### evaluation:285040

Chamadas escritas diretamente neste corpo: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlob`, `this.encryptBlob`.

SHA-256 do trecho: `b5ddc2dcadd2b50743df71f043c7ac60c98f99811ac0e1b84c59a7799926a8f9`.

### state-worker:21873

Chamadas escritas diretamente neste corpo: `encryptedSetBlobLatency.histogram`, `performance.now`, `this.blobStore.setBlob`, `this.encryptBlob`.

SHA-256 do trecho: `42d085a1d7db84c06c5c22da1d375cf671357eead2867a36f96bc48f08b0780a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
