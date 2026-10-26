# `createDashboardSandBackendMcpExec/deleteAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487187-487195](../../../../../../../reference/runtime/host-main.cjs#L487187-L487195) | `FunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487187-487195](../../../../../../../reference/runtime/host-main.cjs#L487187-L487195) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:487187

Chamadas escritas diretamente neste corpo: `client.deleteMcpOAuthAccount`, `new DeleteMcpOAuthAccountRequest`.

SHA-256 do trecho: `d607daaff6d46cd599a4dc11d0063ee716f93d0bf280bb1d7dc37ee3cb38b07f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
