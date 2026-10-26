# `toUnredactedInteractionListener/query`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/redacted-interaction-listener.js` · [README do módulo](../../../../modules/agent-core/redacted-interaction-listener-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615532-615535](../../../../../reference/runtime/host-main.cjs#L615532-L615535) | `FunctionExpression` | sim | `ctx, query2` |
| [evaluation:284252-284255](../../../../../reference/runtime/sand-eval-runner.cjs#L284252-L284255) | `FunctionExpression` | sim | `ctx, query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615532-615535](../../../../../reference/runtime/host-main.cjs#L615532-L615535) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:284252-284255](../../../../../reference/runtime/sand-eval-runner.cjs#L284252-L284255) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:615532

Chamadas escritas diretamente neste corpo: `delegate.query`, `fromRedactedInteractionResponse`, `toRedactedInteractionQuery`.

SHA-256 do trecho: `c3d5c91448a2f5dd39ea775208cc8ed00d8b7af94b33b0ead327f6fa9a338c87`.

### evaluation:284252

Chamadas escritas diretamente neste corpo: `delegate.query`, `fromRedactedInteractionResponse`, `toRedactedInteractionQuery`.

SHA-256 do trecho: `c3d5c91448a2f5dd39ea775208cc8ed00d8b7af94b33b0ead327f6fa9a338c87`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
