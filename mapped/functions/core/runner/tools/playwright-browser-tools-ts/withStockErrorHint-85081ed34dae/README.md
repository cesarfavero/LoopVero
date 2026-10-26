# `withStockErrorHint`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750952-750964](../../../../../../../reference/runtime/host-main.cjs#L750952-L750964) | `FunctionDeclaration` | não | `tool, result, runCodeOffered` |
| [evaluation:523803-523815](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523803-L523815) | `FunctionDeclaration` | não | `tool, result, runCodeOffered` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750952-750964](../../../../../../../reference/runtime/host-main.cjs#L750952-L750964) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523803-523815](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523803-L523815) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:750952

Chamadas escritas diretamente neste corpo: `hinted.content.push`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `stockErrorHint`, `success2.clone`, `successOf`.

SHA-256 do trecho: `4f757341a096551c5fbf0cfb01c5d407c9f688ac942c203ed8bc03f9a6a3f0b4`.

### evaluation:523803

Chamadas escritas diretamente neste corpo: `hinted.content.push`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `stockErrorHint`, `success2.clone`, `successOf`.

SHA-256 do trecho: `4f757341a096551c5fbf0cfb01c5d407c9f688ac942c203ed8bc03f9a6a3f0b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
