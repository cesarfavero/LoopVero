# `createHostMcp/pluginSkillSourceUrls`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700983-700994](../../../../../../reference/runtime/host-main.cjs#L700983-L700994) | `ArrowFunctionExpression` | sim | `pluginId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700983-700994](../../../../../../reference/runtime/host-main.cjs#L700983-L700994) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:700983

Chamadas escritas diretamente neste corpo: `.flatMap`, `manager.getCatalog`, `reportMcpHostEdgeFailure`, `views.find`.

SHA-256 do trecho: `06ecead0c16476e67c13034445ba6d8f39f663758f09e3c22104e736f19b2fb4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
