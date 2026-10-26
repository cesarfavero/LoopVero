# `readTranscriptParameters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/sand-read-transcript-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766324-766332](../../../../../../../reference/runtime/host-main.cjs#L766324-L766332) | `ArrowFunctionExpression` | não | `subagentToolName, subagent` |
| [evaluation:559688-559696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559688-L559696) | `ArrowFunctionExpression` | não | `subagentToolName, subagent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766324-766332](../../../../../../../reference/runtime/host-main.cjs#L766324-L766332) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:766324 usa retorno implícito de arrow function.
| [evaluation:559688-559696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559688-L559696) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:559688 usa retorno implícito de arrow function.

### host:766324

Chamadas escritas diretamente neste corpo: `.describe`, `.int`, `.max`, `.nonnegative`, `.optional`, `.positive`, `number2`, `object`, `transcriptTargetParameters`.

SHA-256 do trecho: `e3dc0a9743e960d7a3e3bf0a792c7d9781b9056884477abd0b791ea269189bb2`.

### evaluation:559688

Chamadas escritas diretamente neste corpo: `.describe`, `.int`, `.max`, `.nonnegative`, `.optional`, `.positive`, `number2`, `object`, `transcriptTargetParameters`.

SHA-256 do trecho: `e3dc0a9743e960d7a3e3bf0a792c7d9781b9056884477abd0b791ea269189bb2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
