# `delegationPromptSections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/multitask-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/multitask-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754474-754510](../../../../../../../reference/runtime/host-main.cjs#L754474-L754510) | `FunctionDeclaration` | não | `toolName, offers = {}` |
| [evaluation:537177-537213](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537177-L537213) | `FunctionDeclaration` | não | `toolName, offers = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754474-754510](../../../../../../../reference/runtime/host-main.cjs#L754474-L754510) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537177-537213](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537177-L537213) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:754474

Chamadas escritas diretamente neste corpo: `.join`, `executorBuildsVisualsLine`, `executorWritesPagesLine`, `userDelegationTail`.

SHA-256 do trecho: `9ea5dcc6e988129fdac56f6875c69471b876e8b67cbb6a6758534876708a0564`.

### evaluation:537177

Chamadas escritas diretamente neste corpo: `.join`, `executorBuildsVisualsLine`, `executorWritesPagesLine`, `userDelegationTail`.

SHA-256 do trecho: `9ea5dcc6e988129fdac56f6875c69471b876e8b67cbb6a6758534876708a0564`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
