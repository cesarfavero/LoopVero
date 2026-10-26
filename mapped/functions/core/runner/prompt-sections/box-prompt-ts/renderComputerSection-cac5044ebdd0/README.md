# `renderComputerSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/box-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/box-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529047-529124](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529047-L529124) | `FunctionDeclaration` | não | `host, builtinSkillPointers, skillAccess = "read"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529047-529124](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529047-L529124) | 10 | 0 | 0 | 6 | 0 | 0 |

### evaluation:529047

Chamadas escritas diretamente neste corpo: `.join`, `availableDesktopExecutor`, `boxDriverDisplayLine`, `builtinSkillPointer`, `combinedBoxDesktopLines`, `desktopExecutorPort.computerPrompt`, `desktopExecutorPort.sharesBrowserTools`, `host.gates.passwordRulesReport`, `host.gates.promptContradictionFixes`, `host.gates.secureValues`, `host.gates.slowStepHeadsUp`, `host.isCombinedComputerUseAvailable`, `host.passwordRulesReportCopy`, `host.playwrightRunCode.current`, `host.resolveBoxBrowser`, `host.slowStepHeadsUpCopy`, `leanComputerPrompt`, `passwordRulesReportClause`, `sitePlaybookDispatchLine`, `slowStepHeadsUpLine`, `subagentHumanStepRule`.

SHA-256 do trecho: `bba1b43f5b8dd59f0922a89a5391aa2cb9d52da561f7da069940668416183b85`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
