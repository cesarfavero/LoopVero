# `SandWebAuthnBridge.providerCounts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/webauthn-proxy/webauthn-proxy-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/webauthn-proxy/webauthn-proxy-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785277-785286](../../../../../../../reference/runtime/host-main.cjs#L785277-L785286) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785277-785286](../../../../../../../reference/runtime/host-main.cjs#L785277-L785286) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:785277

Chamadas escritas diretamente neste corpo: `isLive2`, `this.deps.clock.now`.

Alvos de atribuição ou incremento: `live`.

SHA-256 do trecho: `e2d393e4ff10b427cc824a7995939f1dd0359b8ba1e10e1bf8ab67ca9df0f99c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
