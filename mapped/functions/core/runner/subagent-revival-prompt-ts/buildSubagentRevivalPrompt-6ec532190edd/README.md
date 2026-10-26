# `buildSubagentRevivalPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-revival-prompt.ts` · [README do módulo](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583993-584009](../../../../../../reference/runtime/sand-eval-runner.cjs#L583993-L584009) | `FunctionDeclaration` | não | `completions, context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583993-584009](../../../../../../reference/runtime/sand-eval-runner.cjs#L583993-L584009) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583993

Chamadas escritas diretamente neste corpo: `.join`, `blocks.join`, `completions.every`, `completions.map`, `completions.some`, `revivalInstructionOf`, `revivalIntro`.

SHA-256 do trecho: `ddbbc27a423d14ae9993441dcb3e65684e58ab0f431bde6d31e174a69bd656d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
