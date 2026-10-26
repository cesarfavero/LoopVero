# `../packages/context/dist/logger.js/log`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225760-225760](../../../../../reference/runtime/host-main.cjs#L225760-L225760) | `ArrowFunctionExpression` | não | `ctx, entry` |
| [evaluation:2248-2248](../../../../../reference/runtime/sand-eval-runner.cjs#L2248-L2248) | `ArrowFunctionExpression` | não | `ctx, entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225760-225760](../../../../../reference/runtime/host-main.cjs#L225760-L225760) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:225760 usa retorno implícito de arrow function.
| [evaluation:2248-2248](../../../../../reference/runtime/sand-eval-runner.cjs#L2248-L2248) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:2248 usa retorno implícito de arrow function.

### host:225760

Chamadas escritas diretamente neste corpo: `defaultLoggerBackendImpl.log`.

SHA-256 do trecho: `fcff63c54f0ec8d6339096d0d6703804ec5e23f9d3e0f9a644d088a05fce8d14`.

### evaluation:2248

Chamadas escritas diretamente neste corpo: `defaultLoggerBackendImpl.log`.

SHA-256 do trecho: `fcff63c54f0ec8d6339096d0d6703804ec5e23f9d3e0f9a644d088a05fce8d14`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
