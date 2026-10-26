# `UserInfoComponent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640487-640616](../../../../../../reference/runtime/host-main.cjs#L640487-L640616) | `FunctionDeclaration` | não | `{ props }` |
| [evaluation:431101-431230](../../../../../../reference/runtime/sand-eval-runner.cjs#L431101-L431230) | `FunctionDeclaration` | não | `{ props }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640487-640616](../../../../../../reference/runtime/host-main.cjs#L640487-L640616) | 14 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431101-431230](../../../../../../reference/runtime/sand-eval-runner.cjs#L431101-L431230) | 14 | 0 | 0 | 2 | 0 | 0 |

### host:640487

Chamadas escritas diretamente neste corpo: `.filter`, `McpMetaToolInstructions`, `automationInstructions.trim`, `buildAvailableSkillsPromptSection`, `buildRulesPromptSection`, `categorizeCursorRulesForDisplay`, `filterProjectWorkspaceMutationMcpDescriptors`, `getComposer2CloudTestingSectionElements`, `getComposer2CloudTestingSectionsPlacement`, `getDsv3McpFileSystemInstructions`, `getFriendlyDateForTimeZone`, `getPreviewSharingFormat`, `gitRepos.filter`, `globalRules.map`, `isNamedAgentHomePromptSession`, `jsx`, `jsxs`, `materializeAutomationMemoryInstruction`, `prefersMarkdownPreviewLink`, `props.env.devMockPromptTime.toDate`, `props.env.processWorkingDirectory.trim`, `props.hooksAdditionalContext.trim`, `props.userIntentSummary.trim`, `resolveCloudInstructions`, `resolveMetaAgentNotesDirectory`.

SHA-256 do trecho: `c18a7fcde7711d4a50b8175a092e5569d9babd26a4fd8232efa02659c010c4ce`.

### evaluation:431101

Chamadas escritas diretamente neste corpo: `.filter`, `McpMetaToolInstructions`, `automationInstructions.trim`, `buildAvailableSkillsPromptSection`, `buildRulesPromptSection`, `categorizeCursorRulesForDisplay`, `filterProjectWorkspaceMutationMcpDescriptors`, `getComposer2CloudTestingSectionElements`, `getComposer2CloudTestingSectionsPlacement`, `getDsv3McpFileSystemInstructions`, `getFriendlyDateForTimeZone`, `getPreviewSharingFormat`, `gitRepos.filter`, `globalRules.map`, `isNamedAgentHomePromptSession`, `jsx`, `jsxs`, `materializeAutomationMemoryInstruction`, `prefersMarkdownPreviewLink`, `props.env.devMockPromptTime.toDate`, `props.env.processWorkingDirectory.trim`, `props.hooksAdditionalContext.trim`, `props.userIntentSummary.trim`, `resolveCloudInstructions`, `resolveMetaAgentNotesDirectory`.

SHA-256 do trecho: `c18a7fcde7711d4a50b8175a092e5569d9babd26a4fd8232efa02659c010c4ce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
