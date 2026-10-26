# `renderTeamBotSkillsSystemPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534321-534325](../../../../../../reference/runtime/sand-eval-runner.cjs#L534321-L534325) | `FunctionDeclaration` | não | `location, options2, copy` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534321-534325](../../../../../../reference/runtime/sand-eval-runner.cjs#L534321-L534325) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534321

Chamadas escritas diretamente neste corpo: `.join`, `copy.storeServedFileLines`, `skillsCatalogPrefix`, `teamBotSkillFileAuthoringLines`, `teamBotSkillsLocationLine`.

SHA-256 do trecho: `499522d59dc22eb3f6ace6a5b76b7e5a4462ac9a8cbf17509d5110aa6193d958`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
