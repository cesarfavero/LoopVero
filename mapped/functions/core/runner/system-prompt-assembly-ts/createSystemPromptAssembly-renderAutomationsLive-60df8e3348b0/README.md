# `createSystemPromptAssembly/renderAutomationsLive`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553226-553247](../../../../../../reference/runtime/sand-eval-runner.cjs#L553226-L553247) | `FunctionDeclaration` | não | `skillPointers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553226-553247](../../../../../../reference/runtime/sand-eval-runner.cjs#L553226-L553247) | 5 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553226

Chamadas escritas diretamente neste corpo: `deps.automationStore`, `deps.gates.automationRunGuidance`, `deps.gates.automationTiming`, `deps.isBoxScopedSubagent`, `deps.requestContext.resolve`, `deps.teamBot`, `renderAutomationsSystemPrompt`, `sandMcpMetaToolNames`, `store.getLocation`, `teamBotSlackListenerInvite`.

SHA-256 do trecho: `b000e2374f28a2fab6890a878e4944e1e9061e5c8e5b5cc00231eafe94eca8c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
