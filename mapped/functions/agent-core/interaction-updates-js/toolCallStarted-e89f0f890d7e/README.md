# `toolCallStarted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475852-475860](../../../../../reference/runtime/host-main.cjs#L475852-L475860) | `FunctionExpression` | não | `callId, toolCall2, modelCallId` |
| [evaluation:255162-255170](../../../../../reference/runtime/sand-eval-runner.cjs#L255162-L255170) | `FunctionExpression` | não | `callId, toolCall2, modelCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475852-475860](../../../../../reference/runtime/host-main.cjs#L475852-L475860) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255162-255170](../../../../../reference/runtime/sand-eval-runner.cjs#L255162-L255170) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475852

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new ToolCallStartedUpdate`.

SHA-256 do trecho: `6eb589aefe260e23297c26c5f77e3b0813686ef602418bcb8fd4597a40179fc3`.

### evaluation:255162

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new ToolCallStartedUpdate`.

SHA-256 do trecho: `6eb589aefe260e23297c26c5f77e3b0813686ef602418bcb8fd4597a40179fc3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
