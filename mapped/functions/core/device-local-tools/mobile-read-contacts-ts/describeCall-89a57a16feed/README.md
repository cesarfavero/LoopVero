# `describeCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/mobile-read-contacts.ts` · [README do módulo](../../../../../modules/core/device-local-tools/mobile-read-contacts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759416-759419](../../../../../../reference/runtime/host-main.cjs#L759416-L759419) | `ArrowFunctionExpression` | não | `input2` |
| [evaluation:549576-549579](../../../../../../reference/runtime/sand-eval-runner.cjs#L549576-L549579) | `ArrowFunctionExpression` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759416-759419](../../../../../../reference/runtime/host-main.cjs#L759416-L759419) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549576-549579](../../../../../../reference/runtime/sand-eval-runner.cjs#L549576-L549579) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:759416

Chamadas escritas diretamente neste corpo: `describeReadContacts`, `readContactsParameters.safeParse`.

SHA-256 do trecho: `c60ddfc951e15d9ad9a6a0b74214327440be520b13ae0196c42924cfb1ca40e9`.

### evaluation:549576

Chamadas escritas diretamente neste corpo: `describeReadContacts`, `readContactsParameters.safeParse`.

SHA-256 do trecho: `9442735391760a59218440047e7ad56d35d9839ef70e635bba14857acc07a495`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
