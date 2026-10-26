# `CloudTaskInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud-agent.js` · [README do módulo](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636184-636206](../../../../../../reference/runtime/host-main.cjs#L636184-L636206) | `FunctionDeclaration` | não | `{ gitRepos, designatedBranches, startedAsNewProject = false, prsOnlyOnRequest = false, newProjectSeededEmptyRoot = false, agentPreviewCard = false, preferMarkdownPreviewLink = false, skipPreviewScreenshot = false, agentPreviewCardXmllint = false, appsPublishPill = false, branchPrefix, branchSuffix, allowMultipleBranches = false, preferCurrentBranchInMultiPrMode = false, toolInfo, staleBuildGitRefs, pushAfterTesting }` |
| [evaluation:424240-424262](../../../../../../reference/runtime/sand-eval-runner.cjs#L424240-L424262) | `FunctionDeclaration` | não | `{ gitRepos, designatedBranches, startedAsNewProject = false, prsOnlyOnRequest = false, newProjectSeededEmptyRoot = false, agentPreviewCard = false, preferMarkdownPreviewLink = false, skipPreviewScreenshot = false, agentPreviewCardXmllint = false, appsPublishPill = false, branchPrefix, branchSuffix, allowMultipleBranches = false, preferCurrentBranchInMultiPrMode = false, toolInfo, staleBuildGitRefs, pushAfterTesting }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636184-636206](../../../../../../reference/runtime/host-main.cjs#L636184-L636206) | 32 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424240-424262](../../../../../../reference/runtime/sand-eval-runner.cjs#L424240-L424262) | 32 | 0 | 0 | 1 | 0 | 0 |

### host:636184

Chamadas escritas diretamente neste corpo: `buildRepoPathLookup`, `getDesignatedBranchDisplayInfo`, `getGitRepoBranchDisplayInfo`, `gitRepoBranchDisplays.map`, `jsx`, `jsxs`.

SHA-256 do trecho: `d0bc59c57b55d58e3c63e9071b36f4417805001613885af19d6aeaffa2e16300`.

### evaluation:424240

Chamadas escritas diretamente neste corpo: `buildRepoPathLookup`, `getDesignatedBranchDisplayInfo`, `getGitRepoBranchDisplayInfo`, `gitRepoBranchDisplays.map`, `jsx`, `jsxs`.

SHA-256 do trecho: `d0bc59c57b55d58e3c63e9071b36f4417805001613885af19d6aeaffa2e16300`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
