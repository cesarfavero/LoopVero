# `emitAndDescribeAuthResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779912-779946](../../../../../../../reference/runtime/host-main.cjs#L779912-L779946) | `FunctionDeclaration` | sim | `{   result,   taskId,   ...request5 }` |
| [evaluation:580157-580191](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580157-L580191) | `FunctionDeclaration` | sim | `{   result,   taskId,   ...request3 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779912-779946](../../../../../../../reference/runtime/host-main.cjs#L779912-L779946) | 9 | 0 | 2 | 8 | 0 | 0 |
| [evaluation:580157-580191](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580157-L580191) | 9 | 0 | 2 | 8 | 0 | 0 |

### host:779912

Chamadas escritas diretamente neste corpo: `connectorCardAccountFields`, `describeAlreadyAuthenticated`, `describeAuthStarted`, `describeAuthUnreachable`, `formatMcpAccountDisplayName`.

SHA-256 do trecho: `294d3c4e94c2f330d803427858a45db93ccb5a8fa8bf0b59bebfd04bd5f44ee4`.

### evaluation:580157

Chamadas escritas diretamente neste corpo: `connectorCardAccountFields`, `describeAlreadyAuthenticated`, `describeAuthStarted`, `describeAuthUnreachable`, `formatMcpAccountDisplayName`.

SHA-256 do trecho: `bb4d0d4f2eddaec33178cbdd46dfdcb3d0b9b2422a4c6d28fd6a5d7c5519249b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
