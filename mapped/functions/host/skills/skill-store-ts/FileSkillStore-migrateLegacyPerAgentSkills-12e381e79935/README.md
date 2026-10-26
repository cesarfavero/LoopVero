# `FileSkillStore.migrateLegacyPerAgentSkills`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-store.ts` · [README do módulo](../../../../../modules/host/skills/skill-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721186-721220](../../../../../../reference/runtime/host-main.cjs#L721186-L721220) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721186-721220](../../../../../../reference/runtime/host-main.cjs#L721186-L721220) | 4 | 1 | 0 | 1 | 0 | 3 |

### host:721186

Chamadas escritas diretamente neste corpo: `entry.isDirectory`, `parseSkillFile`, `readSandDataFileSync`, `removeSandDataTreeSync`, `this.library.getLocation`, `this.library.has`, `this.library.renameLegacyRecipeFiles`, `this.library.writeAt`.

Alvos de atribuição ou incremento: `entries`, `raw`.

SHA-256 do trecho: `81da6ea8a02d7fd4cabea887adc8afa6ec2d14057aa5926aeb435d91f07c09fe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
