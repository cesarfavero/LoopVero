# `isSkillFrontmatter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683004-683006](../../../../../../reference/runtime/host-main.cjs#L683004-L683006) | `FunctionDeclaration` | não | `value` |
| [evaluation:534116-534118](../../../../../../reference/runtime/sand-eval-runner.cjs#L534116-L534118) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683004-683006](../../../../../../reference/runtime/host-main.cjs#L683004-L683006) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534116-534118](../../../../../../reference/runtime/sand-eval-runner.cjs#L534116-L534118) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:683004

Chamadas escritas diretamente neste corpo: `.every`, `Object.values`, `isUnknownRecord2`.

SHA-256 do trecho: `2fe88414f924d2189484f254b4fd7de1c78558e0510d3d2807ef6b694b2b4806`.

### evaluation:534116

Chamadas escritas diretamente neste corpo: `.every`, `Object.values`, `isUnknownRecord2`.

SHA-256 do trecho: `2fe88414f924d2189484f254b4fd7de1c78558e0510d3d2807ef6b694b2b4806`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
