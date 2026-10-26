# `stepCompleted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476028-476038](../../../../../reference/runtime/host-main.cjs#L476028-L476038) | `FunctionExpression` | não | `stepId, stepDurationMs` |
| [evaluation:255338-255348](../../../../../reference/runtime/sand-eval-runner.cjs#L255338-L255348) | `FunctionExpression` | não | `stepId, stepDurationMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476028-476038](../../../../../reference/runtime/host-main.cjs#L476028-L476038) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255338-255348](../../../../../reference/runtime/sand-eval-runner.cjs#L255338-L255348) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476028

Chamadas escritas diretamente neste corpo: `BigInt`, `new InteractionUpdate`, `new StepCompletedUpdate`.

SHA-256 do trecho: `2818d2a3a6f6e4ea1cb36c618c925798ddd08f0a4f6d01caf46b4665cf205cf4`.

### evaluation:255338

Chamadas escritas diretamente neste corpo: `BigInt`, `new InteractionUpdate`, `new StepCompletedUpdate`.

SHA-256 do trecho: `2818d2a3a6f6e4ea1cb36c618c925798ddd08f0a4f6d01caf46b4665cf205cf4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
