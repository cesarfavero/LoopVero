# `createDashboardSandBackendMcpExec/checkAuthStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487062-487111](../../../../../../../reference/runtime/host-main.cjs#L487062-L487111) | `FunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487062-487111](../../../../../../../reference/runtime/host-main.cjs#L487062-L487111) | 12 | 0 | 1 | 1 | 2 | 1 |

### host:487062

Chamadas escritas diretamente neste corpo: `client.checkHttpMcpStatus`, `errorLabel`, `new CheckHttpMcpStatusRequest`, `new SandBackendMcpExecError`, `reportMcpHostEdgeFailure`, `response.statuses.find`.

Alvos de lançamento explícito: `SandBackendMcpExecError`.

SHA-256 do trecho: `84bad0582ddee1ff73c5ead62407a1ef8e75e0f047519af45941ba42698032bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
