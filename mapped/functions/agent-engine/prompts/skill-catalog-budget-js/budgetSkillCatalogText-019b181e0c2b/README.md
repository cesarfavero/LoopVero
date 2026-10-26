# `budgetSkillCatalogText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-budget.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:430045-430068](../../../../../../reference/runtime/sand-eval-runner.cjs#L430045-L430068) | `FunctionDeclaration` | não | `{ skills, agentTokenLimit, renderCatalog, renderOmittedNotice }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:430045-430068](../../../../../../reference/runtime/sand-eval-runner.cjs#L430045-L430068) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:430045

Chamadas escritas diretamente neste corpo: `applySkillCatalogBudget`, `new WeakMap`, `renderContent`, `texts.get`.

SHA-256 do trecho: `8b9702c0b9649eba435b05ff42c5d96a1568007dbbd52b113031c8172891ff43`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
