# `WorkerBlobStore.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/worker-blob-store.ts` · [README do módulo](../../../../../modules/host/agent-isolation/worker-blob-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720398-720403](../../../../../../reference/runtime/host-main.cjs#L720398-L720403) | `method` | não | `pool, agentId, blobDbPath, legacyBlobDbPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720398-720403](../../../../../../reference/runtime/host-main.cjs#L720398-L720403) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:720398

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.agentId`, `this.blobDbPath`, `this.legacyBlobDbPath`, `this.pool`.

SHA-256 do trecho: `d8c7a7b0e7b1b08a8f6afc33ab407a1405c0b489fdb5d12165dadeaa1a5019e8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
