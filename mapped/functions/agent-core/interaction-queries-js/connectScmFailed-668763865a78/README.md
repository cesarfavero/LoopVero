# `connectScmFailed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475775-475790](../../../../../reference/runtime/host-main.cjs#L475775-L475790) | `FunctionExpression` | não | `queryId, error64` |
| [evaluation:254999-255014](../../../../../reference/runtime/sand-eval-runner.cjs#L254999-L255014) | `FunctionExpression` | não | `queryId, error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475775-475790](../../../../../reference/runtime/host-main.cjs#L475775-L475790) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254999-255014](../../../../../reference/runtime/sand-eval-runner.cjs#L254999-L255014) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475775

Chamadas escritas diretamente neste corpo: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Failed`, `new InteractionResponse`.

SHA-256 do trecho: `827a1730846677011d17fa22ed666e92bc4385b5f96387627a8aa67e7b38b665`.

### evaluation:254999

Chamadas escritas diretamente neste corpo: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Failed`, `new InteractionResponse`.

SHA-256 do trecho: `7e4c9a069e6dd0622e0c7f056012924d9592e86de56d02d509d9220aeb8fdac4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
