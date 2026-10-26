# `materializeManagedSkillFiles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/managed-skills-cache.ts` · [README do módulo](../../../../../modules/host/skills/managed-skills-cache-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683318-683340](../../../../../../reference/runtime/host-main.cjs#L683318-L683340) | `FunctionDeclaration` | não | `cacheDir, skills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683318-683340](../../../../../../reference/runtime/host-main.cjs#L683318-L683340) | 1 | 2 | 0 | 0 | 0 | 0 |

### host:683318

Chamadas escritas diretamente neste corpo: `ensureSandDataDirSync`, `getManagedSkillFilePath`, `keep.has`, `new Set`, `removeSandDataTreeSync`, `serializeSkillFile`, `skills.map`, `writeSandDataFileSync`.

SHA-256 do trecho: `a35e8421d8ff66528b4d6bd34dc785f9db0dee11c33a4904df4b6ea985a29a76`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
