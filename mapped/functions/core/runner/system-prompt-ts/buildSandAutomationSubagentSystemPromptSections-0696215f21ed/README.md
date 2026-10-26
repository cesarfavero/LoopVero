# `buildSandAutomationSubagentSystemPromptSections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533174-533193](../../../../../../reference/runtime/sand-eval-runner.cjs#L533174-L533193) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533174-533193](../../../../../../reference/runtime/sand-eval-runner.cjs#L533174-L533193) | 1 | 0 | 0 | 1 | 1 | 0 |

### evaluation:533174

Chamadas escritas diretamente neste corpo: `.flatMap`, `.join`, `buildSandBaseSystemPromptSections`, `creditCardLine`, `new Error`, `new Set`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `be7ec8909d26fe07b43eaecae699409fa51bc2bd8eadd1d0d0cff705bb80aa17`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
