# `toRedactedInteractionListener/sendUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/redacted-interaction-listener.js` · [README do módulo](../../../../modules/agent-core/redacted-interaction-listener-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615542-615544](../../../../../reference/runtime/host-main.cjs#L615542-L615544) | `FunctionExpression` | sim | `ctx, update` |
| [evaluation:284262-284264](../../../../../reference/runtime/sand-eval-runner.cjs#L284262-L284264) | `FunctionExpression` | sim | `ctx, update` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615542-615544](../../../../../reference/runtime/host-main.cjs#L615542-L615544) | 0 | 0 | 1 | 0 | 0 | 0 |
| [evaluation:284262-284264](../../../../../reference/runtime/sand-eval-runner.cjs#L284262-L284264) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:615542

Chamadas escritas diretamente neste corpo: `delegate.sendUpdate`, `fromRedactedInteractionUpdate`.

SHA-256 do trecho: `99d54bb9838997daae0dbd23f91ad22178d2ba5945f5409cd19d1e4a28f4cd5b`.

### evaluation:284262

Chamadas escritas diretamente neste corpo: `delegate.sendUpdate`, `fromRedactedInteractionUpdate`.

SHA-256 do trecho: `99d54bb9838997daae0dbd23f91ad22178d2ba5945f5409cd19d1e4a28f4cd5b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
