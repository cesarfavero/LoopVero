# `SandStructuredLogTelemetry.reportSupervisorRestart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473389-473394](../../../../../../../reference/runtime/host-main.cjs#L473389-L473394) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473389-473394](../../../../../../../reference/runtime/host-main.cjs#L473389-L473394) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473389

Chamadas escritas diretamente neste corpo: `this.enqueueBoxInfrastructureEvent`.

SHA-256 do trecho: `ca82a4cc0a7272a98355bf527b453c199d94901f9eb5b689a66fa47c50c272c0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
