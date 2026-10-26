# `FileSkillStore.updatePluginSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-store.ts` · [README do módulo](../../../../../modules/host/skills/skill-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721135-721155](../../../../../../reference/runtime/host-main.cjs#L721135-L721155) | `method` | não | `id, spec` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721135-721155](../../../../../../reference/runtime/host-main.cjs#L721135-L721155) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:721135

Chamadas escritas diretamente neste corpo: `parseSkillFile`, `readFileWithinSync`, `reportFallbackUnlessAbsent`, `resolveWithinSync`, `serializeSkillFile`, `this.get`, `this.pluginSkillRecord`, `this.pluginSkillsDirWatcher.writeFileAtomic`.

Alvos de atribuição ou incremento: `existing`, `target`.

SHA-256 do trecho: `dd5746e3cb04027bf53fd5ae6d4e94c6f03a83ea53c2a2171a7333e7f27fb90e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
