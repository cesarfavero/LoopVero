# `start/sweepPendingCardsOnBoot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `host/extensions/cookie-origin-approval/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/cookie-origin-approval/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:543008-543018](../../../../../../../reference/runtime/host-main.cjs#L543008-L543018) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543008-543018](../../../../../../../reference/runtime/host-main.cjs#L543008-L543018) | 0 | 0 | 2 | 0 | 0 | 1 |

### host:543008

Chamadas escritas diretamente neste corpo: `context2.deps.transcript.widgetResponses.expireAllPendingCookieOriginApprovalCards`, `context2.host.log`, `errorLogTag`.

SHA-256 do trecho: `1b88f3d38586827ed95ed43e9b129f7f75c8fcaa954c65cb5a46f8a5deea66fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
