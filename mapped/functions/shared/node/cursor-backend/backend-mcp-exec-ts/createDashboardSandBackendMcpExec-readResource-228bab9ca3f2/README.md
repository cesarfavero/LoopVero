# `createDashboardSandBackendMcpExec/readResource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487026-487061](../../../../../../../reference/runtime/host-main.cjs#L487026-L487061) | `FunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487026-487061](../../../../../../../reference/runtime/host-main.cjs#L487026-L487061) | 3 | 0 | 1 | 4 | 0 | 1 |

### host:487026

Chamadas escritas diretamente neste corpo: `client.readSandMcpResource`, `errorLabel`, `mcpAppDocumentOverCap`, `new ReadSandMcpResourceRequest`, `reportMcpHostEdgeFailure`, `response.contents.map`, `response.contents.reduce`.

SHA-256 do trecho: `bd8f0bbe61b5e883021f2240fc4e4c9f5a6e469a6ab3a34623632c98531cf175`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
