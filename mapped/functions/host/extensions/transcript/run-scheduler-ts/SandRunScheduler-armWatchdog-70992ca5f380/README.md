# `SandRunScheduler.armWatchdog`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-scheduler.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739840-739850](../../../../../../../reference/runtime/host-main.cjs#L739840-L739850) | `method` | não | `agentId, queue` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739840-739850](../../../../../../../reference/runtime/host-main.cjs#L739840-L739850) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:739840

Chamadas escritas diretamente neste corpo: `Math.max`, `this.clock.schedule`, `this.waitedBehindActiveMs`.

Alvos de atribuição ou incremento: `queue.watchdogTimer`.

SHA-256 do trecho: `4393095ae6d856c01d859621fb47e268e04cc7027c480b507021d8a07e9965c7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
