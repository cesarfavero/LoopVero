# `tokenDelta`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475940-475947](../../../../../reference/runtime/host-main.cjs#L475940-L475947) | `FunctionExpression` | não | `tokens` |
| [evaluation:255250-255257](../../../../../reference/runtime/sand-eval-runner.cjs#L255250-L255257) | `FunctionExpression` | não | `tokens` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475940-475947](../../../../../reference/runtime/host-main.cjs#L475940-L475947) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255250-255257](../../../../../reference/runtime/sand-eval-runner.cjs#L255250-L255257) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475940

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new TokenDeltaUpdate`.

SHA-256 do trecho: `c49f892de9c75404c1d3700302adb2a22cf605a74ca8ec9f30b14fc7c5aabcb7`.

### evaluation:255250

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new TokenDeltaUpdate`.

SHA-256 do trecho: `c49f892de9c75404c1d3700302adb2a22cf605a74ca8ec9f30b14fc7c5aabcb7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
