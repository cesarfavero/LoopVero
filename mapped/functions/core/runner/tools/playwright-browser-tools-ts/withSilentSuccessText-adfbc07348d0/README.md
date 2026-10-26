# `withSilentSuccessText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751027-751045](../../../../../../../reference/runtime/host-main.cjs#L751027-L751045) | `FunctionDeclaration` | não | `result` |
| [evaluation:523878-523896](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523878-L523896) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751027-751045](../../../../../../../reference/runtime/host-main.cjs#L751027-L751045) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523878-523896](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523878-L523896) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:751027

Chamadas escritas diretamente neste corpo: `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `success2.clone`, `success2.content.some`, `successOf`.

Alvos de atribuição ou incremento: `spoken.content`.

SHA-256 do trecho: `a908d9e1de225385fa5a503dabd92724dbde1805cca68a467f63a60200770d0a`.

### evaluation:523878

Chamadas escritas diretamente neste corpo: `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `success2.clone`, `success2.content.some`, `successOf`.

Alvos de atribuição ou incremento: `spoken.content`.

SHA-256 do trecho: `a908d9e1de225385fa5a503dabd92724dbde1805cca68a467f63a60200770d0a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
