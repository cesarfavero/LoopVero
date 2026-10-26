# `RenderContext.flattenNodes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629250-629280](../../../../../reference/runtime/host-main.cjs#L629250-L629280) | `method` | não | `nodes` |
| [evaluation:318267-318297](../../../../../reference/runtime/sand-eval-runner.cjs#L318267-L318297) | `method` | não | `nodes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629250-629280](../../../../../reference/runtime/host-main.cjs#L629250-L629280) | 9 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:318267-318297](../../../../../reference/runtime/sand-eval-runner.cjs#L318267-L318297) | 9 | 1 | 0 | 1 | 0 | 0 |

### host:629250

Chamadas escritas diretamente neste corpo: `Array.isArray`, `element.type`, `result.push`, `this.flattenNodes`.

SHA-256 do trecho: `c94728b5b83abf3f4a877301137412c695e8fceb9915b83d6dd7b1fd1f8787c8`.

### evaluation:318267

Chamadas escritas diretamente neste corpo: `Array.isArray`, `element.type`, `result.push`, `this.flattenNodes`.

SHA-256 do trecho: `c94728b5b83abf3f4a877301137412c695e8fceb9915b83d6dd7b1fd1f8787c8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
