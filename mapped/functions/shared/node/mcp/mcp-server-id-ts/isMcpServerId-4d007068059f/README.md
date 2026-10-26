# `isMcpServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-server-id.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-server-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685159-685161](../../../../../../../reference/runtime/host-main.cjs#L685159-L685161) | `FunctionDeclaration` | não | `rawId` |
| [evaluation:579382-579384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579382-L579384) | `FunctionDeclaration` | não | `rawId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685159-685161](../../../../../../../reference/runtime/host-main.cjs#L685159-L685161) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579382-579384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579382-L579384) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:685159

Chamadas escritas diretamente neste corpo: `MCP_SERVER_ID_PATTERN.test`, `rawId.trim`.

SHA-256 do trecho: `e945c29af33f64c0e56fef687ba75eaed9e6b4df8135c96db2f0acb06abb3062`.

### evaluation:579382

Chamadas escritas diretamente neste corpo: `MCP_SERVER_ID_PATTERN.test`, `rawId.trim`.

SHA-256 do trecho: `e945c29af33f64c0e56fef687ba75eaed9e6b4df8135c96db2f0acb06abb3062`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
