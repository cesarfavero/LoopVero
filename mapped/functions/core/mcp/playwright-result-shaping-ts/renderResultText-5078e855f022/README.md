# `renderResultText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-result-shaping.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-result-shaping-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585083-585086](../../../../../../reference/runtime/sand-eval-runner.cjs#L585083-L585086) | `FunctionDeclaration` | não | `{ preamble, sections }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585083-585086](../../../../../../reference/runtime/sand-eval-runner.cjs#L585083-L585086) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585083

Chamadas escritas diretamente neste corpo: `.join`, `sections.flatMap`.

SHA-256 do trecho: `c7021a4d88fccdb97d758aa045e40533d218d5a80a4a4ab53bcfcb60be637fa0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
