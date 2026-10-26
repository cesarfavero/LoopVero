# `resolveSandTurnToolDecisions/enforce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/enforcement.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/enforcement-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:543281-543284](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543281-L543284) | `ArrowFunctionExpression` | não | `tools` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:543281-543284](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543281-L543284) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:543281 usa retorno implícito de arrow function.

### evaluation:543281

Chamadas escritas diretamente neste corpo: `tools.filter`.

SHA-256 do trecho: `acfe5bd2a388d05abc9ff3109eb5c120936f1699a4b40cd80793ae391443b185`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
