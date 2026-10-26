# `renderTriggerParseFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger-failure.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-failure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715563-715568](../../../../../../reference/runtime/host-main.cjs#L715563-L715568) | `FunctionDeclaration` | não | `failure3` |
| [evaluation:527670-527675](../../../../../../reference/runtime/sand-eval-runner.cjs#L527670-L527675) | `FunctionDeclaration` | não | `failure3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715563-715568](../../../../../../reference/runtime/host-main.cjs#L715563-L715568) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527670-527675](../../../../../../reference/runtime/sand-eval-runner.cjs#L527670-L527675) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:715563

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `subject`.

SHA-256 do trecho: `6a6b338316077dbf9067dd1e34de37d61877b4ff428865c3666a45715476c806`.

### evaluation:527670

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `subject`.

SHA-256 do trecho: `6a6b338316077dbf9067dd1e34de37d61877b4ff428865c3666a45715476c806`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
