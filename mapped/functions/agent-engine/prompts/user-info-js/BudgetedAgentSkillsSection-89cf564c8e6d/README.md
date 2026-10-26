# `BudgetedAgentSkillsSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640090-640109](../../../../../../reference/runtime/host-main.cjs#L640090-L640109) | `FunctionDeclaration` | não | `{ skillItems, agentTokenLimit, raw, readToolName, isGpt56, protectLoopSkill, aliasPathPrefixes }` |
| [evaluation:430704-430723](../../../../../../reference/runtime/sand-eval-runner.cjs#L430704-L430723) | `FunctionDeclaration` | não | `{ skillItems, agentTokenLimit, raw, readToolName, isGpt56, protectLoopSkill, aliasPathPrefixes }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640090-640109](../../../../../../reference/runtime/host-main.cjs#L640090-L640109) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430704-430723](../../../../../../reference/runtime/sand-eval-runner.cjs#L430704-L430723) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640090

Chamadas escritas diretamente neste corpo: `applySkillCatalogBudget`.

SHA-256 do trecho: `5590c9279e13aac8fef1297e4d819203e3a3abf4d7ba733bb0ad7fbd1d7561f3`.

### evaluation:430704

Chamadas escritas diretamente neste corpo: `applySkillCatalogBudget`.

SHA-256 do trecho: `5590c9279e13aac8fef1297e4d819203e3a3abf4d7ba733bb0ad7fbd1d7561f3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
