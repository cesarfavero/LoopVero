# `convertCoreMessagesToLoopFormat`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:310809-310873](../../../../../../reference/runtime/sand-eval-runner.cjs#L310809-L310873) | `FunctionDeclaration` | não | `messages, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310809-310873](../../../../../../reference/runtime/sand-eval-runner.cjs#L310809-L310873) | 17 | 3 | 0 | 1 | 0 | 0 |

### evaluation:310809

Chamadas escritas diretamente neste corpo: `.trim`, `Array.isArray`, `callsById.get`, `callsById.set`, `extractToolResultTextForLoopDetection`, `new Map`, `options2.isWaitToolResult`, `previous.toolResultTexts.push`, `previous.transientRetryKinds.push`, `result.push`, `stripThinkingTags`, `toolCalls3.push`.

Alvos de atribuição ou incremento: `previous.toolResultTexts`, `previous.toolResultWaited`, `previous.transientRetryKinds`, `text3`.

SHA-256 do trecho: `8aa07fd533969a6a9520aff8cb6001313597089f9f670210bdec0b1dafc36a3b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
