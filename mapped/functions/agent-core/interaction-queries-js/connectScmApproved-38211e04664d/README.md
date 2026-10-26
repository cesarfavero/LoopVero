# `connectScmApproved`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475745-475758](../../../../../reference/runtime/host-main.cjs#L475745-L475758) | `FunctionExpression` | não | `queryId` |
| [evaluation:254969-254982](../../../../../reference/runtime/sand-eval-runner.cjs#L254969-L254982) | `FunctionExpression` | não | `queryId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475745-475758](../../../../../reference/runtime/host-main.cjs#L475745-L475758) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254969-254982](../../../../../reference/runtime/sand-eval-runner.cjs#L254969-L254982) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475745

Chamadas escritas diretamente neste corpo: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Approved`, `new InteractionResponse`.

SHA-256 do trecho: `13a0b973999a2e59896924e0af055a165ec45037d805c43f725490c7b0c537fc`.

### evaluation:254969

Chamadas escritas diretamente neste corpo: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Approved`, `new InteractionResponse`.

SHA-256 do trecho: `13a0b973999a2e59896924e0af055a165ec45037d805c43f725490c7b0c537fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
