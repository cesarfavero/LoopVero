# `startWorkingStateExport/listDurableBlobHexIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786097-786106](../../../../../../../reference/runtime/host-main.cjs#L786097-L786106) | `ArrowFunctionExpression` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786097-786106](../../../../../../../reference/runtime/host-main.cjs#L786097-L786106) | 2 | 0 | 2 | 1 | 0 | 0 |

### host:786097

Chamadas escritas diretamente neste corpo: `boxStoreSync.getStoreId`, `boxStoreSync.objectStoreProvider.forStore`, `new Set`, `store.list`, `workingStateBlobHexIds`.

SHA-256 do trecho: `9cd041d0169c473c1271c6d17315f981967fd12ff16bb328c070c09a3ac36824`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
