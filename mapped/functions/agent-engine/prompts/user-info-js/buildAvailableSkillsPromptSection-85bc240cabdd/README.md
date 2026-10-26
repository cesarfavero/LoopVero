# `buildAvailableSkillsPromptSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640119-640163](../../../../../../reference/runtime/host-main.cjs#L640119-L640163) | `FunctionDeclaration` | não | `props, overrides` |
| [evaluation:430733-430777](../../../../../../reference/runtime/sand-eval-runner.cjs#L430733-L430777) | `FunctionDeclaration` | não | `props, overrides` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640119-640163](../../../../../../reference/runtime/host-main.cjs#L640119-L640163) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430733-430777](../../../../../../reference/runtime/sand-eval-runner.cjs#L430733-L430777) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:640119

Chamadas escritas diretamente neste corpo: `.filter`, `BudgetedAgentSkillsSection`, `agentSkillsFromProto.filter`, `categorizeCursorRulesForDisplay`, `filterByAgentEnvironment`, `filteredAgentSkillsFromProto.map`, `skills.filter`, `toLegacySkillCatalogItems`.

SHA-256 do trecho: `fd9e4137c7c5704bf18d7160fb9f51cab4207562ca58ac041609a4050b1a5e38`.

### evaluation:430733

Chamadas escritas diretamente neste corpo: `.filter`, `BudgetedAgentSkillsSection`, `agentSkillsFromProto.filter`, `categorizeCursorRulesForDisplay`, `filterByAgentEnvironment`, `filteredAgentSkillsFromProto.map`, `skills.filter`, `toLegacySkillCatalogItems`.

SHA-256 do trecho: `fd9e4137c7c5704bf18d7160fb9f51cab4207562ca58ac041609a4050b1a5e38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
