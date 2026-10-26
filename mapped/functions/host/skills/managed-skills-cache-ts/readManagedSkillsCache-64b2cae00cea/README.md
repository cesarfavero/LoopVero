# `readManagedSkillsCache`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/managed-skills-cache.ts` · [README do módulo](../../../../../modules/host/skills/managed-skills-cache-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683291-683304](../../../../../../reference/runtime/host-main.cjs#L683291-L683304) | `FunctionDeclaration` | não | `cacheDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683291-683304](../../../../../../reference/runtime/host-main.cjs#L683291-L683304) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:683291

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `Number.isFinite`, `getManagedSkillsCachePath`, `parsed2.skills.every`, `readHostOwnedFileSync`, `reportFallbackUnlessAbsent`.

SHA-256 do trecho: `ecff5f0a198da617c08a45fac5e092c79aa8ee805945714a47bd6479d9119e54`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
