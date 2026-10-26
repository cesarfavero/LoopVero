# `describeGrokUnavailableAuthRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779742-779749](../../../../../../../reference/runtime/host-main.cjs#L779742-L779749) | `FunctionDeclaration` | não | `resolution` |
| [evaluation:579980-579987](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579980-L579987) | `FunctionDeclaration` | não | `resolution` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779742-779749](../../../../../../../reference/runtime/host-main.cjs#L779742-L779749) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579980-579987](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579980-L579987) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779742

Chamadas escritas diretamente neste corpo: `resolution.serverId.startsWith`.

SHA-256 do trecho: `68578df1a618c0b34d6780444057517c4bff37d3771ae049d4db2e07080856a7`.

### evaluation:579980

Chamadas escritas diretamente neste corpo: `resolution.serverId.startsWith`.

SHA-256 do trecho: `68578df1a618c0b34d6780444057517c4bff37d3771ae049d4db2e07080856a7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
