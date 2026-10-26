# `runSummarizationPipeline`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/pipeline.js` · [README do módulo](../../../../modules/agent-summarization/pipeline-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620475-620508](../../../../../reference/runtime/host-main.cjs#L620475-L620508) | `FunctionDeclaration` | sim | `summarizer, ctx, messages2, options2` |
| [evaluation:304829-304862](../../../../../reference/runtime/sand-eval-runner.cjs#L304829-L304862) | `FunctionDeclaration` | sim | `summarizer, ctx, messages, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620475-620508](../../../../../reference/runtime/host-main.cjs#L620475-L620508) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:304829-304862](../../../../../reference/runtime/sand-eval-runner.cjs#L304829-L304862) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:620475

Chamadas escritas diretamente neste corpo: `summarizer.assembleFinalMessages`, `summarizer.buildSummaryMessage`, `summarizer.generateSummary`, `summarizer.partitionMessages`, `warnIfPreservedTailShapeInvalid`.

SHA-256 do trecho: `eb7519792250d79d853821bfb9371d8e5d792d9d4b69400a041e11dbd2406829`.

### evaluation:304829

Chamadas escritas diretamente neste corpo: `summarizer.assembleFinalMessages`, `summarizer.buildSummaryMessage`, `summarizer.generateSummary`, `summarizer.partitionMessages`, `warnIfPreservedTailShapeInvalid`.

SHA-256 do trecho: `7b267281e1dbe5cae6fd2e3caafece65a0c08accaeb8b58532497de7d5d5240a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
