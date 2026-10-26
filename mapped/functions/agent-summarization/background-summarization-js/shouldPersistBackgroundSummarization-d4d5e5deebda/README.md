# `shouldPersistBackgroundSummarization`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/background-summarization.js` · [README do módulo](../../../../modules/agent-summarization/background-summarization-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616790-616793](../../../../../reference/runtime/host-main.cjs#L616790-L616793) | `FunctionDeclaration` | não | `usedTokens, maxTokens, props` |
| [evaluation:285330-285333](../../../../../reference/runtime/sand-eval-runner.cjs#L285330-L285333) | `FunctionDeclaration` | não | `usedTokens, maxTokens, props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616790-616793](../../../../../reference/runtime/host-main.cjs#L616790-L616793) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285330-285333](../../../../../reference/runtime/sand-eval-runner.cjs#L285330-L285333) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616790

Chamadas escritas diretamente neste corpo: `isValidUsedTokensThreshold`, `shouldStartBackgroundSummarization`.

SHA-256 do trecho: `f212854bed68052304011588401738c6a3b90646349a9c3927b9f9dbfd6a9ae5`.

### evaluation:285330

Chamadas escritas diretamente neste corpo: `isValidUsedTokensThreshold`, `shouldStartBackgroundSummarization`.

SHA-256 do trecho: `f212854bed68052304011588401738c6a3b90646349a9c3927b9f9dbfd6a9ae5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
