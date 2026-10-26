# `definition`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750613-750631](../../../../../../../reference/runtime/host-main.cjs#L750613-L750631) | `FunctionDeclaration` | não | `row, server, arms` |
| [evaluation:523464-523482](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523464-L523482) | `FunctionDeclaration` | não | `row, server, arms` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750613-750631](../../../../../../../reference/runtime/host-main.cjs#L750613-L750631) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:523464-523482](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523464-L523482) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:750613

Chamadas escritas diretamente neste corpo: `Object.values`, `jsonObjectOf`, `playwrightToolDescription`, `playwrightToolInputSchema`, `property.description.replace`, `waitForSchema`.

Alvos de atribuição ou incremento: `property.description`.

SHA-256 do trecho: `d3717c5af00aebad45fa3c5ed425d88ceef6e836f51a30fa9b9bade711990f65`.

### evaluation:523464

Chamadas escritas diretamente neste corpo: `Object.values`, `jsonObjectOf`, `playwrightToolDescription`, `playwrightToolInputSchema`, `property.description.replace`, `waitForSchema`.

Alvos de atribuição ou incremento: `property.description`.

SHA-256 do trecho: `d3717c5af00aebad45fa3c5ed425d88ceef6e836f51a30fa9b9bade711990f65`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
