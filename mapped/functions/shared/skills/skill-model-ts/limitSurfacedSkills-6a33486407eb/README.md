# `limitSurfacedSkills`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682978-682985](../../../../../../reference/runtime/host-main.cjs#L682978-L682985) | `FunctionDeclaration` | não | `skills` |
| [evaluation:534081-534088](../../../../../../reference/runtime/sand-eval-runner.cjs#L534081-L534088) | `FunctionDeclaration` | não | `skills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682978-682985](../../../../../../reference/runtime/host-main.cjs#L682978-L682985) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:534081-534088](../../../../../../reference/runtime/sand-eval-runner.cjs#L534081-L534088) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:682978

Chamadas escritas diretamente neste corpo: `.push`, `userOwned.slice`.

SHA-256 do trecho: `f8948c0f1d564aab42b59234f4493d5a99c9ca3723a1d55ce552fc2faf47973f`.

### evaluation:534081

Chamadas escritas diretamente neste corpo: `.push`, `userOwned.slice`.

SHA-256 do trecho: `f8948c0f1d564aab42b59234f4493d5a99c9ca3723a1d55ce552fc2faf47973f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
