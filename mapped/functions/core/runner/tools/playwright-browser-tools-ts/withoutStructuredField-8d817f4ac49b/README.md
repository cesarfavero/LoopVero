# `withoutStructuredField`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750668-750680](../../../../../../../reference/runtime/host-main.cjs#L750668-L750680) | `FunctionDeclaration` | não | `result, field` |
| [evaluation:523519-523531](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523519-L523531) | `FunctionDeclaration` | não | `result, field` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750668-750680](../../../../../../../reference/runtime/host-main.cjs#L750668-L750680) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523519-523531](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523519-L523531) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:750668

Chamadas escritas diretamente neste corpo: `Object.keys`, `new McpToolResult`, `reported2.toJson`, `success2.clone`, `successOf`.

Alvos de atribuição ou incremento: `stripped.structuredContent`.

SHA-256 do trecho: `a0e2c6ed4ae0c3bda719bb5b6fdcc7489cfe14ebf73f5de41b53efd94b7d00ff`.

### evaluation:523519

Chamadas escritas diretamente neste corpo: `Object.keys`, `new McpToolResult`, `reported2.toJson`, `success2.clone`, `successOf`.

Alvos de atribuição ou incremento: `stripped.structuredContent`.

SHA-256 do trecho: `a0e2c6ed4ae0c3bda719bb5b6fdcc7489cfe14ebf73f5de41b53efd94b7d00ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
