# `FileSkillStore.listAllFrom`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-store.ts` · [README do módulo](../../../../../modules/host/skills/skill-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721039-721048](../../../../../../reference/runtime/host-main.cjs#L721039-L721048) | `method` | não | `{ definitionsOnly }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721039-721048](../../../../../../reference/runtime/host-main.cjs#L721039-L721048) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:721039

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `managed.map`, `new Set`, `records2.map`, `this.automations.list`, `this.automations.listDefinitions`, `this.library.list`, `this.managedSkills`, `this.pluginSkills`.

SHA-256 do trecho: `37ab83abdcafd13882fb8dc21c00c3989e1736b7fb8b74dc45524ed0d0768f8e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
