# `wasImagePartChecked`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/image-resizing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617488-617488](../../../../../../reference/runtime/host-main.cjs#L617488-L617488) | `ArrowFunctionExpression` | não | `{ checkedImageParts, part, payload }` |
| [evaluation:286859-286859](../../../../../../reference/runtime/sand-eval-runner.cjs#L286859-L286859) | `ArrowFunctionExpression` | não | `{ checkedImageParts, part, payload }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617488-617488](../../../../../../reference/runtime/host-main.cjs#L617488-L617488) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:617488 usa retorno implícito de arrow function.
| [evaluation:286859-286859](../../../../../../reference/runtime/sand-eval-runner.cjs#L286859-L286859) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:286859 usa retorno implícito de arrow function.

### host:617488

Chamadas escritas diretamente neste corpo: `checkedImageParts.get`, `checkedImageParts.has`.

SHA-256 do trecho: `adeabb209fd17055db4b2b713977029adac1798be5e7f66375a69b3f86140088`.

### evaluation:286859

Chamadas escritas diretamente neste corpo: `checkedImageParts.get`, `checkedImageParts.has`.

SHA-256 do trecho: `adeabb209fd17055db4b2b713977029adac1798be5e7f66375a69b3f86140088`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
