# `createSystemPromptAssembly/renderAgentDirectoryLive`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553290-553328](../../../../../../reference/runtime/sand-eval-runner.cjs#L553290-L553328) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553290-553328](../../../../../../reference/runtime/sand-eval-runner.cjs#L553290-L553328) | 8 | 0 | 0 | 7 | 0 | 0 |

### evaluation:553290

Chamadas escritas diretamente neste corpo: `deps.agentDirectory`, `deps.agentGroups`, `deps.agentsRootDir`, `deps.gates.sendToAgentRoster`, `deps.gates.teamBotDiscovery`, `deps.skillAccess`, `offersSendToAgent`, `renderAgentDirectorySystemPrompt`, `renderAutomationAgentDirectorySystemPrompt`, `renderTeammatesUserInfoBlock`, `renderTrimmedAgentDirectorySystemPrompt`, `teamBotLinksSkillPointer`, `usesBuiltinSkillPointers`.

SHA-256 do trecho: `e63566a23408896a2ee9df2c549157280b46f656a40507121a1107aa5d9e1c23`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
