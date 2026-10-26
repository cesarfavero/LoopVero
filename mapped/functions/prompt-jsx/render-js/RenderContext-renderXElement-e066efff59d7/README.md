# `RenderContext.renderXElement`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629295-629312](../../../../../reference/runtime/host-main.cjs#L629295-L629312) | `method` | não | `props` |
| [evaluation:318312-318329](../../../../../reference/runtime/sand-eval-runner.cjs#L318312-L318329) | `method` | não | `props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629295-629312](../../../../../reference/runtime/host-main.cjs#L629295-L629312) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:318312-318329](../../../../../reference/runtime/sand-eval-runner.cjs#L318312-L318329) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:629295

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.map`, `Object.keys`, `content.trim`, `this.renderContent`.

SHA-256 do trecho: `63f2b73153d9672bf591074a86e05229deaaa7a9d0ec64b96778edc3616d8c55`.

### evaluation:318312

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.map`, `Object.keys`, `content.trim`, `this.renderContent`.

SHA-256 do trecho: `d1b5d1726c658fc3ef43945841a35b40e4d43d5ad4968b08691e3bcd9b586676`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
