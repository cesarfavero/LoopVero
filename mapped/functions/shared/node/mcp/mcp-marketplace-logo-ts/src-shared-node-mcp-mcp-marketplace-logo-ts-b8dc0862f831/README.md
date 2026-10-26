# `src/shared/node/mcp/mcp-marketplace-logo.ts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-marketplace-logo.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-marketplace-logo-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:404528-404544](../../../../../../../reference/runtime/host-main.cjs#L404528-L404544) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404528-404544](../../../../../../../reference/runtime/host-main.cjs#L404528-L404544) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:404528

Chamadas escritas diretamente neste corpo: `createDeadlinePolicy`, `init_cursor_marketplace_client`, `init_cursor_marketplace_logo_registry`, `init_http_image`, `init_scheduling`, `new Map`.

Alvos de atribuição ou incremento: `LOGO_CACHE_MAX_AGE_MS`, `LOGO_FETCH_CONCURRENCY`, `LOGO_MAX_BYTES`, `MARKETPLACE_FETCH_DEADLINE`, `activeLogoFetches`, `logoCache`, `pendingLogoFetches`.

SHA-256 do trecho: `2c5be4065afbf96f1ddf9580354864b6233611ef55583ea796886606c8140c66`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
