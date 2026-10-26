# `normalizeManagedSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `core/skills/managed-skill-normalize.ts` · [README do módulo](../../../../../modules/core/skills/managed-skill-normalize-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683941-683960](../../../../../../reference/runtime/host-main.cjs#L683941-L683960) | `FunctionDeclaration` | não | `{   skill }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683941-683960](../../../../../../reference/runtime/host-main.cjs#L683941-L683960) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:683941

Chamadas escritas diretamente neste corpo: `body.trim`, `clampSkillBody`, `clampSkillDescription`, `clampSkillName`, `isSafeFolderId`, `parseSkillFile`, `skill.id.trim`.

SHA-256 do trecho: `3556825f096bd58a6a2ce847a8d52f7d519d9d65b877df5e973cac1b35305a50`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
