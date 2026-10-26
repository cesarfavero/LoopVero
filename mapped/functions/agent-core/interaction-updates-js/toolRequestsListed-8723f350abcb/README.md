# `toolRequestsListed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476013-476022](../../../../../reference/runtime/host-main.cjs#L476013-L476022) | `FunctionExpression` | não | `callCount` |
| [evaluation:255323-255332](../../../../../reference/runtime/sand-eval-runner.cjs#L255323-L255332) | `FunctionExpression` | não | `callCount` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476013-476022](../../../../../reference/runtime/host-main.cjs#L476013-L476022) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255323-255332](../../../../../reference/runtime/sand-eval-runner.cjs#L255323-L255332) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476013

Chamadas escritas diretamente neste corpo: `Math.max`, `new InteractionUpdate`, `new ToolRequestsListedUpdate`.

SHA-256 do trecho: `f2a1eaf91d15b46123a783e0c76ccb62ef3557721e9163aa49c462155aedd052`.

### evaluation:255323

Chamadas escritas diretamente neste corpo: `Math.max`, `new InteractionUpdate`, `new ToolRequestsListedUpdate`.

SHA-256 do trecho: `f2a1eaf91d15b46123a783e0c76ccb62ef3557721e9163aa49c462155aedd052`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
