# `webSearchApproved`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475572-475585](../../../../../reference/runtime/host-main.cjs#L475572-L475585) | `FunctionExpression` | não | `queryId` |
| [evaluation:254796-254809](../../../../../reference/runtime/sand-eval-runner.cjs#L254796-L254809) | `FunctionExpression` | não | `queryId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475572-475585](../../../../../reference/runtime/host-main.cjs#L475572-L475585) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254796-254809](../../../../../reference/runtime/sand-eval-runner.cjs#L254796-L254809) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475572

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new WebSearchRequestResponse`, `new WebSearchRequestResponse_Approved`.

SHA-256 do trecho: `791fd2baf246b56b5018784c8d358187cc79345b81688494f7bc5ac3d4966fcf`.

### evaluation:254796

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new WebSearchRequestResponse`, `new WebSearchRequestResponse_Approved`.

SHA-256 do trecho: `791fd2baf246b56b5018784c8d358187cc79345b81688494f7bc5ac3d4966fcf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
