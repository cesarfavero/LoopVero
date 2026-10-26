# `resizeImagesInMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/image-resizing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617668-617673](../../../../../../reference/runtime/host-main.cjs#L617668-L617673) | `FunctionDeclaration` | sim | `{ ctx, messages: messages2, resizeOptions, checkedImageParts }` |
| [evaluation:287039-287044](../../../../../../reference/runtime/sand-eval-runner.cjs#L287039-L287044) | `FunctionDeclaration` | sim | `{ ctx, messages, resizeOptions, checkedImageParts }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617668-617673](../../../../../../reference/runtime/host-main.cjs#L617668-L617673) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:287039-287044](../../../../../../reference/runtime/sand-eval-runner.cjs#L287039-L287044) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:617668

Chamadas escritas diretamente neste corpo: `asyncMapValues`, `messages2.some`.

SHA-256 do trecho: `7fe9886433bead8ad8f04fba4fa4e2c4081e4be285615c865eb5feaa91827033`.

### evaluation:287039

Chamadas escritas diretamente neste corpo: `asyncMapValues`, `messages.some`.

SHA-256 do trecho: `6b468c7fda1d164508acc98762b66b7c81adfe582d4ed16297ce5bb87c6c8380`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
