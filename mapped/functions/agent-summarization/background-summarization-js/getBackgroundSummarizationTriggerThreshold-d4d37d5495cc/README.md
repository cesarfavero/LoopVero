# `getBackgroundSummarizationTriggerThreshold`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/background-summarization.js` · [README do módulo](../../../../modules/agent-summarization/background-summarization-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616767-616785](../../../../../reference/runtime/host-main.cjs#L616767-L616785) | `FunctionDeclaration` | não | `maxTokens, props` |
| [evaluation:285307-285325](../../../../../reference/runtime/sand-eval-runner.cjs#L285307-L285325) | `FunctionDeclaration` | não | `maxTokens, props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616767-616785](../../../../../reference/runtime/host-main.cjs#L616767-L616785) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:285307-285325](../../../../../reference/runtime/sand-eval-runner.cjs#L285307-L285325) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:616767

Chamadas escritas diretamente neste corpo: `Math.min`, `candidates.push`, `isValidUsedTokensThreshold`.

SHA-256 do trecho: `f3f8212800384f1fb27abb52ac8a4bfc90e8982edef0d95e98800c34f2b9e036`.

### evaluation:285307

Chamadas escritas diretamente neste corpo: `Math.min`, `candidates.push`, `isValidUsedTokensThreshold`.

SHA-256 do trecho: `f3f8212800384f1fb27abb52ac8a4bfc90e8982edef0d95e98800c34f2b9e036`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
