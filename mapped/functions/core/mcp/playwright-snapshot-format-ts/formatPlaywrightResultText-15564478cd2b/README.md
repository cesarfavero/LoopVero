# `formatPlaywrightResultText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742891-742917](../../../../../../reference/runtime/host-main.cjs#L742891-L742917) | `FunctionDeclaration` | não | `text3` |
| [evaluation:515553-515579](../../../../../../reference/runtime/sand-eval-runner.cjs#L515553-L515579) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742891-742917](../../../../../../reference/runtime/host-main.cjs#L742891-L742917) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:515553-515579](../../../../../../reference/runtime/sand-eval-runner.cjs#L515553-L515579) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:742891

Chamadas escritas diretamente neste corpo: `ELISION_LINE.test`, `FENCE.test`, `SECTION_HEADING.test`, `TREE_LINE.test`, `flush`, `originOf`, `out.join`, `out.push`, `run.push`, `text3.includes`, `text3.split`.

Alvos de atribuição ou incremento: `inTreeSection`.

SHA-256 do trecho: `c3ec0dde316cc46060bc6863e37397c939d2a25757466f4b07aacffd823a0e38`.

### evaluation:515553

Chamadas escritas diretamente neste corpo: `ELISION_LINE.test`, `FENCE.test`, `SECTION_HEADING.test`, `TREE_LINE.test`, `flush`, `originOf`, `out.join`, `out.push`, `run.push`, `text3.includes`, `text3.split`.

Alvos de atribuição ou incremento: `inTreeSection`.

SHA-256 do trecho: `c3ec0dde316cc46060bc6863e37397c939d2a25757466f4b07aacffd823a0e38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
