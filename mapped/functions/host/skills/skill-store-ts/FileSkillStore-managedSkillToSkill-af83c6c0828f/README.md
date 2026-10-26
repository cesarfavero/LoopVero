# `FileSkillStore.managedSkillToSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-store.ts` · [README do módulo](../../../../../modules/host/skills/skill-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720950-720977](../../../../../../reference/runtime/host-main.cjs#L720950-L720977) | `method` | não | `skill, fetchedAt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720950-720977](../../../../../../reference/runtime/host-main.cjs#L720950-L720977) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:720950

Chamadas escritas diretamente neste corpo: `.isFile`, `getManagedSkillFilePath`, `getManagedSkillsCachePath`, `reportFallbackUnlessAbsent`.

Alvos de atribuição ou incremento: `hasSkillFile`.

SHA-256 do trecho: `71b543040d0a52a3569a499ccd3fc3c082ce70fb52f69726f40e684651f96d62`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
