# `WorkingStateExporter.durableBlobHexIdsOrNoneWhenUnlisted/onPage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-export-service.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785549-785555](../../../../../../../reference/runtime/host-main.cjs#L785549-L785555) | `ArrowFunctionExpression` | não | `blobHexIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785549-785555](../../../../../../../reference/runtime/host-main.cjs#L785549-L785555) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:785549

Chamadas escritas diretamente neste corpo: `control.onProgress`.

Alvos de atribuição ou incremento: `progress.listedBlobs`, `progress.listingKnownBlobs`, `progress.listingPages`.

SHA-256 do trecho: `2aef1f215d414e110e47de4a226b12312f0907fb93b068c8db7a5fcd04a1df2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
