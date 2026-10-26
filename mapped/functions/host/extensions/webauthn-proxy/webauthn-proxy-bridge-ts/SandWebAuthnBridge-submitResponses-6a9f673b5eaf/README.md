# `SandWebAuthnBridge.submitResponses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/webauthn-proxy/webauthn-proxy-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/webauthn-proxy/webauthn-proxy-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785134-785192](../../../../../../../reference/runtime/host-main.cjs#L785134-L785192) | `method` | não | `batch` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785134-785192](../../../../../../../reference/runtime/host-main.cjs#L785134-L785192) | 12 | 1 | 0 | 0 | 0 | 0 |

### host:785134

Chamadas escritas diretamente neste corpo: `parseDesktopStage`, `stageCause`, `this.deps.clock.now`, `this.deps.report.provider`, `this.emit`, `this.pending.get`, `this.providersById.get`, `this.settle`.

Alvos de atribuição ou incremento: `pending.lastStage`, `provider.computerId`, `provider.hadHello`, `provider.hasHeartbeat`, `provider.label`, `provider.lastSeenAt`.

SHA-256 do trecho: `10d023d16af480a5d8d27c04aa6979b6ad1edd873a76c3cdd12c7b96c9315ad3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
