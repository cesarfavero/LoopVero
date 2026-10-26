# `createSystemPromptAssembly/renderSections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553642-553702](../../../../../../reference/runtime/sand-eval-runner.cjs#L553642-L553702) | `FunctionDeclaration` | não | `profileSnapshot, sendToUserEndTurnEnabled = false, skillPointers = usesBuiltinSkillPointers(), baseOverride = readBaseSystemPromptOverride(), leanExecutorFacts = readLeanExecutorFacts(), hostSectionsInBase = deps.systemPromptIsComplete === true, mountedTools` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553642-553702](../../../../../../reference/runtime/sand-eval-runner.cjs#L553642-L553702) | 6 | 0 | 0 | 1 | 0 | 0 |

### evaluation:553642

Chamadas escritas diretamente neste corpo: `deps.computerSection`, `deps.skillAccess`, `frozen`, `getActiveSessionsSection`, `getAgentDirectorySection`, `getAutomationsSection`, `getBaseSystemPrompt`, `getBotFilesSection`, `getChannelsSection`, `getCurrentSessionSection`, `getInternalDetailsBoundaryLine`, `getMcpAccountsSection`, `getMemorySections`, `getMultitaskSection`, `getPersonalBotSlackSection`, `getProfileSection`, `getRelatedConversationsSection`, `getSavedSendRulesSection`, `getSkillsSection`, `getTasksSection`, `getTeamBotSection`, `getTimeZoneSection`, `getUserIdentitySection`, `includesVoiceCallPrompt`, `mountedTools.has`, `new Map`, `offersShellUserComputer`, `push`, `remoteBoxSection`, `resolveProfileForPrompt`, `spotlightPromptSection`, `underHeading`, `voiceChannelSection`.

Alvos de atribuição ou incremento: `lastRenderedMemoryContext`, `lastRenderedMemoryContextResolved`, `lastRenderedMemoryWithheld`.

SHA-256 do trecho: `74564c051efbb15803627c61c592cec08793ba97774fb0ace543f12b7d54c02e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
