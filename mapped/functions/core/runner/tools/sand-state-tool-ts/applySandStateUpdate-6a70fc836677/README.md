# `applySandStateUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763049-763067](../../../../../../../reference/runtime/host-main.cjs#L763049-L763067) | `FunctionDeclaration` | sim | `args, deps` |
| [evaluation:555659-555677](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555659-L555677) | `FunctionDeclaration` | sim | `args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763049-763067](../../../../../../../reference/runtime/host-main.cjs#L763049-L763067) | 2 | 0 | 1 | 2 | 1 | 0 |
| [evaluation:555659-555677](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555659-L555677) | 2 | 0 | 1 | 2 | 1 | 0 |

### host:763049

Chamadas escritas diretamente neste corpo: `OPERATIONS[computed].join`, `TEAM_SETUP_CARD_ROUTES.has`, `deps.isTeamSetupUnderway`, `isSandStateRoute`, `new SandToolInputError`, `route`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `732f0ff90383ad46a744092cb508bbced2decbd8016fcc9e6af5fcc628e088a2`.

### evaluation:555659

Chamadas escritas diretamente neste corpo: `OPERATIONS[computed].join`, `TEAM_SETUP_CARD_ROUTES.has`, `deps.isTeamSetupUnderway`, `isSandStateRoute`, `new SandToolInputError`, `route`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `732f0ff90383ad46a744092cb508bbced2decbd8016fcc9e6af5fcc628e088a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
