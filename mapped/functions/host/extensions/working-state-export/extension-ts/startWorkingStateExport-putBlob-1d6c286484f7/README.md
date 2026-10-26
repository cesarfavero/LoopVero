# `startWorkingStateExport/putBlob`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786080-786086](../../../../../../../reference/runtime/host-main.cjs#L786080-L786086) | `ArrowFunctionExpression` | sim | `blobIdHex, bytes, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786080-786086](../../../../../../../reference/runtime/host-main.cjs#L786080-L786086) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:786080

Chamadas escritas diretamente neste corpo: `.put`, `boxStoreSync.getStoreId`, `boxStoreSync.objectStoreProvider.forStore`.

SHA-256 do trecho: `6cf0e60a2a418b82ac4b328740b799bbbc88271cd5e5797a0104ef96bc6b5f5b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
