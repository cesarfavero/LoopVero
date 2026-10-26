# `runSandEvalRequest/transcriptEvidence`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/run.ts` · [README do módulo](../../../../modules/evaluation/run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630307-630319](../../../../../reference/runtime/sand-eval-runner.cjs#L630307-L630319) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630307-630319](../../../../../reference/runtime/sand-eval-runner.cjs#L630307-L630319) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:630307

Chamadas escritas diretamente neste corpo: `sandToolCallAgents`, `sandTranscriptToolInputs`, `sandTurnTranscripts`, `withSandToolCallAgentsAndInputs`.

SHA-256 do trecho: `3384cc3417c44e93b22f1228c07bdeb61f89f9ecbb90d0700fcddd161bd21436`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
