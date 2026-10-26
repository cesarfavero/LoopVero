# `runSandEvalRequest/recordTurnTranscript`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/run.ts` · [README do módulo](../../../../modules/evaluation/run-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630302-630305](../../../../../reference/runtime/sand-eval-runner.cjs#L630302-L630305) | `ArrowFunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630302-630305](../../../../../reference/runtime/sand-eval-runner.cjs#L630302-L630305) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:630302

Chamadas escritas diretamente neste corpo: `dependencies.inference.recordTurnTranscript`, `sandTurnTranscriptSegment`, `transcriptSegments.push`.

SHA-256 do trecho: `5c5f747fa86124a1612e39de63f4e8316836d7b87e67400d7fdfbaa6e482049a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
