# `BaseMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/base.js` · [README do módulo](../../../../modules/chat-inference/base-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617365-617367](../../../../../reference/runtime/host-main.cjs#L617365-L617367) | `method` | não | `ctx, invocationId, tools, options2` |
| [evaluation:286067-286069](../../../../../reference/runtime/sand-eval-runner.cjs#L286067-L286069) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617365-617367](../../../../../reference/runtime/host-main.cjs#L617365-L617367) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:286067-286069](../../../../../reference/runtime/sand-eval-runner.cjs#L286067-L286069) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617365

Chamadas escritas diretamente neste corpo: `this.innerExecutor.stream`.

SHA-256 do trecho: `d0909eb495ff78110e0dff301daa7857ec0b9633bbc7cb7796d50224f238cf3a`.

### evaluation:286067

Chamadas escritas diretamente neste corpo: `this.innerExecutor.stream`.

SHA-256 do trecho: `d0909eb495ff78110e0dff301daa7857ec0b9633bbc7cb7796d50224f238cf3a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
