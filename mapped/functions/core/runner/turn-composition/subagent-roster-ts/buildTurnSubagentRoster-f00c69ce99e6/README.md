# `buildTurnSubagentRoster`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/turn-composition/subagent-roster.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/subagent-roster-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587631-587701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587631-L587701) | `FunctionDeclaration` | não | `host, turnToolHost, turn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587631-587701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587631-L587701) | 10 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587631

Chamadas escritas diretamente neste corpo: `artifactToolOffers`, `availableDesktopExecutor`, `buildSandSubagentConfigs`, `createSandComputerUseSubagentConfig`, `createSandExecutorProfileModels`, `createSandExecutorSubagentConfig`, `createSandKnowledgeWorkSubagentConfig`, `createSandUserComputerUseSubagentConfig`, `createSubagentModels`, `executorWritesPages`, `hasExecutorSubagent`, `host.inference.getExecutorProfiles`, `host.knowledgeWorkSubagentDescription`, `offersUserComputerUseSubagent`, `sandSubagentToolName`, `subagentConfigs.findIndex`, `subagentConfigs.forEach`, `subagentConfigs.push`, `subagentConfigs.some`, `subagentConfigs.splice`, `turnToolHost.gates.executorForkContext`, `turnToolHost.gates.knowledgeWork`, `turnToolHost.gates.taskSubagentRoster`, `turnToolHost.getRemoteBoxAvailable`, `turnToolHost.isCombinedComputerUseAvailable`.

Alvos de atribuição ou incremento: `userInfoPromptVariant`.

SHA-256 do trecho: `2c1f5bc16760b685c3797f8c6c592ece1a3787f07a59822d9e3fca29566dd8d9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
