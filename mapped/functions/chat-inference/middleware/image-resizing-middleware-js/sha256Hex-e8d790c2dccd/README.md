# `sha256Hex`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/image-resizing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:286842-286845](../../../../../../reference/runtime/sand-eval-runner.cjs#L286842-L286845) | `FunctionDeclaration` | sim | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:286842-286845](../../../../../../reference/runtime/sand-eval-runner.cjs#L286842-L286845) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:286842

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `crypto.subtle.digest`, `new Uint8Array`.

SHA-256 do trecho: `9d9028795a1e1e0dd1ba2307b62ed80d57a287968763120550efbfe14e86a16a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
