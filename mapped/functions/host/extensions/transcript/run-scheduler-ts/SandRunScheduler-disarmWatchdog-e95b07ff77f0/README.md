# `SandRunScheduler.disarmWatchdog`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-scheduler.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739851-739856](../../../../../../../reference/runtime/host-main.cjs#L739851-L739856) | `method` | não | `queue` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739851-739856](../../../../../../../reference/runtime/host-main.cjs#L739851-L739856) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:739851

Chamadas escritas diretamente neste corpo: `queue.graceTimer.dispose`, `queue.watchdogTimer.dispose`.

Alvos de atribuição ou incremento: `queue.graceTimer`, `queue.watchdogTimer`.

SHA-256 do trecho: `541b03e15cefe24b7d111a712a3fc74f24ce2d1a18d26e070d8c9893292073de`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
