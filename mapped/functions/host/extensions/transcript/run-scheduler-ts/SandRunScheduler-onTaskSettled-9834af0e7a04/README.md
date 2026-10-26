# `SandRunScheduler.onTaskSettled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-scheduler.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739814-739833](../../../../../../../reference/runtime/host-main.cjs#L739814-L739833) | `method` | não | `agentId, queue, active, failure3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739814-739833](../../../../../../../reference/runtime/host-main.cjs#L739814-L739833) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:739814

Chamadas escritas diretamente neste corpo: `active.item.reject`, `active.item.resolve`, `this.clock.now`, `this.disarmWatchdog`, `this.options.telemetry.onWatchdog`, `this.pump`.

Alvos de atribuição ou incremento: `queue.active`.

SHA-256 do trecho: `d50aef005f461375f51606c404b5213f223420ce8de712c4727b6ce352063433`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
