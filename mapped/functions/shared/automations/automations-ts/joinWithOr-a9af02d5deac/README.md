# `joinWithOr`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automations.ts` · [README do módulo](../../../../../modules/shared/automations/automations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485568-485572](../../../../../../reference/runtime/host-main.cjs#L485568-L485572) | `FunctionDeclaration` | não | `parts` |
| [evaluation:475298-475302](../../../../../../reference/runtime/sand-eval-runner.cjs#L475298-L475302) | `FunctionDeclaration` | não | `parts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485568-485572](../../../../../../reference/runtime/host-main.cjs#L485568-L485572) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:475298-475302](../../../../../../reference/runtime/sand-eval-runner.cjs#L475298-L475302) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:485568

Chamadas escritas diretamente neste corpo: `.join`, `parts.slice`.

SHA-256 do trecho: `ff7d80de541aaf1ab65d87a1b49d4e73156f7b6ef3dc89789ef6cfcdac530f0d`.

### evaluation:475298

Chamadas escritas diretamente neste corpo: `.join`, `parts.slice`.

SHA-256 do trecho: `ff7d80de541aaf1ab65d87a1b49d4e73156f7b6ef3dc89789ef6cfcdac530f0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
