# `createCookieOriginApprovalPort/awaitRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `host/extensions/cookie-origin-approval/cookie-origin-approval-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542966-542978](../../../../../../../reference/runtime/host-main.cjs#L542966-L542978) | `ArrowFunctionExpression` | sim | `{ requestId: requestId2, waitMs }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542966-542978](../../../../../../../reference/runtime/host-main.cjs#L542966-L542978) | 4 | 0 | 4 | 4 | 0 | 0 |

### host:542966

Chamadas escritas diretamente neste corpo: `deps.desktop.awaitOutcome`, `forgetTerminal`, `rememberTerminal`, `terminalByRequestId.get`, `toGatewayReply`.

SHA-256 do trecho: `d0544894f3ba63f9e496222e6720cbd5c3f0c2d08497df3a00813209c5e7b4f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
