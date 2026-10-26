# `RunLifecycle.constructor/onDequeued`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739924-739934](../../../../../../../reference/runtime/host-main.cjs#L739924-L739934) | `ArrowFunctionExpression` | não | `event` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739924-739934](../../../../../../../reference/runtime/host-main.cjs#L739924-L739934) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:739924 usa retorno implícito de arrow function.

### host:739924

Chamadas escritas diretamente neste corpo: `this.tm.telemetry.reportQueueDequeued`.

SHA-256 do trecho: `bff5a673ca5105ab564bbf37d8842f650320aa564dcbe5e83367e52590ba5390`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
