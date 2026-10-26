# `playwrightRunCodeResultErrorClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:514066-514073](../../../../../../reference/runtime/sand-eval-runner.cjs#L514066-L514073) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:514066-514073](../../../../../../reference/runtime/sand-eval-runner.cjs#L514066-L514073) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:514066

Chamadas escritas diretamente neste corpo: `.join`, `playwrightRunCodeErrorClass`, `success2.content.flatMap`.

SHA-256 do trecho: `50f34ccdbbb95809bb1c6c67773a0f1d0aa0536acd46d08aa2f1cfc1eb463f21`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
