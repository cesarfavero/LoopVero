# `RenderContext.renderElement`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629018-629027](../../../../../reference/runtime/host-main.cjs#L629018-L629027) | `method` | não | `element` |
| [evaluation:318035-318044](../../../../../reference/runtime/sand-eval-runner.cjs#L318035-L318044) | `method` | não | `element` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629018-629027](../../../../../reference/runtime/host-main.cjs#L629018-L629027) | 2 | 0 | 0 | 2 | 1 | 0 |
| [evaluation:318035-318044](../../../../../reference/runtime/sand-eval-runner.cjs#L318035-L318044) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:629018

Chamadas escritas diretamente neste corpo: `element.type`, `new Error`, `this.renderIntrinsicElement`, `this.renderToMessages`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `47dfe33b5fabc178adf3d12f2ca9ea214ae1489b4486190a1ab24be3bafe60c9`.

### evaluation:318035

Chamadas escritas diretamente neste corpo: `element.type`, `new Error`, `this.renderIntrinsicElement`, `this.renderToMessages`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `47dfe33b5fabc178adf3d12f2ca9ea214ae1489b4486190a1ab24be3bafe60c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
