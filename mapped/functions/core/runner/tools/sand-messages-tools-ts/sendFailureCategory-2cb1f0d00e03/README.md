# `sendFailureCategory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778136-778140](../../../../../../../reference/runtime/host-main.cjs#L778136-L778140) | `FunctionDeclaration` | não | `error64` |
| [evaluation:577871-577875](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577871-L577875) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778136-778140](../../../../../../../reference/runtime/host-main.cjs#L778136-L778140) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577871-577875](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577871-L577875) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:778136

Chamadas escritas diretamente neste corpo: `errorClassOf`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 do trecho: `d109212f14067538c4cfbda29a7babf9fec7ecdc15aa017c1376ecc34c80fe46`.

### evaluation:577871

Chamadas escritas diretamente neste corpo: `errorClassOf`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 do trecho: `ecbbc6ebcceae4015dca3c9008dbc89492ba582032edc0f8697093c03b6c9934`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
