# `botSkillMatchesLooseId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `core/skills/bot-skill-writes.ts` · [README do módulo](../../../../../modules/core/skills/bot-skill-writes-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762038-762045](../../../../../../reference/runtime/host-main.cjs#L762038-L762045) | `FunctionDeclaration` | não | `skill, id` |
| [evaluation:554616-554623](../../../../../../reference/runtime/sand-eval-runner.cjs#L554616-L554623) | `FunctionDeclaration` | não | `skill, id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762038-762045](../../../../../../reference/runtime/host-main.cjs#L762038-L762045) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:554616-554623](../../../../../../reference/runtime/sand-eval-runner.cjs#L554616-L554623) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:762038

Chamadas escritas diretamente neste corpo: `botSkillSlugFromPath`, `folder.endsWith`, `id.trim`, `slugifySkillName`, `stripSkillFile`.

SHA-256 do trecho: `6c138d3f125a1982c5256d7526eebefc42be4e474f853391055e3ef169ef3e94`.

### evaluation:554616

Chamadas escritas diretamente neste corpo: `botSkillSlugFromPath`, `folder.endsWith`, `id.trim`, `slugifySkillName`, `stripSkillFile`.

SHA-256 do trecho: `6c138d3f125a1982c5256d7526eebefc42be4e474f853391055e3ef169ef3e94`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
