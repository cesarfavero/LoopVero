# `triggerFiringSchedules`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automations.ts` · [README do módulo](../../../../../modules/shared/automations/automations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485502-485506](../../../../../../reference/runtime/host-main.cjs#L485502-L485506) | `FunctionDeclaration` | não | `trigger2` |
| [evaluation:475232-475236](../../../../../../reference/runtime/sand-eval-runner.cjs#L475232-L475236) | `FunctionDeclaration` | não | `trigger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485502-485506](../../../../../../reference/runtime/host-main.cjs#L485502-L485506) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475232-475236](../../../../../../reference/runtime/sand-eval-runner.cjs#L475232-L475236) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485502

Chamadas escritas diretamente neste corpo: `.flatMap`, `triggerList`.

SHA-256 do trecho: `4ee69a1f40f46565d38c72e66bebd4e3a74f7a4a02ad74d0e239b73e67954dc0`.

### evaluation:475232

Chamadas escritas diretamente neste corpo: `.flatMap`, `triggerList`.

SHA-256 do trecho: `8dad3af9cb8b5fdf7eef9dee7fee4441fb1044335cd20c96206b75f0de578539`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
