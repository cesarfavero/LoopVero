# `needsContinuationMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/continuation-injector-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/continuation-injector-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617383-617389](../../../../../../reference/runtime/host-main.cjs#L617383-L617389) | `FunctionDeclaration` | não | `messages2` |
| [evaluation:286085-286091](../../../../../../reference/runtime/sand-eval-runner.cjs#L286085-L286091) | `FunctionDeclaration` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617383-617389](../../../../../../reference/runtime/host-main.cjs#L617383-L617389) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:286085-286091](../../../../../../reference/runtime/sand-eval-runner.cjs#L286085-L286091) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:617383

Chamadas escritas diretamente neste corpo: `isEmptyAssistantMessage`.

SHA-256 do trecho: `e938d652a36182d01290864246c8037ceaf46855f697c8c34895fadda29cf458`.

### evaluation:286085

Chamadas escritas diretamente neste corpo: `isEmptyAssistantMessage`.

SHA-256 do trecho: `28580c413682cf5940253289295d468c97ba9ac270a736b786a038322a8acce3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
