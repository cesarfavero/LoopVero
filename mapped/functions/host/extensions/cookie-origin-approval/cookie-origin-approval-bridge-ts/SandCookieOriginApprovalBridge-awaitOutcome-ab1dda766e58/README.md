# `SandCookieOriginApprovalBridge.awaitOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542754-542783](../../../../../../../reference/runtime/host-main.cjs#L542754-L542783) | `method` | não | `requestId2, waitMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542754-542783](../../../../../../../reference/runtime/host-main.cjs#L542754-L542783) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:542754

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `Number.isFinite`, `Promise.resolve`, `new Promise`, `this.cancelledByRequestId.has`, `this.pending.get`, `this.takeSettled`.

SHA-256 do trecho: `50d3f34f1541a7370f0bf5531a267c2b36567b7b8cf876b1191a26f8aab1fd8c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
