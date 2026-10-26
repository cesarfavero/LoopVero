# `isTurnUnfinished`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621821-621824](../../../../../reference/runtime/host-main.cjs#L621821-L621824) | `FunctionDeclaration` | não | `messagesAfterRequest` |
| [evaluation:306175-306178](../../../../../reference/runtime/sand-eval-runner.cjs#L306175-L306178) | `FunctionDeclaration` | não | `messagesAfterRequest` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621821-621824](../../../../../reference/runtime/host-main.cjs#L621821-L621824) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:306175-306178](../../../../../reference/runtime/sand-eval-runner.cjs#L306175-L306178) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:621821

Chamadas escritas diretamente neste corpo: `hasToolInvocation`, `messagesAfterRequest.findLast`.

SHA-256 do trecho: `da680e0a832791dd806aa5d38128cd3e26ceaf2299463bc6aa5de0a948ca2011`.

### evaluation:306175

Chamadas escritas diretamente neste corpo: `hasToolInvocation`, `messagesAfterRequest.findLast`.

SHA-256 do trecho: `da680e0a832791dd806aa5d38128cd3e26ceaf2299463bc6aa5de0a948ca2011`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
