# `runCloudAgentAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-tool.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:568115-568809](../../../../../../reference/runtime/sand-eval-runner.cjs#L568115-L568809) | `FunctionDeclaration` | sim | `ctx, args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568115-568809](../../../../../../reference/runtime/sand-eval-runner.cjs#L568115-L568809) | 177 | 1 | 40 | 77 | 12 | 8 |

### evaluation:568115

Chamadas escritas diretamente neste corpo: `.flatMap`, `.join`, `.map`, `JSON.stringify`, `Object.keys`, `adoptionTail`, `all.filter`, `api.cancel`, `api.delete`, `api.findByPr`, `api.get`, `api.launch`, `api.list`, `api.listArtifacts`, `api.listEnvironments`, `api.listModels`, `api.listProjectThreads`, `api.listRepositories`, `api.listWorkers`, `api.publishRepository`, `api.rename`, `api.reply`, `api.setArchived`, `args.agent_id.trim`, `args.custom_mode.trim`, `args.repo.trim`, `args.repo_url.trim`, `args.title.trim`, `artifacts.map`, `backendRejectionMessage`, `childStoreOnBoxClaim`, `cloudAgentActionNeedsReview`, `cloudAgentConfirmVerdict`, `cloudAgentLaunchSeesBotStore`, `cloudAgentMetricsScope`, `cloudAgentRuntimeDescription`, `composeCanvasScratchLaunchPrompt`, `deps.canvasCursorAgentIds.add`, `deps.describeScmConnect`, `deps.hiddenCursorAgentCardIds.add`, `deps.hiddenCursorAgentCardIds.has`, `deps.launchBlockedReason`, `deps.onFollowupSent`, `deps.onLaunched`, `deps.onRefused`, `deps.reviewAction`, `deps.steer`, `deps.unwatch`, `deps.watch`, `deriveCloudAgentHandoffLineage`, `describeCloudAgentLaunchStores`, `describeCloudAgentSecretForwardRefusal`, `describeDumpedRun`, `describeSavedEnvironments`, `describeVisibility`, `dumpCloudAgentTranscript`, `encodeURIComponent`, `errorLogTag`, `exchangeAttachmentsOf`, `filtered.flatMap`, `formatCloudAgentLaunchBlockedMessage`, `forwardedSecretsClause`, `isOwnedCloudAgentProject`, `launchCard`, `launchedIds.add`, `launchedIds.delete`, `launchedIds.has`, `lines2.join`, `lines2.push`, `loadCloudAgentAttachments`, `modelCatalogLines`, `new Map`, `new SandCloudAgentToolInputError`, `normalizeCloudAgentSecretNames`, `prDetailLine`, `process.stderr.write`, `projectView`, `projectsByActivity`, `prompt.slice`, `publishRepositoryRejectionMessage`, `published.name.toLowerCase`, `pullRequestListText`, `readCloudAgentProjectTrees`, `recordCloudAgentExchangeOutbound`, `recordCloudAgentReply`, `recordCloudAgentSecretForward`, `recordDelegationDispatched`, `renderPrLookup`, `renderProjectDetail`, `renderProjectTreeDetail`, `repoName.toLowerCase`, `requireField2`, `resolveReplyMode`, `result.connectedProviders.join`, `result.repos.map`, `result.unreachableProviders.join`, `runPublishAppAction`, `stillWorkAfterUnwatch`, `toCloudAgentEnvironment`, `unlistable.get`, `unlistable.set`, `validateModelSelection`, `watchProvenanceOf`, `workers.map`.

Alvos de atribuição ou incremento: `attachments`, `knownName`, `lookup3`, `outcome`, `prClause`, `published`, `result`, `sent`, `wasRunning`.

Alvos de lançamento explícito: `SandCloudAgentToolInputError`, `error63`.

SHA-256 do trecho: `b2d145e8a8f65168dcc4188139c31458d63072fdb20ad24d1069428924ca467c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
