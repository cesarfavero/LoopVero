# `getAgentRequestableRuleDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639973-639983](../../../../../../reference/runtime/host-main.cjs#L639973-L639983) | `FunctionDeclaration` | não | `rule, ruleDir` |
| [evaluation:430587-430597](../../../../../../reference/runtime/sand-eval-runner.cjs#L430587-L430597) | `FunctionDeclaration` | não | `rule, ruleDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639973-639983](../../../../../../reference/runtime/host-main.cjs#L639973-L639983) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:430587-430597](../../../../../../reference/runtime/sand-eval-runner.cjs#L430587-L430597) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:639973

Chamadas escritas diretamente neste corpo: `getFirstNonEmptyLine`, `rule.type.type.value.globs.join`.

SHA-256 do trecho: `71f3e1a789f607c36122d0710978fecb3c7041461f5d925548f187d2b8cf09a8`.

### evaluation:430587

Chamadas escritas diretamente neste corpo: `getFirstNonEmptyLine`, `rule.type.type.value.globs.join`.

SHA-256 do trecho: `71f3e1a789f607c36122d0710978fecb3c7041461f5d925548f187d2b8cf09a8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
