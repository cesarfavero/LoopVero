# `applySkillCatalogBudget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-budget.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639375-639451](../../../../../../reference/runtime/host-main.cjs#L639375-L639451) | `FunctionDeclaration` | não | `{ skills, agentTokenLimit, renderSection, renderOmittedNotice, protectLoopSkill }` |
| [evaluation:429965-430041](../../../../../../reference/runtime/sand-eval-runner.cjs#L429965-L430041) | `FunctionDeclaration` | não | `{ skills, agentTokenLimit, renderSection, renderOmittedNotice, protectLoopSkill }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639375-639451](../../../../../../reference/runtime/host-main.cjs#L639375-L639451) | 6 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:429965-430041](../../../../../../reference/runtime/sand-eval-runner.cjs#L429965-L430041) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:639375

Chamadas escritas diretamente neste corpo: `Math.floor`, `estimateStringTokenCount`, `new Set`, `omitSkillsToFit`, `renderContent`, `renderSection`, `skills.filter`, `toPathOnlySkills`, `truncateDescriptionsToFit`.

SHA-256 do trecho: `5d4929655e162fd37f3eaa4b6d78e18aadeceaba54418fe41b5dd1138c25b35d`.

### evaluation:429965

Chamadas escritas diretamente neste corpo: `Math.floor`, `estimateStringTokenCount`, `new Set`, `omitSkillsToFit`, `renderContent`, `renderSection`, `skills.filter`, `toPathOnlySkills`, `truncateDescriptionsToFit`.

SHA-256 do trecho: `5d4929655e162fd37f3eaa4b6d78e18aadeceaba54418fe41b5dd1138c25b35d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
