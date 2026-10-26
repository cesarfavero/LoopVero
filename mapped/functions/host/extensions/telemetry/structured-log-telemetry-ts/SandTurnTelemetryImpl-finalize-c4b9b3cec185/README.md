# `SandTurnTelemetryImpl.finalize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473863-473897](../../../../../../../reference/runtime/host-main.cjs#L473863-L473897) | `method` | não | `outcome, error64, detail` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473863-473897](../../../../../../../reference/runtime/host-main.cjs#L473863-L473897) | 8 | 0 | 0 | 1 | 0 | 0 |

### host:473863

Chamadas escritas diretamente neste corpo: `Date.now`, `Math.round`, `adjustTurnOutcomeForBotBlock`, `brandLiteralEnum`, `consumeTurnBotBlock`, `errorDetailTags`, `eventLogFields`, `logFields`, `sandErrorTags`, `this.baseTags`, `this.emitStart`, `this.onFinalized`, `this.telemetry.emitTurnEvent`.

Alvos de atribuição ou incremento: `this.finalized`.

SHA-256 do trecho: `6f2f5c05e03a0e0f750f8edde4490fd64a9ab6c628c1c71bb7038dd949a4e7a8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
