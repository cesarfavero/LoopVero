# `createCloudAgentsClient/launch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512916-513032](../../../../../../reference/runtime/host-main.cjs#L512916-L513032) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512916-513032](../../../../../../reference/runtime/host-main.cjs#L512916-L513032) | 20 | 0 | 6 | 1 | 6 | 0 |

### host:512916

Chamadas escritas diretamente neste corpo: `.startBackgroundComposerFromSnapshot`, `args.customMode.trim`, `args.startingRef.trim`, `args.title.trim`, `buildCloudAgentConversationAction`, `buildCloudAgentRequestedModel`, `buildCloudAgentUserMessage`, `buildRepoFromRemote`, `client`, `cloudAgentUrl`, `crypto.randomUUID`, `deps.getDashboardClient`, `deps.prepareNewRepo`, `new DevcontainerStartingPoint`, `new GrokBotHandoffLineage`, `new ProjectDetails`, `new SandCloudAgentCustomModeError`, `new SandCloudAgentLaunchError`, `new StartBackgroundComposerFromSnapshotRequest`, `newRepo.markLaunched`, `refuseUnboundSecretNames`, `requireCustomModesEnabled`, `resolveCloudAgentEnvironmentFields`, `resolveLaunchCustomMode`, `resolveLaunchRepoReference`, `resolvePrivateWorkerMachine`, `resolvePrivateWorkerTeamId`, `resolveSavedEnvironment`, `savedEnvironment.name.trim`, `toStartRepoConfig`.

Alvos de lançamento explícito: `SandCloudAgentCustomModeError`, `SandCloudAgentLaunchError`.

SHA-256 do trecho: `ac70e014ea39e7bae2c7389751bdc0c7baec7c39b586bc95d69d81b3d7859738`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
