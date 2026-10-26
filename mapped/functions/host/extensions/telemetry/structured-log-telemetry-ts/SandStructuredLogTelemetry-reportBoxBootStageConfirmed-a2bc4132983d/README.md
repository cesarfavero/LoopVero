# `SandStructuredLogTelemetry.reportBoxBootStageConfirmed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473379-473382](../../../../../../../reference/runtime/host-main.cjs#L473379-L473382) | `method` | sim | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473379-473382](../../../../../../../reference/runtime/host-main.cjs#L473379-L473382) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:473379

Chamadas escritas diretamente neste corpo: `boxInfrastructureTelemetry`, `this.transport.shipConfirmed`.

SHA-256 do trecho: `25809a0ea7a63190a10c78dc0b836375bf5871eb52870187f2a27daf4bc8609b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
