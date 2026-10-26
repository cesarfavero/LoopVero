# `renderSkillsSystemPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534326-534338](../../../../../../reference/runtime/sand-eval-runner.cjs#L534326-L534338) | `FunctionDeclaration` | não | `location, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534326-534338](../../../../../../reference/runtime/sand-eval-runner.cjs#L534326-L534338) | 7 | 0 | 0 | 4 | 0 | 0 |

### evaluation:534326

Chamadas escritas diretamente neste corpo: `.join`, `copy.storeServedFileLines`, `renderTeamBotSkillsSystemPrompt`, `skillsCatalogStoreServedLine`, `skillsLocationLine`.

SHA-256 do trecho: `46796ad8f5fb0a20617cdc58a82fec6f5ac766eaf6e7a99113a4ba77a95f4a6b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
