# `turnEmptyDeliveryTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/turn-empty-delivery-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/turn-empty-delivery-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472329-472346](../../../../../../../reference/runtime/host-main.cjs#L472329-L472346) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472329-472346](../../../../../../../reference/runtime/host-main.cjs#L472329-L472346) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:472329

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedId`, `brandedOrInvalidId`, `logFields`.

SHA-256 do trecho: `97517e5cd4786e7ceb5574de98c5c276cbc2c4e38f6d35d114cd471860b3cc54`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
