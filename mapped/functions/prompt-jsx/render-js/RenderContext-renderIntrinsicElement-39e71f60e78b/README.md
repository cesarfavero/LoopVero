# `RenderContext.renderIntrinsicElement`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629031-629091](../../../../../reference/runtime/host-main.cjs#L629031-L629091) | `method` | não | `type2, props` |
| [evaluation:318048-318108](../../../../../reference/runtime/sand-eval-runner.cjs#L318048-L318108) | `method` | não | `type2, props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629031-629091](../../../../../reference/runtime/host-main.cjs#L629031-L629091) | 21 | 0 | 0 | 8 | 1 | 0 |
| [evaluation:318048-318108](../../../../../reference/runtime/sand-eval-runner.cjs#L318048-L318108) | 21 | 0 | 0 | 8 | 1 | 0 |

### host:629031

Chamadas escritas diretamente neste corpo: `new Error`, `this.components[computed]`, `this.renderContent`, `this.renderToMessages`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `e8848420ed2096bbe04f034bc047c65ce8ca7026f34c52f0e9eec3ce17fc0b5c`.

### evaluation:318048

Chamadas escritas diretamente neste corpo: `new Error`, `this.components[computed]`, `this.renderContent`, `this.renderToMessages`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `e8848420ed2096bbe04f034bc047c65ce8ca7026f34c52f0e9eec3ce17fc0b5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
