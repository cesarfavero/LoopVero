# `GroupChatGlue.postToGroupWithStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/group-chat-glue.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738343-738415](../../../../../../../reference/runtime/host-main.cjs#L738343-L738415) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738343-738415](../../../../../../../reference/runtime/host-main.cjs#L738343-L738415) | 5 | 0 | 2 | 6 | 0 | 2 |

### host:738343

Chamadas escritas diretamente neste corpo: `Date.now`, `__callDispose`, `__using`, `brandedId`, `clampAgentMessage`, `config2.memberIds.includes`, `isAgentAbsent`, `isPassContent`, `reportFallback`, `textGroupPost`, `this.deliveryFor`, `this.groupIdentityFor`, `this.localGroupConfig`, `this.postGroupMemberMessage`, `this.resolveGroupMembers`, `this.tm.backgroundWakes.appendAgentOutboundEntry`, `this.tm.productAnalytics.trackEvent`, `this.tm.runLifecycle.beginSessionRun`, `this.tm.runLifecycle.enqueueExclusiveRun`, `this.tm.sendPipeline.nextTurnEpoch`, `this.tm.sessions.leaseBackgroundSession`.

Alvos de atribuição ou incremento: `leased`.

SHA-256 do trecho: `54bcca90054b05857a81b6f534608aea0caabaf5069ce120a5e8611028afb6b1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
