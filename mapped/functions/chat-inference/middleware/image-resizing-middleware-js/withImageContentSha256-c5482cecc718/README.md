# `withImageContentSha256`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/image-resizing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617475-617487](../../../../../../reference/runtime/host-main.cjs#L617475-L617487) | `FunctionDeclaration` | sim | `part, originalBytes` |
| [evaluation:286846-286858](../../../../../../reference/runtime/sand-eval-runner.cjs#L286846-L286858) | `FunctionDeclaration` | sim | `part, originalBytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617475-617487](../../../../../../reference/runtime/host-main.cjs#L617475-L617487) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:286846-286858](../../../../../../reference/runtime/sand-eval-runner.cjs#L286846-L286858) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:617475

Chamadas escritas diretamente neste corpo: `sha256Hex2`.

SHA-256 do trecho: `d0601c325f0a22fde4e22e310b6124222030fecf27968cb0fc5a89c07de56167`.

### evaluation:286846

Chamadas escritas diretamente neste corpo: `sha256Hex`.

SHA-256 do trecho: `45521ac5f81d1c4d5ea263e7c3bc4d86f65ab6fea0d7015296f82d8fb4e4e671`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
