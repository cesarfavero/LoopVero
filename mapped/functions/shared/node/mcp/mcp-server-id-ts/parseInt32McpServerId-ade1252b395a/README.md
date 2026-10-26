# `parseInt32McpServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-server-id.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-server-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685186-685192](../../../../../../../reference/runtime/host-main.cjs#L685186-L685192) | `FunctionDeclaration` | não | `rawId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685186-685192](../../../../../../../reference/runtime/host-main.cjs#L685186-L685192) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:685186

Chamadas escritas diretamente neste corpo: `Number`, `isInt32McpServerId`, `new SandMcpConfigError`, `validateMcpServerId`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `eae0478fa0f608128017f016b38e7c8cbaaf7aa518f3d445a021d4d8042843d9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
