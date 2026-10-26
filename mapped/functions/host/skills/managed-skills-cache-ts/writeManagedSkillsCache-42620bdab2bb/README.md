# `writeManagedSkillsCache`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/managed-skills-cache.ts` · [README do módulo](../../../../../modules/host/skills/managed-skills-cache-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683305-683317](../../../../../../reference/runtime/host-main.cjs#L683305-L683317) | `FunctionDeclaration` | não | `cacheDir, skills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683305-683317](../../../../../../reference/runtime/host-main.cjs#L683305-L683317) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:683305

Chamadas escritas diretamente neste corpo: `Date.now`, `JSON.stringify`, `ensureSandDataDirSync`, `getManagedSkillsCachePath`, `materializeManagedSkillFiles`, `writeSandDataFileSync`.

SHA-256 do trecho: `791d49372c8e5ce92bc0780a87f2f408e89ca938045e87ca939153e212b4f8a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
