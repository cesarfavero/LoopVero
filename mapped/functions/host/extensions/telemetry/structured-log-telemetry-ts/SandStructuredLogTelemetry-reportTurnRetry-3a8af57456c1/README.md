# `SandStructuredLogTelemetry.reportTurnRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473449-473455](../../../../../../../reference/runtime/host-main.cjs#L473449-L473455) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473449-473455](../../../../../../../reference/runtime/host-main.cjs#L473449-L473455) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:473449

Chamadas escritas diretamente neste corpo: `.noteRetry`, `this.activeTurnsByConversation.get`, `this.enqueue`, `turnRetryTelemetry`.

SHA-256 do trecho: `f69b51686b2443a3a64f2bd2d7890cb432d8be3ac8e2eb58ee7c5faf7cdce1c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
