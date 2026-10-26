# `createDashboardSandBackendMcpExec/completeOAuth`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487112-487131](../../../../../../../reference/runtime/host-main.cjs#L487112-L487131) | `FunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487112-487131](../../../../../../../reference/runtime/host-main.cjs#L487112-L487131) | 1 | 0 | 1 | 1 | 2 | 1 |

### host:487112

Chamadas escritas diretamente neste corpo: `client.completeMcpOAuth`, `errorLabel`, `isDefinitiveOAuthCompletionRejection`, `new CompleteMcpOAuthRequest`, `new SandMcpOAuthCompletionRejectedError`, `normalizeAccountLabel`.

Alvos de lançamento explícito: `SandMcpOAuthCompletionRejectedError`, `error64`.

SHA-256 do trecho: `9c835783ccfbfec5ca5c37df3ba3962bf15a2f64dc74008ecf320ac47359b9cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
