# `sha256Hex2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/image-resizing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617471-617474](../../../../../../reference/runtime/host-main.cjs#L617471-L617474) | `FunctionDeclaration` | sim | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617471-617474](../../../../../../reference/runtime/host-main.cjs#L617471-L617474) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:617471

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `crypto.subtle.digest`, `new Uint8Array`.

SHA-256 do trecho: `04022614f651124d42973191c4ef95af4644e8159774e7088c6f3eb95cefb887`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
