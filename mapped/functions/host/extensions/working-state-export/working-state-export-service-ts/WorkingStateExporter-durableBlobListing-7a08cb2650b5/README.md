# `WorkingStateExporter.durableBlobListing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-export-service.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785577-785613](../../../../../../../reference/runtime/host-main.cjs#L785577-L785613) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785577-785613](../../../../../../../reference/runtime/host-main.cjs#L785577-L785613) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:785577

Chamadas escritas diretamente neste corpo: `.catch`, `.finally`, `.then`, `Promise.resolve`, `Symbol`, `new AbortController`, `new Set`.

Alvos de atribuição ou incremento: `this.durableListing`.

SHA-256 do trecho: `1d8ac329118212e23f19d4fea783c4c1c6c1cb1b4e60e94f6ead716ca712d210`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
