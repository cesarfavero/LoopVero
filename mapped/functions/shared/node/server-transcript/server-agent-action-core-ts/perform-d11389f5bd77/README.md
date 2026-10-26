# `perform`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-agent-action-core.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-agent-action-core-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:710251-710749](../../../../../../../reference/runtime/host-main.cjs#L710251-L710749) | `FunctionDeclaration` | sim | `client, request5, deviceTimeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:710251-710749](../../../../../../../reference/runtime/host-main.cjs#L710251-L710749) | 68 | 0 | 28 | 49 | 0 | 0 |

### host:710251

Chamadas escritas diretamente neste corpo: `BigInt`, `Date.now`, `Number`, `acceptanceLookupOf`, `approvalResolutionProto`, `client.beginGrokBotSpendApproval`, `client.createGrokBotThreadFromMessage`, `client.discardGrokBotDraft`, `client.dismissGrokBotUserForm`, `client.dismissGrokBotWidget`, `client.endGrokBotBoxHandoff`, `client.getGrokBotSendStatus`, `client.interruptGrokBotAgentRun`, `client.listGrokBotStripeLinkPaymentMethods`, `client.listGrokBotSubagents`, `client.reactToGrokBotMessage`, `client.resolveGrokBotAutoReviewApproval`, `client.resolveGrokBotConnectorGrant`, `client.resolveGrokBotCredentialRequest`, `client.resolveGrokBotLocalToolPermission`, `client.resolveGrokBotVirtualCardApproval`, `client.respondGrokBotWidget`, `client.rollBackGrokBotConversation`, `client.sendGrokBotDraft`, `client.sendGrokBotUserMessage`, `client.setGrokBotAgentClientState`, `client.setGrokBotAgentDraftingDisabled`, `client.startFreshGrokBotConversation`, `client.submitGrokBotSecret`, `client.submitGrokBotUserForm`, `client.voteGrokBotFeedback`, `clientSurfaceProto`, `connectorGrantResolutionProto`, `credentialRequestResolutionProto`, `deviceTimeZone`, `draftProto`, `feedbackActionProto`, `firstSentAgeField`, `handBackTriggerProto`, `localToolPermissionResolutionProto`, `messageInitiatorProto`, `mobileSendSourceProto`, `paymentMethodsResultOf`, `refused`, `response.subagents.map`, `secretSaveRefused`, `sendableDeviceTimeZone`, `sessionIdField`, `spendApprovalBeginResultOf`, `staleUserForm`, `unreadableDelivery`, `userFormClientPlatformProto`, `userFormDismissModeProto`, `virtualCardResolutionProto`, `virtualCardResultOf`.

SHA-256 do trecho: `5d16abee6e25861c1d0953ef5e9f33ce0a2be3cf94ccd4b441465b87a7010972`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
