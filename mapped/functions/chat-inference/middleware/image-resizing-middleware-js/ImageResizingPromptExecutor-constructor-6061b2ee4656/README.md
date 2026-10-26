# `ImageResizingPromptExecutor.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/image-resizing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617684-617688](../../../../../../reference/runtime/host-main.cjs#L617684-L617688) | `method` | não | `{ innerExecutor, resizeOptions, checkedImageParts }` |
| [evaluation:287055-287059](../../../../../../reference/runtime/sand-eval-runner.cjs#L287055-L287059) | `method` | não | `{ innerExecutor, resizeOptions, checkedImageParts }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617684-617688](../../../../../../reference/runtime/host-main.cjs#L617684-L617688) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:287055-287059](../../../../../../reference/runtime/sand-eval-runner.cjs#L287055-L287059) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:617684

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.checkedImageParts`, `this.resizeOptions`.

SHA-256 do trecho: `c60cd68bd5e2d032d054f8def2b824145e884ec48011ceb85436046492b6ab3e`.

### evaluation:287055

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.checkedImageParts`, `this.resizeOptions`.

SHA-256 do trecho: `c60cd68bd5e2d032d054f8def2b824145e884ec48011ceb85436046492b6ab3e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
