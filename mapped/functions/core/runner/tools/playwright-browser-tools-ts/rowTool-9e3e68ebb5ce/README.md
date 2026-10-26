# `rowTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751078-751445](../../../../../../../reference/runtime/host-main.cjs#L751078-L751445) | `FunctionDeclaration` | não | `deps, row, lastPageUrl, treatment, exposeArm` |
| [evaluation:523929-524296](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523929-L524296) | `FunctionDeclaration` | não | `deps, row, lastPageUrl, treatment, exposeArm` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751078-751445](../../../../../../../reference/runtime/host-main.cjs#L751078-L751445) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523929-524296](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523929-L524296) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751078

Chamadas escritas diretamente neste corpo: `new McpToolCall`, `new ToolCall`, `toolFor`, `withPlaywrightBoxTimingStripped`, `withSafeParsedArgs`.

SHA-256 do trecho: `ee6a855f4acd23908d4b607b0e6e26cfcad6a0332abc9d30470bdf1a9e61a1c9`.

### evaluation:523929

Chamadas escritas diretamente neste corpo: `new McpToolCall`, `new ToolCall`, `toolFor`, `withPlaywrightBoxTimingStripped`, `withSafeParsedArgs`.

SHA-256 do trecho: `74ded86ac54c4e1608cf3682365649a15c08febb47d509aa70040af3591dc1c5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
