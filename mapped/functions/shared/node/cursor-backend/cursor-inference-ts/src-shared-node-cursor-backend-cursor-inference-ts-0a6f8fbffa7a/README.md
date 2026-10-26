# `src/shared/node/cursor-backend/cursor-inference.ts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225183-225217](../../../../../../../reference/runtime/host-main.cjs#L225183-L225217) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225183-225217](../../../../../../../reference/runtime/host-main.cjs#L225183-L225217) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225183

Chamadas escritas diretamente neste corpo: `createContextKey`, `init_cursor_token`, `init_esm2`, `init_esm3`, `init_invariant`, `init_proto`, `init_protocol`, `init_protocol_connect`, `init_request`, `init_request_lineage`, `init_request_recovery`, `init_rpc_tracing`, `init_sand_agent_model`, `init_sand_client_metadata`, `new Set`.

Alvos de atribuição ou incremento: `GITHUB_ACCESS_ERRORS`, `PRIVACY_MODE_CACHE_MAX_AGE_MS`, `PRIVACY_MODE_FALLBACK_CACHE_MAX_AGE_MS`, `PRIVACY_MODE_FETCH_TIMEOUT_MS`, `SAND_SENT_ACCOUNT_SCOPE`, `recoverInstalledRequests`.

SHA-256 do trecho: `2f9becc2b6f1703a7c878c9e14f0d3874773bf7ebb0dfa74e9665a8a1f4c6667`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
