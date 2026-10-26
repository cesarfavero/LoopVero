# `reviewSandComputerAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777410-777416](../../../../../../../reference/runtime/host-main.cjs#L777410-L777416) | `FunctionDeclaration` | sim | `resourceAccessor, config2, args` |
| [evaluation:577055-577061](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577055-L577061) | `FunctionDeclaration` | sim | `resourceAccessor, config2, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777410-777416](../../../../../../../reference/runtime/host-main.cjs#L777410-L777416) | 0 | 0 | 1 | 0 | 0 | 0 |
| [evaluation:577055-577061](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577055-L577061) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:777410

Chamadas escritas diretamente neste corpo: `computerAutoReviewOptions`, `runSandComputerAutoReviewPreflight`.

SHA-256 do trecho: `5fdd6e9325adf930bf95235cf9862b4e0734edd860ca2dca9b74ceba58d36b69`.

### evaluation:577055

Chamadas escritas diretamente neste corpo: `computerAutoReviewOptions`, `runSandComputerAutoReviewPreflight`.

SHA-256 do trecho: `5fdd6e9325adf930bf95235cf9862b4e0734edd860ca2dca9b74ceba58d36b69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
