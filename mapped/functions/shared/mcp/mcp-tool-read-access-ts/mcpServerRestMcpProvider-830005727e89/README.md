# `mcpServerRestMcpProvider`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-tool-read-access.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-tool-read-access-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686989-686992](../../../../../../reference/runtime/host-main.cjs#L686989-L686992) | `FunctionDeclaration` | não | `serverHost` |
| [evaluation:579124-579127](../../../../../../reference/runtime/sand-eval-runner.cjs#L579124-L579127) | `FunctionDeclaration` | não | `serverHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686989-686992](../../../../../../reference/runtime/host-main.cjs#L686989-L686992) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579124-579127](../../../../../../reference/runtime/sand-eval-runner.cjs#L579124-L579127) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:686989

Chamadas escritas diretamente neste corpo: `.split`, `serverHost.toLowerCase`.

SHA-256 do trecho: `a263c5676e548471d66a45556af29cf4a9ce9052e8c8d98369e6a47955dead19`.

### evaluation:579124

Chamadas escritas diretamente neste corpo: `.split`, `serverHost.toLowerCase`.

SHA-256 do trecho: `a263c5676e548471d66a45556af29cf4a9ce9052e8c8d98369e6a47955dead19`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
