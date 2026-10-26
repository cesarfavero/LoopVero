# `webSearchRejected`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475586-475601](../../../../../reference/runtime/host-main.cjs#L475586-L475601) | `FunctionExpression` | não | `queryId, reason` |
| [evaluation:254810-254825](../../../../../reference/runtime/sand-eval-runner.cjs#L254810-L254825) | `FunctionExpression` | não | `queryId, reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475586-475601](../../../../../reference/runtime/host-main.cjs#L475586-L475601) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254810-254825](../../../../../reference/runtime/sand-eval-runner.cjs#L254810-L254825) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475586

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new WebSearchRequestResponse`, `new WebSearchRequestResponse_Rejected`.

SHA-256 do trecho: `c5e5756b534f1bd8026e6cb94d71e94d06de8eb1247cbe0fc5725de98beb395b`.

### evaluation:254810

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new WebSearchRequestResponse`, `new WebSearchRequestResponse_Rejected`.

SHA-256 do trecho: `c5e5756b534f1bd8026e6cb94d71e94d06de8eb1247cbe0fc5725de98beb395b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
