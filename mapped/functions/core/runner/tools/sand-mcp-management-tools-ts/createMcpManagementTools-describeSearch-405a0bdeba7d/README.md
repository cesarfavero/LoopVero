# `createMcpManagementTools/describeSearch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780215-780221](../../../../../../../reference/runtime/host-main.cjs#L780215-L780221) | `ArrowFunctionExpression` | sim | `query2, plugins, recall2, deps` |
| [evaluation:580460-580466](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580460-L580466) | `ArrowFunctionExpression` | sim | `query2, plugins, recall2, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780215-780221](../../../../../../../reference/runtime/host-main.cjs#L780215-L780221) | 3 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:580460-580466](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580460-L580466) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:780215

Chamadas escritas diretamente neste corpo: `describeSearchResults`, `nativeSearchNote`.

SHA-256 do trecho: `1c155f7cbc6a537fde437484b105099d9fe6522797881ecb55a2433f349ce706`.

### evaluation:580460

Chamadas escritas diretamente neste corpo: `describeSearchResults`, `nativeSearchNote`.

SHA-256 do trecho: `1c155f7cbc6a537fde437484b105099d9fe6522797881ecb55a2433f349ce706`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
