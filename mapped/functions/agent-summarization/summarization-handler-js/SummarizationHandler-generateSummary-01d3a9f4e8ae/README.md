# `SummarizationHandler.generateSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621513-621534](../../../../../reference/runtime/host-main.cjs#L621513-L621534) | `method` | sim | `ctx, partitioned, options2` |
| [evaluation:305867-305888](../../../../../reference/runtime/sand-eval-runner.cjs#L305867-L305888) | `method` | sim | `ctx, partitioned, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621513-621534](../../../../../reference/runtime/host-main.cjs#L621513-L621534) | 2 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:305867-305888](../../../../../reference/runtime/sand-eval-runner.cjs#L305867-L305888) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:621513

Chamadas escritas diretamente neste corpo: `executeSummarizationWithRetry`, `this.buildDeterministicFallbackText`, `this.shouldUseDeterministicFallback`.

SHA-256 do trecho: `119bb5ec5ed2aee4973e91bbc4ec307d53501de0ff9a83f155b02df89d5b5d10`.

### evaluation:305867

Chamadas escritas diretamente neste corpo: `executeSummarizationWithRetry`, `this.buildDeterministicFallbackText`, `this.shouldUseDeterministicFallback`.

SHA-256 do trecho: `119bb5ec5ed2aee4973e91bbc4ec307d53501de0ff9a83f155b02df89d5b5d10`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
