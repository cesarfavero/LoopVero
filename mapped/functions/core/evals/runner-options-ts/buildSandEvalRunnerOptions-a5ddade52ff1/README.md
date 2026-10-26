# `buildSandEvalRunnerOptions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/evals/runner-options.ts` · [README do módulo](../../../../../modules/core/evals/runner-options-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596773-596855](../../../../../../reference/runtime/sand-eval-runner.cjs#L596773-L596855) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596773-596855](../../../../../../reference/runtime/sand-eval-runner.cjs#L596773-L596855) | 35 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596773

Chamadas escritas diretamente neste corpo: `buildSandSubagentSystemPrompt`, `composeEvalRunnerGates`, `createLocalAttachmentStore`, `createSandEvalUserMachines`, `frozenPromptOptions`, `gates.executorForkContext`, `gates.executorSendRules`, `generateImageStubOptions`, `memoryOptionsWhereRecallIsOffered`, `offersShellUserComputer`, `rlParityOptions`, `sandWebToolOffers`, `systemReminderPolicy`, `userMachines.wrapBox`.

SHA-256 do trecho: `7a515a2bc8b2a4ef5866bc6f5047135b7e7979cd82e0299908f7739b06f3ed6c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
