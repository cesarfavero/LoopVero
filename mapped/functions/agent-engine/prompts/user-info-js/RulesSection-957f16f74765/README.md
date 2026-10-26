# `RulesSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640370-640373](../../../../../../reference/runtime/host-main.cjs#L640370-L640373) | `FunctionDeclaration` | não | `{ globalRules, agentRequestableRules, userRules, readToolName, composer2CustomUserRules, alwaysAppliedRulesDescription }` |
| [evaluation:430984-430987](../../../../../../reference/runtime/sand-eval-runner.cjs#L430984-L430987) | `FunctionDeclaration` | não | `{ globalRules, agentRequestableRules, userRules, readToolName, composer2CustomUserRules, alwaysAppliedRulesDescription }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640370-640373](../../../../../../reference/runtime/host-main.cjs#L640370-L640373) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430984-430987](../../../../../../reference/runtime/sand-eval-runner.cjs#L430984-L430987) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640370

Chamadas escritas diretamente neste corpo: `jsx`, `jsxs`.

SHA-256 do trecho: `9b12562279817fafcdc9002ecba64ccdf8f8ec033c67ea60bda24cd684ff159b`.

### evaluation:430984

Chamadas escritas diretamente neste corpo: `jsx`, `jsxs`.

SHA-256 do trecho: `9b12562279817fafcdc9002ecba64ccdf8f8ec033c67ea60bda24cd684ff159b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
