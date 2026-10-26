# `combinedBoxDesktopLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/box-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/box-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528986-529006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528986-L529006) | `FunctionDeclaration` | não | `includeHumanSteps = true, desktopExecutor = false, {   contradictionFixes = false,   skillAccess = "read",   slowStepHeadsUp } = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528986-529006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528986-L529006) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528986

Chamadas escritas diretamente neste corpo: `SKILL_OPEN_COPY[computed].openAndFollow`, `sitePlaybookDispatchLine`.

SHA-256 do trecho: `c1d23a97a643c9041365877c29f138a9c1c1a3813274dce20f1dfa84d7db334d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
