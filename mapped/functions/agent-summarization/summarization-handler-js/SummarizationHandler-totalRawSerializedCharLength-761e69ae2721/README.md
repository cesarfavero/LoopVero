# `SummarizationHandler.totalRawSerializedCharLength`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621786-621792](../../../../../reference/runtime/host-main.cjs#L621786-L621792) | `method` | não | `messages2` |
| [evaluation:306140-306146](../../../../../reference/runtime/sand-eval-runner.cjs#L306140-L306146) | `method` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621786-621792](../../../../../reference/runtime/host-main.cjs#L621786-L621792) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:306140-306146](../../../../../reference/runtime/sand-eval-runner.cjs#L306140-L306146) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:621786

Chamadas escritas diretamente neste corpo: `turnMessageToString`.

Alvos de atribuição ou incremento: `total`.

SHA-256 do trecho: `966eaee92c11ab6e2f6421ddf182702ee71e507cf3a193df0f1669172f190e22`.

### evaluation:306140

Chamadas escritas diretamente neste corpo: `turnMessageToString`.

Alvos de atribuição ou incremento: `total`.

SHA-256 do trecho: `52e8ae8dfd8cda7f44bae906fcf26928930691811f3bf7b790147465972d45ba`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
