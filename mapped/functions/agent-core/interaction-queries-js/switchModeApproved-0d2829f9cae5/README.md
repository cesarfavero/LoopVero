# `switchModeApproved`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475644-475657](../../../../../reference/runtime/host-main.cjs#L475644-L475657) | `FunctionExpression` | não | `queryId` |
| [evaluation:254868-254881](../../../../../reference/runtime/sand-eval-runner.cjs#L254868-L254881) | `FunctionExpression` | não | `queryId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475644-475657](../../../../../reference/runtime/host-main.cjs#L475644-L475657) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254868-254881](../../../../../reference/runtime/sand-eval-runner.cjs#L254868-L254881) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475644

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new SwitchModeRequestResponse`, `new SwitchModeRequestResponse_Approved`.

SHA-256 do trecho: `87b18901d8a3b577e4fe28671a9515c4b95eb7af2a3b6bee3c32c30b431a9bf9`.

### evaluation:254868

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new SwitchModeRequestResponse`, `new SwitchModeRequestResponse_Approved`.

SHA-256 do trecho: `87b18901d8a3b577e4fe28671a9515c4b95eb7af2a3b6bee3c32c30b431a9bf9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
