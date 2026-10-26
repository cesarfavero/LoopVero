# `SandCookieOriginApprovalBridge.dropProvider`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542633-542639](../../../../../../../reference/runtime/host-main.cjs#L542633-L542639) | `method` | não | `provider` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542633-542639](../../../../../../../reference/runtime/host-main.cjs#L542633-L542639) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:542633

Chamadas escritas diretamente neste corpo: `this.park`, `this.providers.delete`, `this.providersById.delete`.

SHA-256 do trecho: `3af7d2d285557d02636645a312a4bb004ea81db5b38ce6f27ccd00db3f7c89b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
