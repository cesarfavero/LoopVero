# `createDashboardSandBackendMcpExec/logoutAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487166-487176](../../../../../../../reference/runtime/host-main.cjs#L487166-L487176) | `FunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487166-487176](../../../../../../../reference/runtime/host-main.cjs#L487166-L487176) | 1 | 0 | 1 | 0 | 0 | 0 |

### host:487166

Chamadas escritas diretamente neste corpo: `client.deleteMcpOAuthToken`, `new DeleteMcpOAuthTokenRequest`.

SHA-256 do trecho: `eab48f2f84275b7906cbbab94f054222e51e33f4c62782c956bd17533de7a3c4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
