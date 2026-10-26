# `validateMarketplacePluginId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-display-runtime.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-display-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685121-685127](../../../../../../../reference/runtime/host-main.cjs#L685121-L685127) | `FunctionDeclaration` | não | `rawPluginId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685121-685127](../../../../../../../reference/runtime/host-main.cjs#L685121-L685127) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:685121

Chamadas escritas diretamente neste corpo: `/^\d+$/.test`, `new SandMcpConfigError`, `rawPluginId.trim`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `27c6b23f9b7635de2d49f22160ff19121a5905c83c702ce761c208f8fe8498e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
