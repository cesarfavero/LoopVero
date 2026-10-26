# `applySkillCatalogBudget/isProtected`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-budget.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639380-639380](../../../../../../reference/runtime/host-main.cjs#L639380-L639380) | `ArrowFunctionExpression` | não | `skill` |
| [evaluation:429970-429970](../../../../../../reference/runtime/sand-eval-runner.cjs#L429970-L429970) | `ArrowFunctionExpression` | não | `skill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639380-639380](../../../../../../reference/runtime/host-main.cjs#L639380-L639380) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:639380 usa retorno implícito de arrow function.
| [evaluation:429970-429970](../../../../../../reference/runtime/sand-eval-runner.cjs#L429970-L429970) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:429970 usa retorno implícito de arrow function.

### host:639380

Chamadas escritas diretamente neste corpo: `protectedSkills.has`.

SHA-256 do trecho: `12997e85be4e3d9bc287dc935509224cff8166b6cfb9f962a7ae50c9c2f6a3ee`.

### evaluation:429970

Chamadas escritas diretamente neste corpo: `protectedSkills.has`.

SHA-256 do trecho: `12997e85be4e3d9bc287dc935509224cff8166b6cfb9f962a7ae50c9c2f6a3ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
