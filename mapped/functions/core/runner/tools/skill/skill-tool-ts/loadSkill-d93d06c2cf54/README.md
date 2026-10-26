# `loadSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:565952-565967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565952-L565967) | `FunctionDeclaration` | sim | `ctx, deps, requested` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565952-565967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565952-L565967) | 3 | 0 | 1 | 1 | 2 | 0 |

### evaluation:565952

Chamadas escritas diretamente neste corpo: `ambiguousSkillMessage`, `countLoad`, `deps.skills`, `loadResolvedSkill`, `missingSkillMessage`, `modelInvocableSkills`, `new SandModelVisibleError`, `requested.trim`, `resolveSkill`.

Alvos de lançamento explícito: `SandModelVisibleError`.

SHA-256 do trecho: `8698394feab36c5365dd4f11a644767c8ccfa61076d5b017f9a2a9fccc89a3ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
