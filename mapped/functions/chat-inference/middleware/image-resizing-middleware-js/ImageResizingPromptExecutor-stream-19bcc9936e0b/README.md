# `ImageResizingPromptExecutor.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/image-resizing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617690-617721](../../../../../../reference/runtime/host-main.cjs#L617690-L617721) | `method` | não | `ctx, invocationId, tools, options2` |
| [evaluation:287061-287092](../../../../../../reference/runtime/sand-eval-runner.cjs#L287061-L287092) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617690-617721](../../../../../../reference/runtime/host-main.cjs#L617690-L617721) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:287061-287092](../../../../../../reference/runtime/sand-eval-runner.cjs#L287061-L287092) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617690

Chamadas escritas diretamente neste corpo: `forward`, `processAndStream`, `this.innerExecutor.getMessages`.

SHA-256 do trecho: `e7a858692901ac7f0edec8b278b325453eb1e9b6d75c927d1b8061523a411e6e`.

### evaluation:287061

Chamadas escritas diretamente neste corpo: `forward`, `processAndStream`, `this.innerExecutor.getMessages`.

SHA-256 do trecho: `a3dfbaa0061535ad9878120bdf6c12aa7a392c7179779ef231f8e878368dde1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
