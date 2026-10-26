# `serializeSkillFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683049-683084](../../../../../../reference/runtime/host-main.cjs#L683049-L683084) | `FunctionDeclaration` | não | `spec, existingData` |
| [evaluation:534161-534196](../../../../../../reference/runtime/sand-eval-runner.cjs#L534161-L534196) | `FunctionDeclaration` | não | `spec, existingData` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683049-683084](../../../../../../reference/runtime/host-main.cjs#L683049-L683084) | 6 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534161-534196](../../../../../../reference/runtime/sand-eval-runner.cjs#L534161-L534196) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:683049

Chamadas escritas diretamente neste corpo: `Object.keys`, `grayMatterStringify`, `isSkillFrontmatter`, `spec.body.trim`.

Alvos de atribuição ou incremento: `data2.description`, `data2.name`, `data2.trigger`, `data2[computed]`, `metadata2[computed]`.

SHA-256 do trecho: `b0b1136d88f21b4d8fcc6be2603808b4d3ceb1890862309de9cd7994b188b75d`.

### evaluation:534161

Chamadas escritas diretamente neste corpo: `Object.keys`, `grayMatterStringify`, `isSkillFrontmatter`, `spec.body.trim`.

Alvos de atribuição ou incremento: `data2.description`, `data2.name`, `data2.trigger`, `data2[computed]`, `metadata2[computed]`.

SHA-256 do trecho: `b0b1136d88f21b4d8fcc6be2603808b4d3ceb1890862309de9cd7994b188b75d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
