# `SandStructuredLogTelemetry.startTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472808-472817](../../../../../../../reference/runtime/host-main.cjs#L472808-L472817) | `method` | não | `start` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472808-472817](../../../../../../../reference/runtime/host-main.cjs#L472808-L472817) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:472808

Chamadas escritas diretamente neste corpo: `beginTurnBotBlock`, `new SandTurnTelemetryImpl`, `this.activeTurnsByConversation.set`.

SHA-256 do trecho: `1a1757d645fe5841f9a70c1f8d4fe915a2121e369b62a6a3bdb5f0ef2d152fd7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
