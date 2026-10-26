# `SandStructuredLogTelemetry.reportPolicyStopped`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473604-473607](../../../../../../../reference/runtime/host-main.cjs#L473604-L473607) | `method` | não | `stop` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473604-473607](../../../../../../../reference/runtime/host-main.cjs#L473604-L473607) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473604

Chamadas escritas diretamente neste corpo: `policyStoppedTelemetry`, `this.enqueue`.

SHA-256 do trecho: `6489a5e3330c09dbe04810fff833120d90db19b3e209d17788b3ec48ea791819`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
