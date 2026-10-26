# `HostTelemetryService.trackMessageSent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732171-732183](../../../../../../../reference/runtime/host-main.cjs#L732171-L732183) | `method` | não | `report, sent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732171-732183](../../../../../../../reference/runtime/host-main.cjs#L732171-L732183) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:732171

Chamadas escritas diretamente neste corpo: `brandedId`, `sandMessageLengthBucket`, `this.analytics.trackEvent`.

SHA-256 do trecho: `bae8915bc388640a40e1ea1fe51f909640bd5828e4ba65f553d2451fc11d3858`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
