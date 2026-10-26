# `textOf2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:523510-523512](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523510-L523512) | `FunctionDeclaration` | não | `success2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:523510-523512](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523510-L523512) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:523510

Chamadas escritas diretamente neste corpo: `.join`, `success2.content.flatMap`.

SHA-256 do trecho: `cf9475a495d62e3dbfe572978033eb279680b8d2126b9ba3a6e64ac750149d22`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
