# `src/shared/mcp/mcp.ts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:226089-226136](../../../../../../reference/runtime/host-main.cjs#L226089-L226136) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226089-226136](../../../../../../reference/runtime/host-main.cjs#L226089-L226136) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:226089

Chamadas escritas diretamente neste corpo: `init_key_of`, `init_loopback_host`, `new Set`.

Alvos de atribuição ou incremento: `BACKEND_MCP_OAUTH_PENDING_STATE_TTL_MS`, `BLOCKED_MCP_OAUTH_REDIRECT_SCHEMES`, `DANGEROUS_MCP_TOOL_EXECUTE_TIMEOUT_MS`, `DEFAULT_MCP_ACCOUNT_KEY`, `DESIGNATED_DANGEROUS_MCP_TOOL_NAMES`, `GROK_SHAREPOINT_SERVER_IDENTIFIER`, `GROK_SHAREPOINT_WRITE_DISPLAY_SERVER_ID`, `GROK_SHAREPOINT_WRITE_SERVER_IDENTIFIER`, `MAX_CONNECTOR_ERROR_LENGTH`, `MAX_MCP_OAUTH_REDIRECT_URI_LENGTH`, `MAX_RENDERED_MCP_ACCOUNT_LABEL_LENGTH`, `MAX_UNTRUSTED_MARKUP_SCAN_LENGTH`, `MCP_BACKEND_LISTING_REUSE_MS`, `MCP_LABEL_HOSTILE_CHARS`, `MCP_LISTING_SERVER_ID_PATTERN`, `MCP_OAUTH_AUTHORIZATION_URL_LIFETIME_MS`, `MCP_RAW_SERVER_STATUSES`.

SHA-256 do trecho: `9f33ed4fbe2bb3f13202d37020aa069089003b313da9c7342d6210e4c1c3563d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
