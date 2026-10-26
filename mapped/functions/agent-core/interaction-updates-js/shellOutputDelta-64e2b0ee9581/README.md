# `shellOutputDelta`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475980-475987](../../../../../reference/runtime/host-main.cjs#L475980-L475987) | `FunctionExpression` | não | `event` |
| [evaluation:255290-255297](../../../../../reference/runtime/sand-eval-runner.cjs#L255290-L255297) | `FunctionExpression` | não | `event` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475980-475987](../../../../../reference/runtime/host-main.cjs#L475980-L475987) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255290-255297](../../../../../reference/runtime/sand-eval-runner.cjs#L255290-L255297) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475980

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new ShellOutputDeltaUpdate`.

SHA-256 do trecho: `b722fbc93ee64d27b190219f5ab3f0983b74086913f4abdac9f1220b9457f402`.

### evaluation:255290

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new ShellOutputDeltaUpdate`.

SHA-256 do trecho: `b722fbc93ee64d27b190219f5ab3f0983b74086913f4abdac9f1220b9457f402`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
