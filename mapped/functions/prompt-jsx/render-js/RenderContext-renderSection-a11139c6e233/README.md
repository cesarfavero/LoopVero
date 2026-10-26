# `RenderContext.renderSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629317-629336](../../../../../reference/runtime/host-main.cjs#L629317-L629336) | `method` | não | `props` |
| [evaluation:318334-318353](../../../../../reference/runtime/sand-eval-runner.cjs#L318334-L318353) | `method` | não | `props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629317-629336](../../../../../reference/runtime/host-main.cjs#L629317-L629336) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:318334-318353](../../../../../reference/runtime/sand-eval-runner.cjs#L318334-L318353) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:629317

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.map`, `.replace`, `.toLowerCase`, `Object.keys`, `String`, `content.trim`, `this.renderContent`.

SHA-256 do trecho: `01cd15ec6a064d4941a6036c30c2a44325ff6009f4caf68c1ae2faf6531f8756`.

### evaluation:318334

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.map`, `.replace`, `.toLowerCase`, `Object.keys`, `String`, `content.trim`, `this.renderContent`.

SHA-256 do trecho: `c5ea71894f9cd6b14a06ae8776fbadf492c4a368bb5573ce5aa24ac29d20f594`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
