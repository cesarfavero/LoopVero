# `readPluginSkillsCache`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/plugin-skills-cache.ts` · [README do módulo](../../../../../modules/host/skills/plugin-skills-cache-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684299-684319](../../../../../../reference/runtime/host-main.cjs#L684299-L684319) | `FunctionDeclaration` | não | `cacheDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684299-684319](../../../../../../reference/runtime/host-main.cjs#L684299-L684319) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:684299

Chamadas escritas diretamente neste corpo: `.map`, `Array.isArray`, `JSON.parse`, `Number.isFinite`, `getPluginSkillsCachePath`, `getPluginsRootDir`, `parsed2.authBlocked.every`, `parsed2.installFolders.filter`, `parsed2.skills.every`, `parsed2.skills.filter`, `positiveIdOrNull`, `readHostOwnedFileSync`, `reportFallbackUnlessAbsent`.

SHA-256 do trecho: `cc867b39be25546bce7df6a82a1d12f4fe0254b1ab5ef9eca873ce3afeb4563c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
