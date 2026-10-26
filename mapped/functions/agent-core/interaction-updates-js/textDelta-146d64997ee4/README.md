# `textDelta`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475843-475851](../../../../../reference/runtime/host-main.cjs#L475843-L475851) | `FunctionExpression` | não | `text3, messageStartedAtMs` |
| [evaluation:255153-255161](../../../../../reference/runtime/sand-eval-runner.cjs#L255153-L255161) | `FunctionExpression` | não | `text3, messageStartedAtMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475843-475851](../../../../../reference/runtime/host-main.cjs#L475843-L475851) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255153-255161](../../../../../reference/runtime/sand-eval-runner.cjs#L255153-L255161) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475843

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new TextDeltaUpdate`.

SHA-256 do trecho: `8dd496a35511a77f6cdaa4477f1e40c577a801e3639e28d11a370227105e747c`.

### evaluation:255153

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new TextDeltaUpdate`.

SHA-256 do trecho: `8dd496a35511a77f6cdaa4477f1e40c577a801e3639e28d11a370227105e747c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
