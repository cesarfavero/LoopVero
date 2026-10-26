# `managedSkillIdFromPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `core/skills/managed-skills.ts` · [README do módulo](../../../../../modules/core/skills/managed-skills-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534353-534364](../../../../../../reference/runtime/sand-eval-runner.cjs#L534353-L534364) | `FunctionDeclaration` | não | `path33, roots = BOX_MANAGED_SKILL_ROOTS` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534353-534364](../../../../../../reference/runtime/sand-eval-runner.cjs#L534353-L534364) | 3 | 1 | 0 | 3 | 0 | 0 |

### evaluation:534353

Chamadas escritas diretamente neste corpo: `.split`, `import_node_path28.posix.isAbsolute`, `import_node_path28.posix.normalize`, `isSafeFolderId`, `normalized.slice`, `normalized.startsWith`.

SHA-256 do trecho: `e984a8021ae0d432df9d7f684fb9c4581a025d657e8cf6329313940be1d73310`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
