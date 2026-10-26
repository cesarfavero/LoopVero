# `appendNoteToMcpResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-tool-error-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-tool-error-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585777-585789](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585777-L585789) | `FunctionDeclaration` | não | `result, note` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585777-585789](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585777-L585789) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585777

Chamadas escritas diretamente neste corpo: `new McpTextContent`, `new McpToolResultContentItem`, `result.result.value.content.push`.

Alvos de atribuição ou incremento: `result.result.value.error`.

SHA-256 do trecho: `1bed210ac921ae7528708a1d957d4b98de026fd990f2528bb4cc0c84c0aea5c5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
