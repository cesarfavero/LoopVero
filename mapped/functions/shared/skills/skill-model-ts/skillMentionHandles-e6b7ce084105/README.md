# `skillMentionHandles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683164-683174](../../../../../../reference/runtime/host-main.cjs#L683164-L683174) | `FunctionDeclaration` | não | `skill` |
| [evaluation:534200-534210](../../../../../../reference/runtime/sand-eval-runner.cjs#L534200-L534210) | `FunctionDeclaration` | não | `skill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683164-683174](../../../../../../reference/runtime/host-main.cjs#L683164-L683174) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534200-534210](../../../../../../reference/runtime/sand-eval-runner.cjs#L534200-L534210) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:683164

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `handles.add`, `name18.replace`, `new Set`, `skill.id.trim`, `skill.name.trim`.

SHA-256 do trecho: `d70da42b8d1bdd423728bb5b40e17258f9fb558eda115e1c89daddebe319ccce`.

### evaluation:534200

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `handles.add`, `name18.replace`, `new Set`, `skill.id.trim`, `skill.name.trim`.

SHA-256 do trecho: `d70da42b8d1bdd423728bb5b40e17258f9fb558eda115e1c89daddebe319ccce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
