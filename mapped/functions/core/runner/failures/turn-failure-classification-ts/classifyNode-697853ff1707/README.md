# `classifyNode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/failures/turn-failure-classification.ts` · [README do módulo](../../../../../../modules/core/runner/failures/turn-failure-classification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736134-736153](../../../../../../../reference/runtime/host-main.cjs#L736134-L736153) | `FunctionDeclaration` | não | `error64, seen` |
| [evaluation:589634-589653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589634-L589653) | `FunctionDeclaration` | não | `error63, seen` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736134-736153](../../../../../../../reference/runtime/host-main.cjs#L736134-L736153) | 6 | 1 | 0 | 6 | 0 | 0 |
| [evaluation:589634-589653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589634-L589653) | 6 | 1 | 0 | 6 | 0 | 0 |

### host:736134

Chamadas escritas diretamente neste corpo: `Array.isArray`, `classifyError2`, `classifyExpectedTurnFailureErrorDetails`, `classifyNode`, `seen.add`, `seen.has`.

SHA-256 do trecho: `a8055d655f0e491e0be04807aea2696008690d7d0893fc863f2aafffda647ace`.

### evaluation:589634

Chamadas escritas diretamente neste corpo: `Array.isArray`, `classifyError2`, `classifyExpectedTurnFailureErrorDetails`, `classifyNode`, `seen.add`, `seen.has`.

SHA-256 do trecho: `044f26fe32a4bf1f77a79a8db41aa7fd5b6cf2d4d2387f74d2cef2db856f0574`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
