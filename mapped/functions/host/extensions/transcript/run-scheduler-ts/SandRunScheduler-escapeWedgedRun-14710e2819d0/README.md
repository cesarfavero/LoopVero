# `SandRunScheduler.escapeWedgedRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-scheduler.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739883-739901](../../../../../../../reference/runtime/host-main.cjs#L739883-L739901) | `method` | não | `agentId, queue, active` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739883-739901](../../../../../../../reference/runtime/host-main.cjs#L739883-L739901) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:739883

Chamadas escritas diretamente neste corpo: `active.item.resolve`, `active.settled.then`, `queue.zombies.add`, `this.clock.now`, `this.options.telemetry.onWatchdog`, `this.pump`.

Alvos de atribuição ou incremento: `queue.active`.

SHA-256 do trecho: `d1fc0fc9224527564fdb093af5e1a1531b85f2d1b79e211447560ad61d1887c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
