# `BoxStoreDownload.download/restoreSmallGroup`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477926-477970](../../../../../../../reference/runtime/host-main.cjs#L477926-L477970) | `ArrowFunctionExpression` | sim | `group, pending` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477926-477970](../../../../../../../reference/runtime/host-main.cjs#L477926-L477970) | 3 | 4 | 3 | 3 | 0 | 2 |

### host:477926

Chamadas escritas diretamente neste corpo: `byteBudget.acquire`, `byteBudget.release`, `copyInFailureOf`, `destinationPaths.get`, `errorMessage`, `recordFailure`, `reportProgress`, `sha256Hex`, `store.get`, `writeVerifiedBytes`.

Alvos de atribuição ou incremento: `blob`, `bytes`, `files`, `verified`.

SHA-256 do trecho: `5d5888e8ce1552090bebc05c88f9cd103b7dc0ba4c13c307b6cd626a1b10cb2c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
