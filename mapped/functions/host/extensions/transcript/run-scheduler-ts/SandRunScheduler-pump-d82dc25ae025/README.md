# `SandRunScheduler.pump`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-scheduler.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739754-739813](../../../../../../../reference/runtime/host-main.cjs#L739754-L739813) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739754-739813](../../../../../../../reference/runtime/host-main.cjs#L739754-L739813) | 7 | 0 | 0 | 3 | 0 | 1 |

### host:739754

Chamadas escritas diretamente neste corpo: `Promise.reject`, `new Promise`, `next.task`, `queue.pendingAgent.shift`, `queue.pendingBackground.shift`, `takeNextUserTask`, `taskPromise.then`, `this.armWatchdog`, `this.clock.now`, `this.disarmWatchdog`, `this.options.telemetry.onDequeued`, `this.queues.get`.

Alvos de atribuição ou incremento: `next`, `queue.active`, `queue.generationCounter`, `taskPromise`.

SHA-256 do trecho: `20c61c4473c5dbdc7fc812cce7b54f61cfc509282407f71ac08813b6907941f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
