# `selectUserDeliveryTail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/delivery-tail.js` · [README do módulo](../../../../modules/agent-summarization/delivery-tail-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621893-621934](../../../../../reference/runtime/host-main.cjs#L621893-L621934) | `FunctionDeclaration` | não | `messages2, options2` |
| [evaluation:306247-306288](../../../../../reference/runtime/sand-eval-runner.cjs#L306247-L306288) | `FunctionDeclaration` | não | `messages, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621893-621934](../../../../../reference/runtime/host-main.cjs#L621893-L621934) | 6 | 3 | 0 | 2 | 0 | 0 |
| [evaluation:306247-306288](../../../../../reference/runtime/sand-eval-runner.cjs#L306247-L306288) | 6 | 3 | 0 | 2 | 0 | 0 |

### host:621893

Chamadas escritas diretamente neste corpo: `Array.isArray`, `answeredDeliveryCalls.slice`, `keptCalls.map`, `message.content.filter`, `new Map`, `results.map`, `resultsByCallId.has`, `resultsByCallId.set`, `selected.unshift`.

Alvos de atribuição ou incremento: `i`, `remaining`.

SHA-256 do trecho: `b29ce67f4b0ed9b1c9837e75f06f23bcaeb718a4a2cc44cbdd6425e69c4ec004`.

### evaluation:306247

Chamadas escritas diretamente neste corpo: `Array.isArray`, `answeredDeliveryCalls.slice`, `keptCalls.map`, `message.content.filter`, `new Map`, `results.map`, `resultsByCallId.has`, `resultsByCallId.set`, `selected.unshift`.

Alvos de atribuição ou incremento: `i`, `remaining`.

SHA-256 do trecho: `dc0ee2c439c5f4e827452095503dd1b8d4352eca43b649da7340bfc0328694db`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
