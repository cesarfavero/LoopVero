# `SandWebAuthnBridge.emit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/webauthn-proxy/webauthn-proxy-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/webauthn-proxy/webauthn-proxy-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785268-785276](../../../../../../../reference/runtime/host-main.cjs#L785268-L785276) | `method` | não | `funnel, report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785268-785276](../../../../../../../reference/runtime/host-main.cjs#L785268-L785276) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:785268

Chamadas escritas diretamente neste corpo: `this.deps.clock.monotonicNow`, `this.deps.report.ceremony`.

SHA-256 do trecho: `6b0688295e91faed70e664d45c890607094ab36b3fec74f3cdd6d83cac7b9bf3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
