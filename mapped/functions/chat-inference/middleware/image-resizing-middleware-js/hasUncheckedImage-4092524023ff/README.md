# `hasUncheckedImage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/image-resizing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617674-617682](../../../../../../reference/runtime/host-main.cjs#L617674-L617682) | `FunctionDeclaration` | não | `message, checkedImageParts` |
| [evaluation:287045-287053](../../../../../../reference/runtime/sand-eval-runner.cjs#L287045-L287053) | `FunctionDeclaration` | não | `message, checkedImageParts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617674-617682](../../../../../../reference/runtime/host-main.cjs#L617674-L617682) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:287045-287053](../../../../../../reference/runtime/sand-eval-runner.cjs#L287045-L287053) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:617674

Chamadas escritas diretamente neste corpo: `Array.isArray`, `message.content.some`.

SHA-256 do trecho: `803b3c392716197656c2c49c51af15fcd528ae5dce0fc4932a6a4b75cd78dbc8`.

### evaluation:287045

Chamadas escritas diretamente neste corpo: `Array.isArray`, `message.content.some`.

SHA-256 do trecho: `803b3c392716197656c2c49c51af15fcd528ae5dce0fc4932a6a4b75cd78dbc8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
