# `BudgetedAgentSkillsSection/renderSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640095-640098](../../../../../../reference/runtime/host-main.cjs#L640095-L640098) | `ArrowFunctionExpression` | não | `skills, omittedNotice` |
| [evaluation:430709-430712](../../../../../../reference/runtime/sand-eval-runner.cjs#L430709-L430712) | `ArrowFunctionExpression` | não | `skills, omittedNotice` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640095-640098](../../../../../../reference/runtime/host-main.cjs#L640095-L640098) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430709-430712](../../../../../../reference/runtime/sand-eval-runner.cjs#L430709-L430712) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:640095

Chamadas escritas diretamente neste corpo: `aliasSkillCatalogPathRoots`, `jsx`, `renderAgentSkillItems`.

SHA-256 do trecho: `47d637a61a49105998bc898f6a70ba0145e02ca889f376f92563857015dbb25f`.

### evaluation:430709

Chamadas escritas diretamente neste corpo: `aliasSkillCatalogPathRoots`, `jsx`, `renderAgentSkillItems`.

SHA-256 do trecho: `47d637a61a49105998bc898f6a70ba0145e02ca889f376f92563857015dbb25f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
