# `triggerListeners`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automations.ts` · [README do módulo](../../../../../modules/shared/automations/automations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485487-485491](../../../../../../reference/runtime/host-main.cjs#L485487-L485491) | `FunctionDeclaration` | não | `trigger2` |
| [evaluation:475219-475223](../../../../../../reference/runtime/sand-eval-runner.cjs#L475219-L475223) | `FunctionDeclaration` | não | `trigger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485487-485491](../../../../../../reference/runtime/host-main.cjs#L485487-L485491) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475219-475223](../../../../../../reference/runtime/sand-eval-runner.cjs#L475219-L475223) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485487

Chamadas escritas diretamente neste corpo: `.filter`, `triggerList`.

SHA-256 do trecho: `8644b017d03ab8adcd633265f0e0dc2fb1067aa1beb36ca598f531a2088d5937`.

### evaluation:475219

Chamadas escritas diretamente neste corpo: `.filter`, `triggerList`.

SHA-256 do trecho: `be24e4e7522759cee9d38c08caba664015a652d37bdd3b4cee4dc56d0af2c8e8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
