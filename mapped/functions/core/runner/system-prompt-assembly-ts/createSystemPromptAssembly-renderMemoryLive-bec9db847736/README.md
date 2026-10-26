# `createSystemPromptAssembly/renderMemoryLive`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552806-552920](../../../../../../reference/runtime/sand-eval-runner.cjs#L552806-L552920) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552806-552920](../../../../../../reference/runtime/sand-eval-runner.cjs#L552806-L552920) | 9 | 0 | 0 | 2 | 0 | 0 |

### evaluation:552806

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `controlParts.join`, `controlParts.push`, `deps.memoryFactsResolved`, `deps.memoryFolders`, `deps.memoryStore`, `deps.runType`, `deps.teamBot`, `deps.userMemory`, `deps.vaultMounted`, `factParts.join`, `factParts.push`, `memoryRecallHasFacts`, `policyParts.join`, `policyParts.push`, `readLeanExecutorFacts`, `recordMemoryTruncation`, `renderFolders`, `renderMemoryFactSnapshot`, `renderMemorySystemPolicyPrompt`, `renderMemorySystemPrompt`, `renderSandExecutorLeanMemoryLine`, `renderUserBotNotesPrompt`, `renderUserMemoryFactSnapshot`, `renderUserMemorySystemPolicyPrompt`, `renderUserMemorySystemPrompt`, `store.getLocation`, `store.recall`, `userMemory.getLocation`, `userMemory.getOwnShardLocation`, `userMemory.recall`.

Alvos de atribuição ou incremento: `hasFacts`, `memoryTruncationRecorded`, `otherAgentMemoryFingerprint`, `otherAgentMemoryRender`.

SHA-256 do trecho: `b8577d788a6bf99c94445af5165fac14ab0b8cd05aa775f540b8ab0c2e9b02c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
