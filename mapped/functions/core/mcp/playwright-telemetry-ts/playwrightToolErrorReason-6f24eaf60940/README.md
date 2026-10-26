# `playwrightToolErrorReason`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700364-700366](../../../../../../reference/runtime/host-main.cjs#L700364-L700366) | `FunctionDeclaration` | não | `text3` |
| [evaluation:514153-514155](../../../../../../reference/runtime/sand-eval-runner.cjs#L514153-L514155) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700364-700366](../../../../../../reference/runtime/host-main.cjs#L700364-L700366) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514153-514155](../../../../../../reference/runtime/sand-eval-runner.cjs#L514153-L514155) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:700364

Chamadas escritas diretamente neste corpo: `TOOL_ERROR_REASON_PATTERNS.find`.

SHA-256 do trecho: `583520a28ddb3ebdcb98d3ba3ea597869485593520fc2d1eb2c2f5a826e2df11`.

### evaluation:514153

Chamadas escritas diretamente neste corpo: `TOOL_ERROR_REASON_PATTERNS.find`.

SHA-256 do trecho: `583520a28ddb3ebdcb98d3ba3ea597869485593520fc2d1eb2c2f5a826e2df11`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
