# `createCookieOriginApprovalPort/cancelRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `host/extensions/cookie-origin-approval/cookie-origin-approval-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542979-542982](../../../../../../../reference/runtime/host-main.cjs#L542979-L542982) | `ArrowFunctionExpression` | sim | `{ requestId: requestId2 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542979-542982](../../../../../../../reference/runtime/host-main.cjs#L542979-L542982) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:542979

Chamadas escritas diretamente neste corpo: `deps.desktop.cancel`, `terminalByRequestId.delete`.

SHA-256 do trecho: `3f86201f273721b308d276476a512f29769e00de2202435ef7ccca77d90c17f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
