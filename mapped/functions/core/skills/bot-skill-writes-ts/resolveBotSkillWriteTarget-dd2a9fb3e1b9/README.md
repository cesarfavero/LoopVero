# `resolveBotSkillWriteTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `core/skills/bot-skill-writes.ts` · [README do módulo](../../../../../modules/core/skills/bot-skill-writes-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762046-762065](../../../../../../reference/runtime/host-main.cjs#L762046-L762065) | `FunctionDeclaration` | não | `store, id` |
| [evaluation:554624-554643](../../../../../../reference/runtime/sand-eval-runner.cjs#L554624-L554643) | `FunctionDeclaration` | não | `store, id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762046-762065](../../../../../../reference/runtime/host-main.cjs#L762046-L762065) | 7 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:554624-554643](../../../../../../reference/runtime/sand-eval-runner.cjs#L554624-L554643) | 7 | 0 | 0 | 5 | 0 | 0 |

### host:762046

Chamadas escritas diretamente neste corpo: `id.trim`, `isBotSkillsPluginSkill`, `skills.find`, `store.list`, `stripSkillFile`.

SHA-256 do trecho: `40a40a6ced257a0437b0494cc606f2aef8e3953ed6c5215d5b76825453fde3ce`.

### evaluation:554624

Chamadas escritas diretamente neste corpo: `id.trim`, `isBotSkillsPluginSkill`, `skills.find`, `store.list`, `stripSkillFile`.

SHA-256 do trecho: `40a40a6ced257a0437b0494cc606f2aef8e3953ed6c5215d5b76825453fde3ce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
