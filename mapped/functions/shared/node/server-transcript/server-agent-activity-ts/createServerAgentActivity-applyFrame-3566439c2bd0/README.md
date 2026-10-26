# `createServerAgentActivity/applyFrame`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-agent-activity.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711099-711122](../../../../../../../reference/runtime/host-main.cjs#L711099-L711122) | `ArrowFunctionExpression` | não | `frame` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711099-711122](../../../../../../../reference/runtime/host-main.cjs#L711099-L711122) | 3 | 4 | 0 | 0 | 0 | 0 |

### host:711099

Chamadas escritas diretamente neste corpo: `applyClient`, `applyLive`, `clearStaleTimers`, `new Set`, `parseAgentId`, `publish`, `state.sessions.clear`, `touched.add`.

Alvos de atribuição ou incremento: `state.client`.

SHA-256 do trecho: `fd8fe5bf36a3842fa4aac5c3803e94a3e9232d1ecf24ef44009d4c2ec91a02c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
