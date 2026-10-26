# `turnRetryTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/turn-telemetry-mappers.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/turn-telemetry-mappers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472414-472428](../../../../../../../reference/runtime/host-main.cjs#L472414-L472428) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472414-472428](../../../../../../../reference/runtime/host-main.cjs#L472414-L472428) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:472414

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedOrInvalidId`, `logFields`, `privacyModeRetryErrorProjection`.

SHA-256 do trecho: `5b3d86cf5e951b761b65dda3fab0060fdd85f4eca4ef1d9ad5c371b5dce30c72`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
