# `createPlan`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475675-475683](../../../../../reference/runtime/host-main.cjs#L475675-L475683) | `FunctionExpression` | não | `queryId, result` |
| [evaluation:254899-254907](../../../../../reference/runtime/sand-eval-runner.cjs#L254899-L254907) | `FunctionExpression` | não | `queryId, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475675-475683](../../../../../reference/runtime/host-main.cjs#L475675-L475683) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254899-254907](../../../../../reference/runtime/sand-eval-runner.cjs#L254899-L254907) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475675

Chamadas escritas diretamente neste corpo: `new CreatePlanRequestResponse`, `new InteractionResponse`.

SHA-256 do trecho: `c92fe01245a0390e8413a2fb78f5661627bebf55e6c5e9c3139fb57b0fab6878`.

### evaluation:254899

Chamadas escritas diretamente neste corpo: `new CreatePlanRequestResponse`, `new InteractionResponse`.

SHA-256 do trecho: `c92fe01245a0390e8413a2fb78f5661627bebf55e6c5e9c3139fb57b0fab6878`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
