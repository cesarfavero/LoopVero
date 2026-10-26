# `withoutDeniedCommand`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750681-750687](../../../../../../../reference/runtime/host-main.cjs#L750681-L750687) | `FunctionDeclaration` | não | `result` |
| [evaluation:523532-523538](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523532-L523538) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750681-750687](../../../../../../../reference/runtime/host-main.cjs#L750681-L750687) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523532-523538](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523532-L523538) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750681

Chamadas escritas diretamente neste corpo: `brandLiteralEnum`, `reportedDeniedCommand`, `withoutStructuredField`.

SHA-256 do trecho: `caa3563862f5c6292efbe66e85554654d522ca29469d03952eb7aa7993b6f9ed`.

### evaluation:523532

Chamadas escritas diretamente neste corpo: `brandLiteralEnum`, `reportedDeniedCommand`, `withoutStructuredField`.

SHA-256 do trecho: `caa3563862f5c6292efbe66e85554654d522ca29469d03952eb7aa7993b6f9ed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
