# `toRedactedInteractionListener/query`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/redacted-interaction-listener.js` · [README do módulo](../../../../modules/agent-core/redacted-interaction-listener-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615545-615548](../../../../../reference/runtime/host-main.cjs#L615545-L615548) | `FunctionExpression` | sim | `ctx, query2` |
| [evaluation:284265-284268](../../../../../reference/runtime/sand-eval-runner.cjs#L284265-L284268) | `FunctionExpression` | sim | `ctx, query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615545-615548](../../../../../reference/runtime/host-main.cjs#L615545-L615548) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:284265-284268](../../../../../reference/runtime/sand-eval-runner.cjs#L284265-L284268) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:615545

Chamadas escritas diretamente neste corpo: `delegate.query`, `fromRedactedInteractionQuery`, `toRedactedInteractionResponse`.

SHA-256 do trecho: `d09df01cdb881fa34867f3b26505603b7987651efffebf060de409ebfc67b46e`.

### evaluation:284265

Chamadas escritas diretamente neste corpo: `delegate.query`, `fromRedactedInteractionQuery`, `toRedactedInteractionResponse`.

SHA-256 do trecho: `d09df01cdb881fa34867f3b26505603b7987651efffebf060de409ebfc67b46e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
