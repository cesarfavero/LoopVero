# `askQuestion`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475634-475642](../../../../../reference/runtime/host-main.cjs#L475634-L475642) | `FunctionExpression` | não | `queryId, result` |
| [evaluation:254858-254866](../../../../../reference/runtime/sand-eval-runner.cjs#L254858-L254866) | `FunctionExpression` | não | `queryId, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475634-475642](../../../../../reference/runtime/host-main.cjs#L475634-L475642) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254858-254866](../../../../../reference/runtime/sand-eval-runner.cjs#L254858-L254866) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475634

Chamadas escritas diretamente neste corpo: `new AskQuestionInteractionResponse`, `new InteractionResponse`.

SHA-256 do trecho: `ade48ef34afc717a793e34d4e36184149073c7b33eb40193affd13840c659581`.

### evaluation:254858

Chamadas escritas diretamente neste corpo: `new AskQuestionInteractionResponse`, `new InteractionResponse`.

SHA-256 do trecho: `ade48ef34afc717a793e34d4e36184149073c7b33eb40193affd13840c659581`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
