# `SandCookieOriginApprovalBridge.cancelAndRefuse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542842-542851](../../../../../../../reference/runtime/host-main.cjs#L542842-L542851) | `method` | não | `requestId2, message, reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542842-542851](../../../../../../../reference/runtime/host-main.cjs#L542842-L542851) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:542842

Chamadas escritas diretamente neste corpo: `bound.send`, `this.pending.get`, `this.providersById.get`, `this.settle`.

SHA-256 do trecho: `c6f4e499ffac8a9b307d21a43de1ce374da4433e8e0a4f8f5f38f62f8451e134`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
