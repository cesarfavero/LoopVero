# `truncateDescriptionsToFit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-budget.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639455-639484](../../../../../../reference/runtime/host-main.cjs#L639455-L639484) | `FunctionDeclaration` | não | `{ skills, budgetTokens, renderSection, isProtected }` |
| [evaluation:430069-430098](../../../../../../reference/runtime/sand-eval-runner.cjs#L430069-L430098) | `FunctionDeclaration` | não | `{ skills, budgetTokens, renderSection, isProtected }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639455-639484](../../../../../../reference/runtime/host-main.cjs#L639455-L639484) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:430069-430098](../../../../../../reference/runtime/sand-eval-runner.cjs#L430069-L430098) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:639455

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.min`, `estimateStringTokenCount`, `renderContent`, `renderSection`, `skills.map`, `skills.reduce`.

Alvos de atribuição ou incremento: `bestFit`, `lowerBound`, `upperBound`.

SHA-256 do trecho: `0e63feff49f7c8f69e8611546480e43c9b462f403977f3a73b2251a1a153c6ea`.

### evaluation:430069

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.min`, `estimateStringTokenCount`, `renderContent`, `renderSection`, `skills.map`, `skills.reduce`.

Alvos de atribuição ou incremento: `bestFit`, `lowerBound`, `upperBound`.

SHA-256 do trecho: `0e63feff49f7c8f69e8611546480e43c9b462f403977f3a73b2251a1a153c6ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
