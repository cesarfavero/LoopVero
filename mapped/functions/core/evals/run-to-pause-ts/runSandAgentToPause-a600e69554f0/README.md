# `runSandAgentToPause`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/run-to-pause.ts` · [README do módulo](../../../../../modules/core/evals/run-to-pause-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:627131-627163](../../../../../../reference/runtime/sand-eval-runner.cjs#L627131-L627163) | `FunctionDeclaration` | sim | `runner, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627131-627163](../../../../../../reference/runtime/sand-eval-runner.cjs#L627131-L627163) | 3 | 1 | 3 | 2 | 0 | 0 |

### evaluation:627131

Chamadas escritas diretamente neste corpo: `buildSubagentRevival`, `options2.backgroundWaitLimit`, `options2.revivalRunOptions`, `owesSubagentRevivalReply`, `pendingCompletions.splice`, `revivalBatchOf`, `revivalRunLength`, `runner.drainBackgroundSubagents`, `runner.run`, `runner.setBackgroundSubagentHandler`, `untilDrainedOrStopped`, `waitLimit.dispose`.

Alvos de atribuição ou incremento: `result`, `revivalIndex`.

SHA-256 do trecho: `ca035e3dd8a3917b8b675d4737893c504cc1807291be366bee66cf411dc4027c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
