# `BaseMiddleware.getMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/base.js` · [README do módulo](../../../../modules/chat-inference/base-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617359-617361](../../../../../reference/runtime/host-main.cjs#L617359-L617361) | `method` | não | `(nenhum)` |
| [evaluation:286061-286063](../../../../../reference/runtime/sand-eval-runner.cjs#L286061-L286063) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617359-617361](../../../../../reference/runtime/host-main.cjs#L617359-L617361) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:286061-286063](../../../../../reference/runtime/sand-eval-runner.cjs#L286061-L286063) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617359

Chamadas escritas diretamente neste corpo: `this.innerExecutor.getMessages`.

SHA-256 do trecho: `1eac1efb65840a31991cea9620324ee20095efdb8f8be23271738c77ac537935`.

### evaluation:286061

Chamadas escritas diretamente neste corpo: `this.innerExecutor.getMessages`.

SHA-256 do trecho: `1eac1efb65840a31991cea9620324ee20095efdb8f8be23271738c77ac537935`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
