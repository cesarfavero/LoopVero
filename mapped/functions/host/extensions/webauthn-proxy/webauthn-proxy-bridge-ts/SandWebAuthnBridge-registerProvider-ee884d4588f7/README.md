# `SandWebAuthnBridge.registerProvider`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/webauthn-proxy/webauthn-proxy-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/webauthn-proxy/webauthn-proxy-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785091-785133](../../../../../../../reference/runtime/host-main.cjs#L785091-L785133) | `method` | não | `send` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785091-785133](../../../../../../../reference/runtime/host-main.cjs#L785091-L785133) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:785091

Chamadas escritas diretamente neste corpo: `send`, `this.deps.clock.now`, `this.deps.report.provider`, `this.providers.add`, `this.providersById.set`.

SHA-256 do trecho: `9423ea565b04c24c0f975c4a66ae482752055484e8c2e8f67c635390efdd7def`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
