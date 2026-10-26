# `BoxStoreDownload.download/restoreLargeToPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477971-477989](../../../../../../../reference/runtime/host-main.cjs#L477971-L477989) | `ArrowFunctionExpression` | sim | `group, relPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477971-477989](../../../../../../../reference/runtime/host-main.cjs#L477971-L477989) | 1 | 0 | 3 | 3 | 0 | 1 |

### host:477971

Chamadas escritas diretamente neste corpo: `copyInFailureOf`, `destinationPaths.get`, `errorMessage`, `openRestoreParent`, `parent.handle.close`, `recordFailure`, `restoreLargeInto`.

Alvos de atribuição ou incremento: `parent`.

SHA-256 do trecho: `7e1685afca4a6faac7a198ab8e0c99e86e70a72c055864b3d0a3b53e4945e73b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
