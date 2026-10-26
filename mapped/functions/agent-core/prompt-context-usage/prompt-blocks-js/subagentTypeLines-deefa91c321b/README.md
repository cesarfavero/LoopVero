# `subagentTypeLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-blocks.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476164-476177](../../../../../../reference/runtime/host-main.cjs#L476164-L476177) | `FunctionDeclaration` | não | `text3` |
| [evaluation:255474-255487](../../../../../../reference/runtime/sand-eval-runner.cjs#L255474-L255487) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476164-476177](../../../../../../reference/runtime/host-main.cjs#L476164-L476177) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:255474-255487](../../../../../../reference/runtime/sand-eval-runner.cjs#L255474-L255487) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:476164

Chamadas escritas diretamente neste corpo: `SUBAGENT_TYPE_LINE_PATTERN.exec`, `line.trim`, `line.trimStart`, `lines2.push`, `text3.split`.

Alvos de atribuição ou incremento: `lineStart`.

SHA-256 do trecho: `51e51d483539fa0cd8498aa777b318a94589f6ba99b8116d823b92270e7893f6`.

### evaluation:255474

Chamadas escritas diretamente neste corpo: `SUBAGENT_TYPE_LINE_PATTERN.exec`, `line.trim`, `line.trimStart`, `lines2.push`, `text3.split`.

Alvos de atribuição ou incremento: `lineStart`.

SHA-256 do trecho: `51e51d483539fa0cd8498aa777b318a94589f6ba99b8116d823b92270e7893f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
