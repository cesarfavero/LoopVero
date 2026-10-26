# `InMemoryBlobStore.setBlob`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/blob-store.js` · [README do módulo](../../../../modules/agent-kv/blob-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:284753-284762](../../../../../reference/runtime/sand-eval-runner.cjs#L284753-L284762) | `method` | não | `ctx, blobId, blobData` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:284753-284762](../../../../../reference/runtime/sand-eval-runner.cjs#L284753-L284762) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:284753

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `inMemorySetBlobLatency.histogram`, `performance.now`, `this.blobs.set`, `toHex`.

SHA-256 do trecho: `168c5efcbbfe5e8ff3670829f7a195b40615aa344683d51584b55f29d220eead`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
