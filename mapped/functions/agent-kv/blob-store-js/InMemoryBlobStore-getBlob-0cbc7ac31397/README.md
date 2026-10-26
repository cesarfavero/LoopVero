# `InMemoryBlobStore.getBlob`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/blob-store.js` · [README do módulo](../../../../modules/agent-kv/blob-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:284743-284752](../../../../../reference/runtime/sand-eval-runner.cjs#L284743-L284752) | `method` | não | `ctx, blobId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:284743-284752](../../../../../reference/runtime/sand-eval-runner.cjs#L284743-L284752) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:284743

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `inMemoryGetBlobLatency.histogram`, `performance.now`, `this.blobs.get`, `toHex`.

SHA-256 do trecho: `8bd8ecf9eba4ee21c307b3efcf2ccb65edc80f4837e49b74b0e3f69484d5afb6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
