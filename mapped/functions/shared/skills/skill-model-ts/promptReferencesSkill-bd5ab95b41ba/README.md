# `promptReferencesSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683228-683230](../../../../../../reference/runtime/host-main.cjs#L683228-L683230) | `FunctionDeclaration` | não | `prompt, skill` |
| [evaluation:534264-534266](../../../../../../reference/runtime/sand-eval-runner.cjs#L534264-L534266) | `FunctionDeclaration` | não | `prompt, skill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683228-683230](../../../../../../reference/runtime/host-main.cjs#L683228-L683230) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534264-534266](../../../../../../reference/runtime/sand-eval-runner.cjs#L534264-L534266) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:683228

Chamadas escritas diretamente neste corpo: `collectMentionedSkills`.

SHA-256 do trecho: `826b2e226d2033d3161f7e26c04abf43b09acdd24b1bc50aa6ab627962225c80`.

### evaluation:534264

Chamadas escritas diretamente neste corpo: `collectMentionedSkills`.

SHA-256 do trecho: `826b2e226d2033d3161f7e26c04abf43b09acdd24b1bc50aa6ab627962225c80`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
