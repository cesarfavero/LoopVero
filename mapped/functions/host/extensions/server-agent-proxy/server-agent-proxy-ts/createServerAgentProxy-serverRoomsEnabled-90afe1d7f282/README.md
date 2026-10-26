# `createServerAgentProxy/serverRoomsEnabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714723-714740](../../../../../../../reference/runtime/host-main.cjs#L714723-L714740) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714723-714740](../../../../../../../reference/runtime/host-main.cjs#L714723-L714740) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:714723

Chamadas escritas diretamente neste corpo: `clock.monotonicNow`, `deps.log`, `errorLogTag`, `roomClient.getGrokBotRuntimeCapabilities`.

Alvos de atribuição ou incremento: `enabled`, `roomsCapability`.

SHA-256 do trecho: `9d2c630248bb0974042740ff0cb04c10a375764ea599aed2f62f8ca2be09b7d8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
