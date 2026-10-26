# `omitSkillsToFit/renderRetaining`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-budget.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639492-639516](../../../../../../reference/runtime/host-main.cjs#L639492-L639516) | `ArrowFunctionExpression` | não | `retainedDroppableCount` |
| [evaluation:430106-430130](../../../../../../reference/runtime/sand-eval-runner.cjs#L430106-L430130) | `ArrowFunctionExpression` | não | `retainedDroppableCount` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639492-639516](../../../../../../reference/runtime/host-main.cjs#L639492-L639516) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:430106-430130](../../../../../../reference/runtime/sand-eval-runner.cjs#L430106-L430130) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:639492

Chamadas escritas diretamente neste corpo: `estimateStringTokenCount`, `getOmittedSkillDirectories`, `isProtected`, `omittedSkills.push`, `renderContent`, `renderOmittedNotice`, `renderSection`, `retainedSkills.push`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `22e86c8428d80c2863711a9638979865325873a75bdbca4cec5f1a69c6b9f563`.

### evaluation:430106

Chamadas escritas diretamente neste corpo: `estimateStringTokenCount`, `getOmittedSkillDirectories`, `isProtected`, `omittedSkills.push`, `renderContent`, `renderOmittedNotice`, `renderSection`, `retainedSkills.push`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `22e86c8428d80c2863711a9638979865325873a75bdbca4cec5f1a69c6b9f563`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
