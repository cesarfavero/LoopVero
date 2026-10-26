# `playwrightToolCallSpanResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700659-700681](../../../../../../reference/runtime/host-main.cjs#L700659-L700681) | `FunctionDeclaration` | não | `result` |
| [evaluation:514460-514482](../../../../../../reference/runtime/sand-eval-runner.cjs#L514460-L514482) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700659-700681](../../../../../../reference/runtime/host-main.cjs#L700659-L700681) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:514460-514482](../../../../../../reference/runtime/sand-eval-runner.cjs#L514460-L514482) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:700659

Chamadas escritas diretamente neste corpo: `TIMED_OUT_TOOL_ERROR_REASONS.has`, `snapshotSkipped`, `toolCallErrorClassLabel`.

SHA-256 do trecho: `b476cf29ddd13d1a20176d976309f024622c9eb872488e4e3af7db9453692aec`.

### evaluation:514460

Chamadas escritas diretamente neste corpo: `TIMED_OUT_TOOL_ERROR_REASONS.has`, `snapshotSkipped`, `toolCallErrorClassLabel`.

SHA-256 do trecho: `b476cf29ddd13d1a20176d976309f024622c9eb872488e4e3af7db9453692aec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
