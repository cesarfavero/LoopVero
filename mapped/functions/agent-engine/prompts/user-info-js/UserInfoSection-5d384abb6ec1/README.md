# `UserInfoSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639984-640008](../../../../../../reference/runtime/host-main.cjs#L639984-L640008) | `FunctionDeclaration` | não | `{ env, dsv3, hasGitRepos, gitRepoInfoComplete, gitRepos, todaysDate, terminalsFolder, agentSharedNotesFolder, agentConversationNotesFolder, metaAgentNotesDirectory, metaAgentNotesEnabled, displayTodaysDate, displayGitRepoStatusLine, displayUnknownWorkspacePath, agentStorePathsAdvertisedInPromptEnabled }` |
| [evaluation:430598-430622](../../../../../../reference/runtime/sand-eval-runner.cjs#L430598-L430622) | `FunctionDeclaration` | não | `{ env, dsv3, hasGitRepos, gitRepoInfoComplete, gitRepos, todaysDate, terminalsFolder, agentSharedNotesFolder, agentConversationNotesFolder, metaAgentNotesDirectory, metaAgentNotesEnabled, displayTodaysDate, displayGitRepoStatusLine, displayUnknownWorkspacePath, agentStorePathsAdvertisedInPromptEnabled }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639984-640008](../../../../../../reference/runtime/host-main.cjs#L639984-L640008) | 14 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430598-430622](../../../../../../reference/runtime/sand-eval-runner.cjs#L430598-L430622) | 14 | 0 | 0 | 2 | 0 | 0 |

### host:639984

Chamadas escritas diretamente neste corpo: `.join`, `allMountedAgentStores.filter`, `allMountedAgentStores.some`, `env.workspacePaths.map`, `gitRepos.map`, `isWorktreesPath`, `jsx`, `jsxs`, `mountedAgentStores.some`.

SHA-256 do trecho: `529f17014c8c8d378dab52ed904ddbffa19cd06e9fb46f0594b1c9c6a56219f6`.

### evaluation:430598

Chamadas escritas diretamente neste corpo: `.join`, `allMountedAgentStores.filter`, `allMountedAgentStores.some`, `env.workspacePaths.map`, `gitRepos.map`, `isWorktreesPath`, `jsx`, `jsxs`, `mountedAgentStores.some`.

SHA-256 do trecho: `529f17014c8c8d378dab52ed904ddbffa19cd06e9fb46f0594b1c9c6a56219f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
