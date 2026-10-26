# `createCookieOriginApprovalPort/rememberTerminal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `host/extensions/cookie-origin-approval/cookie-origin-approval-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542915-542922](../../../../../../../reference/runtime/host-main.cjs#L542915-L542922) | `ArrowFunctionExpression` | não | `requestId2, reply2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542915-542922](../../../../../../../reference/runtime/host-main.cjs#L542915-L542922) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:542915

Chamadas escritas diretamente neste corpo: `.next`, `terminalByRequestId.delete`, `terminalByRequestId.keys`, `terminalByRequestId.set`.

SHA-256 do trecho: `6afbd02feceda6a33da391eed6b5949d9f6d88f1dc2235603f3c2584c392ce14`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
