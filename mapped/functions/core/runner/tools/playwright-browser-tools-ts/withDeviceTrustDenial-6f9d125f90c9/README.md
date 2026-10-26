# `withDeviceTrustDenial`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750830-750845](../../../../../../../reference/runtime/host-main.cjs#L750830-L750845) | `FunctionDeclaration` | não | `result` |
| [evaluation:523681-523696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523681-L523696) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750830-750845](../../../../../../../reference/runtime/host-main.cjs#L750830-L750845) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:523681-523696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523681-L523696) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:750830

Chamadas escritas diretamente neste corpo: `annotateWorkspaceDeviceTrustDenial`, `annotated2.slice`, `hinted.content.push`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `note.trim`, `success2.clone`, `successOf`, `textOf`.

SHA-256 do trecho: `14a2ff240155f6b9a2ea3332f7e3ba23fd545d3bb7e8e3cfec10ec7e9e072160`.

### evaluation:523681

Chamadas escritas diretamente neste corpo: `annotateWorkspaceDeviceTrustDenial`, `annotated2.slice`, `hinted.content.push`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `note.trim`, `success2.clone`, `successOf`, `textOf2`.

SHA-256 do trecho: `0f0c76d6e3703117100c3c520a8b45245a432b7e7aaf90fddffe3a3f7f8748f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
