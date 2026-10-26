# `RenderContext.renderToMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:628997-629014](../../../../../reference/runtime/host-main.cjs#L628997-L629014) | `method` | não | `node2` |
| [evaluation:318014-318031](../../../../../reference/runtime/sand-eval-runner.cjs#L318014-L318031) | `method` | não | `node2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:628997-629014](../../../../../reference/runtime/host-main.cjs#L628997-L629014) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:318014-318031](../../../../../reference/runtime/sand-eval-runner.cjs#L318014-L318031) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:628997

Chamadas escritas diretamente neste corpo: `Array.isArray`, `String`, `node2.flatMap`, `this.renderElement`.

SHA-256 do trecho: `8fab85682e1351eed74a5491b149a8826af5c997e2a65772fec3df0e6748d655`.

### evaluation:318014

Chamadas escritas diretamente neste corpo: `Array.isArray`, `String`, `node2.flatMap`, `this.renderElement`.

SHA-256 do trecho: `8fab85682e1351eed74a5491b149a8826af5c997e2a65772fec3df0e6748d655`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
