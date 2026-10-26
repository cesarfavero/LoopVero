# `runSandEvalRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/run.ts` · [README do módulo](../../../../modules/evaluation/run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630255-630581](../../../../../reference/runtime/sand-eval-runner.cjs#L630255-L630581) | `FunctionDeclaration` | sim | `request3, dependencies` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630255-630581](../../../../../reference/runtime/sand-eval-runner.cjs#L630255-L630581) | 24 | 0 | 7 | 3 | 0 | 1 |

### evaluation:630255

Chamadas escritas diretamente neste corpo: `.then`, `Promise.race`, `SandEvalContinuationRuntime.create`, `abandonAtDeadline`, `afterAbort`, `buildSandEvalConversationHistory2`, `createRequestContext`, `createSandEvalRunner`, `createSandEvalSessionState`, `deliveredMessages.join`, `dependencies.stopWaiting.addEventListener`, `new Date`, `new LocalExecSandBox`, `request3.selectedImages.map`, `scenarioClock`, `selectSandEvalFinalMessage`, `serializeSandEvalRunnerError`, `sessionState.dispose`, `transcriptEvidence`, `withSessionMemory`, `work.catch`.

SHA-256 do trecho: `04255a67b6409aa3659437a0cf194876b5abec46b80c7700e0fe1b64cce2ff55`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
