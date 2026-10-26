# `isYamlValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682998-683003](../../../../../../reference/runtime/host-main.cjs#L682998-L683003) | `FunctionDeclaration` | não | `value` |
| [evaluation:534110-534115](../../../../../../reference/runtime/sand-eval-runner.cjs#L534110-L534115) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682998-683003](../../../../../../reference/runtime/host-main.cjs#L682998-L683003) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:534110-534115](../../../../../../reference/runtime/sand-eval-runner.cjs#L534110-L534115) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:682998

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isSkillFrontmatter`, `value.every`.

SHA-256 do trecho: `5c242ff842da7ff3225dc522640f7d94e03e978f2e274cb2ead8e49c1246acbe`.

### evaluation:534110

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isSkillFrontmatter`, `value.every`.

SHA-256 do trecho: `5c242ff842da7ff3225dc522640f7d94e03e978f2e274cb2ead8e49c1246acbe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
