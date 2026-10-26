# `SummarizationHandler.isInputOrOutputTokenLimitError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621808-621810](../../../../../reference/runtime/host-main.cjs#L621808-L621810) | `method` | não | `error64` |
| [evaluation:306162-306164](../../../../../reference/runtime/sand-eval-runner.cjs#L306162-L306164) | `method` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621808-621810](../../../../../reference/runtime/host-main.cjs#L621808-L621810) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:306162-306164](../../../../../reference/runtime/sand-eval-runner.cjs#L306162-L306164) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:621808

Chamadas escritas diretamente neste corpo: `hasErrorName`.

SHA-256 do trecho: `f603996bf88a77ba937a89c49ca09cd0edbfe975503a73f70da33dc3a006ab0a`.

### evaluation:306162

Chamadas escritas diretamente neste corpo: `hasErrorName`.

SHA-256 do trecho: `d09943b1619f72b2098272022c1c2685b14a71ce63a79a62c87fb7875ccc5532`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
