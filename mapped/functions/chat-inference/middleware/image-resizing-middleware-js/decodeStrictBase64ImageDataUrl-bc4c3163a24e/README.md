# `decodeStrictBase64ImageDataUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/image-resizing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617418-617440](../../../../../../reference/runtime/host-main.cjs#L617418-L617440) | `FunctionDeclaration` | não | `value` |
| [evaluation:286789-286811](../../../../../../reference/runtime/sand-eval-runner.cjs#L286789-L286811) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617418-617440](../../../../../../reference/runtime/host-main.cjs#L617418-L617440) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:286789-286811](../../../../../../reference/runtime/sand-eval-runner.cjs#L286789-L286811) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:617418

Chamadas escritas diretamente neste corpo: `Buffer.from`, `STRICT_IMAGE_MIME.test`, `data2.toString`, `header.endsWith`, `header.slice`, `value.indexOf`, `value.slice`, `value.startsWith`.

SHA-256 do trecho: `b75b3ca2ab55bde8ce2f4f8ff11c8bb94fc59a353c105aabaa8885e97267a472`.

### evaluation:286789

Chamadas escritas diretamente neste corpo: `Buffer.from`, `STRICT_IMAGE_MIME.test`, `data2.toString`, `header.endsWith`, `header.slice`, `value.indexOf`, `value.slice`, `value.startsWith`.

SHA-256 do trecho: `b75b3ca2ab55bde8ce2f4f8ff11c8bb94fc59a353c105aabaa8885e97267a472`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
