# `createSandMcpMetaToolOptions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554286-554328](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554286-L554328) | `FunctionDeclaration` | não | `mcpTools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554286-554328](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554286-L554328) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:554286

Chamadas escritas diretamente neste corpo: `.map`, `Value.fromJson`, `descriptor2.tools.push`, `descriptors.entries`, `descriptors.get`, `descriptors.set`, `isReadonlySubagentMcpToolAllowed`, `new Map`, `new McpMetaToolOptions`, `new McpToolDescriptor`, `toolAnnotationsJsonField`.

Alvos de atribuição ou incremento: `descriptor2`.

SHA-256 do trecho: `ad5e503bcbe94527fc4ecb6fb321a5d581e64338b9ec1c0e796f143a800bb47f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
