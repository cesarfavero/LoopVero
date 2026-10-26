# `SandBoxNoMonitorAvailableError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/box.ts` · [README do módulo](../../../../../modules/core/ports/box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489506-489509](../../../../../../reference/runtime/host-main.cjs#L489506-L489509) | `method` | não | `message = "No private desktop monitor is available on the shared box."` |
| [evaluation:475693-475696](../../../../../../reference/runtime/sand-eval-runner.cjs#L475693-L475696) | `method` | não | `message = "No private desktop monitor is available on the shared box."` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489506-489509](../../../../../../reference/runtime/host-main.cjs#L489506-L489509) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:475693-475696](../../../../../../reference/runtime/sand-eval-runner.cjs#L475693-L475696) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:489506

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.name`.

SHA-256 do trecho: `e7ea5502224d31b92150f027ac69e65abb51fbe4c1f5df90adadb79930f10871`.

### evaluation:475693

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.name`.

SHA-256 do trecho: `e7ea5502224d31b92150f027ac69e65abb51fbe4c1f5df90adadb79930f10871`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
