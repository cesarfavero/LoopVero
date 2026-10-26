# `AutoReviewService.sweepStaleAwaitingBadges`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `host/extensions/auto-review/auto-review-service.ts` · [README do módulo](../../../../../../modules/host/extensions/auto-review/auto-review-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499885-499894](../../../../../../../reference/runtime/host-main.cjs#L499885-L499894) | `method` | sim | `listAgentIds, ifSinceBefore` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499885-499894](../../../../../../../reference/runtime/host-main.cjs#L499885-L499894) | 0 | 1 | 1 | 0 | 0 | 1 |

### host:499885

Chamadas escritas diretamente neste corpo: `listAgentIds`, `this.deps.awaitingSink.clearForTab`.

SHA-256 do trecho: `8888aeaf28ec71d6a4f85cc7f9455d9b21075413a4d7e25f7635fcb71648e7b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
