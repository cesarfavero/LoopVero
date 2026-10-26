# `buildDeterministicSummaryText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/deterministic-summary-builder.js` · [README do módulo](../../../../modules/agent-summarization/deterministic-summary-builder-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621838-621874](../../../../../reference/runtime/host-main.cjs#L621838-L621874) | `FunctionDeclaration` | não | `ctx, messagesToSummarize, options2` |
| [evaluation:306192-306228](../../../../../reference/runtime/sand-eval-runner.cjs#L306192-L306228) | `FunctionDeclaration` | não | `ctx, messagesToSummarize, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621838-621874](../../../../../reference/runtime/host-main.cjs#L621838-L621874) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:306192-306228](../../../../../reference/runtime/sand-eval-runner.cjs#L306192-L306228) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:621838

Chamadas escritas diretamente neste corpo: `.trim`, `Math.floor`, `Math.max`, `buildDeterministicPreamble`, `formatOmittedMessagesPreamble`, `messagesToSummarize.map`, `truncatePromptFairly`, `truncation.resultParts.join`.

SHA-256 do trecho: `a051937197fb8d8c8ae132dc1928e59e112724aaf7e8a3d5b80dd4575a56cc09`.

### evaluation:306192

Chamadas escritas diretamente neste corpo: `.trim`, `Math.floor`, `Math.max`, `buildDeterministicPreamble`, `formatOmittedMessagesPreamble`, `messagesToSummarize.map`, `truncatePromptFairly`, `truncation.resultParts.join`.

SHA-256 do trecho: `a051937197fb8d8c8ae132dc1928e59e112724aaf7e8a3d5b80dd4575a56cc09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
