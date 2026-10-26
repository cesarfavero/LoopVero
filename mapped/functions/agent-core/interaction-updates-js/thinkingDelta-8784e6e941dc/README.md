# `thinkingDelta`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475883-475891](../../../../../reference/runtime/host-main.cjs#L475883-L475891) | `FunctionExpression` | não | `text3, thinkingStyle, messageStartedAtMs` |
| [evaluation:255193-255201](../../../../../reference/runtime/sand-eval-runner.cjs#L255193-L255201) | `FunctionExpression` | não | `text3, thinkingStyle, messageStartedAtMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475883-475891](../../../../../reference/runtime/host-main.cjs#L475883-L475891) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255193-255201](../../../../../reference/runtime/sand-eval-runner.cjs#L255193-L255201) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475883

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new ThinkingDeltaUpdate`.

SHA-256 do trecho: `a89e2387ae5d13ecd3673fa5525397fbd41b9c7a3c38eec2b137187b4536170a`.

### evaluation:255193

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new ThinkingDeltaUpdate`.

SHA-256 do trecho: `a89e2387ae5d13ecd3673fa5525397fbd41b9c7a3c38eec2b137187b4536170a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
