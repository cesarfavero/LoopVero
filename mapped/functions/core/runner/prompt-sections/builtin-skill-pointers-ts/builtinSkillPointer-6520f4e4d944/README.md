# `builtinSkillPointer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/builtin-skill-pointers.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/builtin-skill-pointers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:752130-752132](../../../../../../../reference/runtime/host-main.cjs#L752130-L752132) | `FunctionDeclaration` | não | `when, id, skillAccess = "read"` |
| [evaluation:528936-528938](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528936-L528938) | `FunctionDeclaration` | não | `when, id, skillAccess = "read"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752130-752132](../../../../../../../reference/runtime/host-main.cjs#L752130-L752132) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:528936-528938](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528936-L528938) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:752130

Chamadas escritas diretamente neste corpo: `SKILL_OPEN_COPY[computed].openManaged`.

SHA-256 do trecho: `e9e28efdea7baa73eed2788d5ff883003b210fded4a5596e40dca1c10fb82273`.

### evaluation:528936

Chamadas escritas diretamente neste corpo: `SKILL_OPEN_COPY[computed].openManaged`.

SHA-256 do trecho: `e9e28efdea7baa73eed2788d5ff883003b210fded4a5596e40dca1c10fb82273`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
