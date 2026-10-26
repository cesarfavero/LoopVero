# `SandRunScheduler.onWatchdogFired`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-scheduler.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739857-739882](../../../../../../../reference/runtime/host-main.cjs#L739857-L739882) | `method` | não | `agentId, queue` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739857-739882](../../../../../../../reference/runtime/host-main.cjs#L739857-L739882) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:739857

Chamadas escritas diretamente neste corpo: `this.armWatchdog`, `this.clock.now`, `this.clock.schedule`, `this.options.telemetry.onWatchdog`, `this.waitedBehindActiveMs`.

Alvos de atribuição ou incremento: `active.phase`, `queue.graceTimer`.

SHA-256 do trecho: `a2233d111d2bf0307312636295a9f1ec8cabb0b00aeaec5f67680f8b018a3a0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
