# `SandMobilePushNotifier.handleAgentUpsertedEvent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/notifications/mobile-push-notifier.ts` · [README do módulo](../../../../../../modules/host/extensions/notifications/mobile-push-notifier-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:703469-703482](../../../../../../../reference/runtime/host-main.cjs#L703469-L703482) | `method` | não | `event, presence` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703469-703482](../../../../../../../reference/runtime/host-main.cjs#L703469-L703482) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:703469

Chamadas escritas diretamente neste corpo: `isBoxHarness`, `this.decider.decideAgent`, `this.fire`, `this.preSeedDeltas.push`, `this.resolvePresence`, `toNotificationSnapshot`.

SHA-256 do trecho: `0ae295e485d733616520df2bec37cfe63f738bac653b9217d33fe0b52173bdc8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
