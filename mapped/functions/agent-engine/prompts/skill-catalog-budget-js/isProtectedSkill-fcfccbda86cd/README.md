# `isProtectedSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-budget.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639542-639545](../../../../../../reference/runtime/host-main.cjs#L639542-L639545) | `FunctionDeclaration` | não | `skill` |
| [evaluation:430156-430159](../../../../../../reference/runtime/sand-eval-runner.cjs#L430156-L430159) | `FunctionDeclaration` | não | `skill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639542-639545](../../../../../../reference/runtime/host-main.cjs#L639542-L639545) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430156-430159](../../../../../../reference/runtime/sand-eval-runner.cjs#L430156-L430159) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:639542

Chamadas escritas diretamente neste corpo: `PROTECTED_SKILL_NAMES.has`, `PROTECTED_SKILL_NAME_PREFIXES.some`, `skillNameFromPath`.

SHA-256 do trecho: `441214254f9df5577b58c3e66f7df69b7dc07145434bc97abdb47913dd20c4bd`.

### evaluation:430156

Chamadas escritas diretamente neste corpo: `PROTECTED_SKILL_NAMES.has`, `PROTECTED_SKILL_NAME_PREFIXES.some`, `skillNameFromPath`.

SHA-256 do trecho: `441214254f9df5577b58c3e66f7df69b7dc07145434bc97abdb47913dd20c4bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
