# `playwrightToolDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750632-750638](../../../../../../../reference/runtime/host-main.cjs#L750632-L750638) | `FunctionDeclaration` | não | `row, arms` |
| [evaluation:523483-523489](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523483-L523489) | `FunctionDeclaration` | não | `row, arms` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750632-750638](../../../../../../../reference/runtime/host-main.cjs#L750632-L750638) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523483-523489](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523483-L523489) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:750632

Chamadas escritas diretamente neste corpo: `RUN_CODE_PRIMARY_ROWS.has`, `baseToolDescription`.

SHA-256 do trecho: `c61e2bfc039b7a0473985412cd52e0ab7bac254296663b11dccd36a580e312a4`.

### evaluation:523483

Chamadas escritas diretamente neste corpo: `RUN_CODE_PRIMARY_ROWS.has`, `baseToolDescription`.

SHA-256 do trecho: `c61e2bfc039b7a0473985412cd52e0ab7bac254296663b11dccd36a580e312a4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
