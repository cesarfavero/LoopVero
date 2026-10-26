# `tailOverflowsContextWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621812-621814](../../../../../reference/runtime/host-main.cjs#L621812-L621814) | `FunctionDeclaration` | não | `tail, contextWindowTokens` |
| [evaluation:306166-306168](../../../../../reference/runtime/sand-eval-runner.cjs#L306166-L306168) | `FunctionDeclaration` | não | `tail, contextWindowTokens` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621812-621814](../../../../../reference/runtime/host-main.cjs#L621812-L621814) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:306166-306168](../../../../../reference/runtime/sand-eval-runner.cjs#L306166-L306168) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:621812

Chamadas escritas diretamente neste corpo: `estimateTokenCount`.

SHA-256 do trecho: `0de2f038f26a20e83150d0af075286d2912928acf12b6daa070e4df4acddb991`.

### evaluation:306166

Chamadas escritas diretamente neste corpo: `estimateTokenCount`.

SHA-256 do trecho: `0de2f038f26a20e83150d0af075286d2912928acf12b6daa070e4df4acddb991`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
