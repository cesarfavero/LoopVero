# `src/shared/node/cursor-backend/rpc-tracing.ts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/rpc-tracing.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/rpc-tracing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:224887-224900](../../../../../../../reference/runtime/host-main.cjs#L224887-L224900) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224887-224900](../../../../../../../reference/runtime/host-main.cjs#L224887-L224900) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:224887

Chamadas escritas diretamente neste corpo: `__toESM`, `createExpiryPolicy`, `init_esm2`, `init_esm4`, `init_scheduling`, `new Set`, `new import_sdk_trace_node.AlwaysOnSampler`, `require_src5`.

Alvos de atribuição ou incremento: `RPC_ROOT_SAMPLER`, `SAND_RPC_TRACE_WINDOW_DURATION_MS`, `UNTRACED_SERVICE_TYPE_NAMES`, `import_sdk_trace_node`, `traceWindowExpiry`.

SHA-256 do trecho: `39b124a2b3d9c22ca6afd58940078103107c6570c6a515d97ab7da591e7e5d8b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
