# `createSystemPromptAssembly/liveFrozenSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553117-553144](../../../../../../reference/runtime/sand-eval-runner.cjs#L553117-L553144) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553117-553144](../../../../../../reference/runtime/sand-eval-runner.cjs#L553117-L553144) | 17 | 0 | 0 | 9 | 0 | 0 |

### evaluation:553117

Chamadas escritas diretamente neste corpo: `botFilesForThisRunner`, `deps.mcpCustomInstructionsSection`, `deps.memoryStore`, `memoryControlLiveOrNull`, `memoryFactsInUserInfo`, `memoryFactsLiveOrNull`, `renderAgentDirectoryLive`, `renderAutomationsLive`, `renderBotFilesLive`, `renderSavedSendRulesLive`, `renderTimeZoneSectionLive`, `usesBuiltinSkillPointers`.

SHA-256 do trecho: `b105cee90f1bb706d590318055ff0e5482c3c26fb9500d6d3955303c910ec2ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
