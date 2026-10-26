# `BlobNotFoundError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/blob-not-found-error.js` · [README do módulo](../../../../modules/agent-kv/blob-not-found-error-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616356-616362](../../../../../reference/runtime/host-main.cjs#L616356-L616362) | `method` | não | `blobIdHexes, options2` |
| [evaluation:284896-284902](../../../../../reference/runtime/sand-eval-runner.cjs#L284896-L284902) | `method` | não | `blobIdHexes, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616356-616362](../../../../../reference/runtime/host-main.cjs#L616356-L616362) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:284896-284902](../../../../../reference/runtime/sand-eval-runner.cjs#L284896-L284902) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:616356

Chamadas escritas diretamente neste corpo: `formatMissingBlobSuffix`, `super`.

Alvos de atribuição ou incremento: `this.blobIdHexes`, `this.isBlobNotFound`, `this.isUsageError`, `this.name`.

SHA-256 do trecho: `d866c56c844cc1da5ab966695b595e00b5e9c42f4cabe5ab6feb4688dc31db2f`.

### evaluation:284896

Chamadas escritas diretamente neste corpo: `formatMissingBlobSuffix`, `super`.

Alvos de atribuição ou incremento: `this.blobIdHexes`, `this.isBlobNotFound`, `this.isUsageError`, `this.name`.

SHA-256 do trecho: `d866c56c844cc1da5ab966695b595e00b5e9c42f4cabe5ab6feb4688dc31db2f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
