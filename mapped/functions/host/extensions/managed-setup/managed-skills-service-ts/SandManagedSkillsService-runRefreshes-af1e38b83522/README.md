# `SandManagedSkillsService.runRefreshes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/managed-setup/managed-skills-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-skills-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684016-684040](../../../../../../../reference/runtime/host-main.cjs#L684016-L684040) | `method` | sim | `trigger2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684016-684040](../../../../../../../reference/runtime/host-main.cjs#L684016-L684040) | 2 | 2 | 1 | 1 | 0 | 1 |

### host:684016

Chamadas escritas diretamente neste corpo: `errorLogTag`, `fetchedManagedSkillToSandSkill`, `skills.push`, `this.options.fetch`, `this.options.getCacheDir`, `this.options.report`, `writeManagedSkillsCache`.

Alvos de atribuição ou incremento: `nextTrigger`, `this.pendingTrigger`.

SHA-256 do trecho: `3c3cfc016fa68d53f87d83ccfd0f7d4bfc6932ed30017f53bfecdc49c9433e80`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
