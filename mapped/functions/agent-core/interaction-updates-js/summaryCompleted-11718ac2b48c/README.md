# `summaryCompleted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475972-475979](../../../../../reference/runtime/host-main.cjs#L475972-L475979) | `FunctionExpression` | não | `hookMessage, failed2` |
| [evaluation:255282-255289](../../../../../reference/runtime/sand-eval-runner.cjs#L255282-L255289) | `FunctionExpression` | não | `hookMessage, failed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475972-475979](../../../../../reference/runtime/host-main.cjs#L475972-L475979) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255282-255289](../../../../../reference/runtime/sand-eval-runner.cjs#L255282-L255289) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475972

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new SummaryCompletedUpdate`.

SHA-256 do trecho: `bcdcc09073602c785ce542c63a0de5e49245a5d5b3e6e073db9542fcb5822657`.

### evaluation:255282

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new SummaryCompletedUpdate`.

SHA-256 do trecho: `29c14c5d724ba96e31ad44ce81b260f377c039db77b793eb70a784b5432cdf63`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
