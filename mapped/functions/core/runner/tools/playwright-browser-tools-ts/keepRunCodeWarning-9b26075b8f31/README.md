# `keepRunCodeWarning`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750893-750908](../../../../../../../reference/runtime/host-main.cjs#L750893-L750908) | `FunctionDeclaration` | não | `{   original,   redacted }` |
| [evaluation:523744-523759](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523744-L523759) | `FunctionDeclaration` | não | `{   original,   redacted }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750893-750908](../../../../../../../reference/runtime/host-main.cjs#L750893-L750908) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523744-523759](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523744-L523759) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:750893

Chamadas escritas diretamente neste corpo: `.includes`, `hinted.content.push`, `keptRunCodeWarning`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `success2.clone`, `successOf`, `textOf`.

SHA-256 do trecho: `f72d4ef4daf4315f8d2e0e4e604e5f1173856ffa53de7a3a0b107f03a8d74786`.

### evaluation:523744

Chamadas escritas diretamente neste corpo: `.includes`, `hinted.content.push`, `keptRunCodeWarning`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `success2.clone`, `successOf`, `textOf2`.

SHA-256 do trecho: `96ae3e15fa1cb46675836457bcb87bcf0596ffb82a3102350259396401e9d4c1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
