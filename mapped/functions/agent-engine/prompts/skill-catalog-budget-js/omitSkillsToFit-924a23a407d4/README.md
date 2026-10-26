# `omitSkillsToFit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-budget.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639485-639541](../../../../../../reference/runtime/host-main.cjs#L639485-L639541) | `FunctionDeclaration` | não | `{ pathOnlySkills, allSkills, budgetTokens, maxRetainedDroppableCount, uncappedEstimatedTokens, renderSection, renderOmittedNotice, isProtected }` |
| [evaluation:430099-430155](../../../../../../reference/runtime/sand-eval-runner.cjs#L430099-L430155) | `FunctionDeclaration` | não | `{ pathOnlySkills, allSkills, budgetTokens, maxRetainedDroppableCount, uncappedEstimatedTokens, renderSection, renderOmittedNotice, isProtected }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639485-639541](../../../../../../reference/runtime/host-main.cjs#L639485-L639541) | 3 | 3 | 0 | 1 | 0 | 0 |
| [evaluation:430099-430155](../../../../../../reference/runtime/sand-eval-runner.cjs#L430099-L430155) | 3 | 3 | 0 | 1 | 0 | 0 |

### host:639485

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.min`, `droppableIndices.push`, `isProtected`, `renderRetaining`.

Alvos de atribuição ou incremento: `fitting`, `fittingCount`, `i`, `overflowingCount`, `probe`.

SHA-256 do trecho: `97f61d41e6c34cc6635997ae8a136072559da2def16c3effa4fe9e3b681aafb1`.

### evaluation:430099

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.min`, `droppableIndices.push`, `isProtected`, `renderRetaining`.

Alvos de atribuição ou incremento: `fitting`, `fittingCount`, `i`, `overflowingCount`, `probe`.

SHA-256 do trecho: `97f61d41e6c34cc6635997ae8a136072559da2def16c3effa4fe9e3b681aafb1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
