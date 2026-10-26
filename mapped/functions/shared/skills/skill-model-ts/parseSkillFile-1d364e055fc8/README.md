# `parseSkillFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683027-683048](../../../../../../reference/runtime/host-main.cjs#L683027-L683048) | `FunctionDeclaration` | não | `raw` |
| [evaluation:534139-534160](../../../../../../reference/runtime/sand-eval-runner.cjs#L534139-L534160) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683027-683048](../../../../../../reference/runtime/host-main.cjs#L683027-L683048) | 4 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:534139-534160](../../../../../../reference/runtime/sand-eval-runner.cjs#L534139-L534160) | 4 | 0 | 0 | 2 | 0 | 1 |

### host:683027

Chamadas escritas diretamente neste corpo: `Object.keys`, `clampSkillBody`, `clampSkillDescription`, `clampSkillName`, `grayMatter`, `isSkillFrontmatter`, `readSourceRef`, `readTrigger`.

Alvos de atribuição ou incremento: `content`, `data2`.

SHA-256 do trecho: `eb94bad40331e8ac5d6f25d65f81380f7dbf772689a079c8e171ce16c2be89ab`.

### evaluation:534139

Chamadas escritas diretamente neste corpo: `Object.keys`, `clampSkillBody`, `clampSkillDescription`, `clampSkillName`, `grayMatter`, `isSkillFrontmatter`, `readSourceRef`, `readTrigger`.

Alvos de atribuição ou incremento: `content`, `data2`.

SHA-256 do trecho: `1b4c831d0d630b3070725421fb0588f4995d045c64faa9677c8868945d711e65`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
