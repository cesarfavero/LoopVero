# `wedgedRunReapTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/turn-telemetry-mappers.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/turn-telemetry-mappers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472380-472391](../../../../../../../reference/runtime/host-main.cjs#L472380-L472391) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472380-472391](../../../../../../../reference/runtime/host-main.cjs#L472380-L472391) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:472380

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedOrInvalidId`, `logFields`.

SHA-256 do trecho: `34cad5f109e92ab46d22fa95d8dc6b9000d98dc51c10096b8f2802f8a8bdf74e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
