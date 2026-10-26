# `WidgetResponses.settlePendingVirtualCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782741-782755](../../../../../../../reference/runtime/host-main.cjs#L782741-L782755) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782741-782755](../../../../../../../reference/runtime/host-main.cjs#L782741-L782755) | 5 | 0 | 1 | 2 | 0 | 0 |

### host:782741

Chamadas escritas diretamente neste corpo: `this.settlePendingVirtualCardOnSession`, `this.tm.roster.emit`, `this.tm.sessionStore.settleVirtualCardApproval`.

SHA-256 do trecho: `c4ff8ca246c4f03f1dd7622fc2d7b7e9f97e9d6427f65fee9f4fe7870b03ae33`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
