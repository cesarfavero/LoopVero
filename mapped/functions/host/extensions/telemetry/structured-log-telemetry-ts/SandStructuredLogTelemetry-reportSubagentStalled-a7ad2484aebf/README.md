# `SandStructuredLogTelemetry.reportSubagentStalled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473486-473497](../../../../../../../reference/runtime/host-main.cjs#L473486-L473497) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473486-473497](../../../../../../../reference/runtime/host-main.cjs#L473486-L473497) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473486

Chamadas escritas diretamente neste corpo: `brandedOrInvalidId`, `cappedToolCallMs`, `logFields`, `this.enqueue`.

SHA-256 do trecho: `2c7bd32208ae520ed56c1a955b2e77bc7fa2417bfb9a5d9913a27febb3bfed1b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
