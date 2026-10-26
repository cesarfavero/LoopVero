# `turnEnded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475988-476004](../../../../../reference/runtime/host-main.cjs#L475988-L476004) | `FunctionExpression` | não | `usage, endedAtMs` |
| [evaluation:255298-255314](../../../../../reference/runtime/sand-eval-runner.cjs#L255298-L255314) | `FunctionExpression` | não | `usage, endedAtMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475988-476004](../../../../../reference/runtime/host-main.cjs#L475988-L476004) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255298-255314](../../../../../reference/runtime/sand-eval-runner.cjs#L255298-L255314) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:475988

Chamadas escritas diretamente neste corpo: `BigInt`, `new InteractionUpdate`, `new TurnEndedUpdate`.

SHA-256 do trecho: `93642a4f7a0fbbe875fff35bcd07f80fc38c95d34072aa547c0a19e322b30389`.

### evaluation:255298

Chamadas escritas diretamente neste corpo: `BigInt`, `new InteractionUpdate`, `new TurnEndedUpdate`.

SHA-256 do trecho: `93642a4f7a0fbbe875fff35bcd07f80fc38c95d34072aa547c0a19e322b30389`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
