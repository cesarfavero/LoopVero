# `thinkingCompleted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475892-475900](../../../../../reference/runtime/host-main.cjs#L475892-L475900) | `FunctionExpression` | não | `thinkingDurationMs, messageStartedAtMs` |
| [evaluation:255202-255210](../../../../../reference/runtime/sand-eval-runner.cjs#L255202-L255210) | `FunctionExpression` | não | `thinkingDurationMs, messageStartedAtMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475892-475900](../../../../../reference/runtime/host-main.cjs#L475892-L475900) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255202-255210](../../../../../reference/runtime/sand-eval-runner.cjs#L255202-L255210) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475892

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new ThinkingCompletedUpdate`.

SHA-256 do trecho: `35615045641c14f0fe0bba58049dbf7a4d77ffdaed34fca85e567e75c80de7c3`.

### evaluation:255202

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new ThinkingCompletedUpdate`.

SHA-256 do trecho: `35615045641c14f0fe0bba58049dbf7a4d77ffdaed34fca85e567e75c80de7c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
