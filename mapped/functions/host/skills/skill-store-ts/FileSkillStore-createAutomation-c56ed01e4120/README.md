# `FileSkillStore.createAutomation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-store.ts` · [README do módulo](../../../../../modules/host/skills/skill-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721085-721097](../../../../../../reference/runtime/host-main.cjs#L721085-L721097) | `method` | não | `spec, provenance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721085-721097](../../../../../../reference/runtime/host-main.cjs#L721085-L721097) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:721085

Chamadas escritas diretamente neste corpo: `automationToSkill`, `cronTrigger`, `this.automations.upsert`.

SHA-256 do trecho: `648b218950704858b0eb411b4c86c66fdcd4a10518005978d805b1968e91a01e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
