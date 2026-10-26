# `categorizeCursorRules/run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640659-640704](../../../../../../reference/runtime/host-main.cjs#L640659-L640704) | `ArrowFunctionExpression` | não | `usage` |
| [evaluation:431273-431318](../../../../../../reference/runtime/sand-eval-runner.cjs#L431273-L431318) | `ArrowFunctionExpression` | não | `usage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640659-640704](../../../../../../reference/runtime/host-main.cjs#L640659-L640704) | 11 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:431273-431318](../../../../../../reference/runtime/sand-eval-runner.cjs#L431273-L431318) | 11 | 1 | 0 | 1 | 0 | 0 |

### host:640659

Chamadas escritas diretamente neste corpo: `Buffer.byteLength`, `agentRequestableRules.push`, `globalRules.push`, `hasDisableModelInvocation`, `isFileScopedCursorRule`, `isSkillPath`, `skills.push`, `usage.add`, `userRules.push`.

SHA-256 do trecho: `a916ffa81d6f39f58072c24c0ed2dc5a421e643ae5ca8d2a3577a0ce9d821116`.

### evaluation:431273

Chamadas escritas diretamente neste corpo: `Buffer.byteLength`, `agentRequestableRules.push`, `globalRules.push`, `hasDisableModelInvocation`, `isFileScopedCursorRule`, `isSkillPath`, `skills.push`, `usage.add`, `userRules.push`.

SHA-256 do trecho: `a916ffa81d6f39f58072c24c0ed2dc5a421e643ae5ca8d2a3577a0ce9d821116`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
