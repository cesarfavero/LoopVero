# `createDashboardSandBackendMcpExec/renameAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487177-487186](../../../../../../../reference/runtime/host-main.cjs#L487177-L487186) | `FunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487177-487186](../../../../../../../reference/runtime/host-main.cjs#L487177-L487186) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:487177

Chamadas escritas diretamente neste corpo: `client.renameMcpOAuthAccount`, `new RenameMcpOAuthAccountRequest`.

SHA-256 do trecho: `575e84c1e215de0e5e109d9eb9b5c6d043e339fa821136fdda1c45e4a4d78ccb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
