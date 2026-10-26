# `SandWebAuthnBridge.selectProvider`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/webauthn-proxy/webauthn-proxy-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/webauthn-proxy/webauthn-proxy-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785287-785299](../../../../../../../reference/runtime/host-main.cjs#L785287-L785299) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785287-785299](../../../../../../../reference/runtime/host-main.cjs#L785287-L785299) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:785287

Chamadas escritas diretamente neste corpo: `isLive2`, `this.deps.clock.now`.

Alvos de atribuição ou incremento: `best`.

SHA-256 do trecho: `9e2a3ef0fc482540fd458c149966140e261b9f3893a50bbea309c68d95d27f41`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
