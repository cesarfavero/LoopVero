# `inAppVariantsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742000-742007](../../../../../../../reference/runtime/host-main.cjs#L742000-L742007) | `FunctionDeclaration` | não | `withOpen, withAct, core2` |
| [evaluation:482947-482954](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482947-L482954) | `FunctionDeclaration` | não | `withOpen, withAct, core2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742000-742007](../../../../../../../reference/runtime/host-main.cjs#L742000-L742007) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482947-482954](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482947-L482954) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742000

Chamadas escritas diretamente neste corpo: `external_exports2.object`, `omitInAppFields`.

SHA-256 do trecho: `0146c73de83cb8c91762b5c7346eb3768f63aa114c5cd0e2549b61f1312a7151`.

### evaluation:482947

Chamadas escritas diretamente neste corpo: `external_exports3.object`, `omitInAppFields`.

SHA-256 do trecho: `0646d627653767b75a04af1addafb3b6511c7823b18311d03508adb7afc721f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
