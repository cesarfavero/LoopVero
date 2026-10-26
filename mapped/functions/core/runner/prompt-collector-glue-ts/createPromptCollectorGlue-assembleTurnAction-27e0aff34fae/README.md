# `createPromptCollectorGlue/assembleTurnAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-collector-glue.ts` · [README do módulo](../../../../../modules/core/runner/prompt-collector-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533858-534006](../../../../../../reference/runtime/sand-eval-runner.cjs#L533858-L534006) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533858-534006](../../../../../../reference/runtime/sand-eval-runner.cjs#L533858-L534006) | 14 | 0 | 3 | 1 | 0 | 0 |

### evaluation:533858

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.map`, `.some`, `allowsSystemReminder`, `appendUserMessageReminders`, `args.compactionEpoch`, `attachedFilePaths.map`, `automationWakeTrustMarker`, `backgroundResultNoteForPrompt`, `buildAttachedFilesNote`, `buildUnansweredQuestionsNote`, `buildUserMessageLeadingNotes`, `freshMessageIds.add`, `getAutomationStatusReminderForTurn`, `hiddenPromptMarker`, `host.gates.backgroundResultNote`, `host.gates.remindersOutsideUserQuery`, `host.gates.renamedPromptMarkers`, `host.gates.sandUiMap`, `host.gates.typedCardReply`, `host.gates.typedCardReplyChatFollowup`, `host.gates.unansweredCardOnWake`, `host.gates.widgetV0`, `host.resolveBoxId`, `isAgentStartedPrompt`, `joinNonEmpty`, `new ConversationAction`, `new SelectedContext`, `new Set`, `new UserMessage`, `new UserMessageAction`, `options2.messageId.trim`, `options2.richText.trim`, `peerWakeApprovalReminderFor`, `prependUserMessages.push`, `readSubagentImageAttachments`, `resolveSelectedVideosForTurn`, `sandSubagentToolName`, `selectedImageInputs.flatMap`, `selectedImageInputs.map`, `traceSendPhase`, `turnNotes.flatMap`, `turnNotes.reduce`, `userMessageReminderBodies`.

SHA-256 do trecho: `d192603ac5ce5df5f7e2e1515c6db2b600e8cc3e82e855643680ad875d5f1c90`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
