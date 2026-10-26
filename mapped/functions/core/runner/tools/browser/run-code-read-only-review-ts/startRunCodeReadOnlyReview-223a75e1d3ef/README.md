# `startRunCodeReadOnlyReview`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only-review.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750295-750335](../../../../../../../../reference/runtime/host-main.cjs#L750295-L750335) | `FunctionDeclaration` | não | `args` |
| [evaluation:523146-523186](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523146-L523186) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750295-750335](../../../../../../../../reference/runtime/host-main.cjs#L750295-L750335) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523146-523186](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523146-L523186) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:750295

Chamadas escritas diretamente neste corpo: `args.skipGate`, `classifyPlaywrightRunCode`.

SHA-256 do trecho: `e43740c3cc2460f493cd1bbed1341f70de0f73d75a61297d91e4ca85666df1fe`.

### evaluation:523146

Chamadas escritas diretamente neste corpo: `args.skipGate`, `classifyPlaywrightRunCode`.

SHA-256 do trecho: `1dd779faae869e61eeef5d23110491504c3f4935e0f41224d44ace16f19c695c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
