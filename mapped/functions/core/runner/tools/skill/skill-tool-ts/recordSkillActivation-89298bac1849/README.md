# `recordSkillActivation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:565915-565931](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565915-L565931) | `FunctionDeclaration` | sim | `ctx, deps, skill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565915-565931](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565915-L565931) | 0 | 0 | 2 | 0 | 0 | 0 |

### evaluation:565915

Chamadas escritas diretamente neste corpo: `.catch`, `.trackSkillUsed`, `getAgentEventTracker`, `getSkillSourceFromPath`, `recordSkillApplied`, `resolveCurrentTurnUserMessageText`, `skillToolName`, `toModelVisibleText`.

SHA-256 do trecho: `956956f924680b5a898df05088f4380d31bfe0f2a093a859c93bcbd50d285ae8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
