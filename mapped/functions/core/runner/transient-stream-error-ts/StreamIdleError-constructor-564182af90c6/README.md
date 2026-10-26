# `StreamIdleError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736403-736407](../../../../../../reference/runtime/host-main.cjs#L736403-L736407) | `method` | não | `deadlineMs` |
| [evaluation:590041-590045](../../../../../../reference/runtime/sand-eval-runner.cjs#L590041-L590045) | `method` | não | `deadlineMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736403-736407](../../../../../../reference/runtime/host-main.cjs#L736403-L736407) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:590041-590045](../../../../../../reference/runtime/sand-eval-runner.cjs#L590041-L590045) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:736403

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.idleDeadlineMs`, `this.name`.

SHA-256 do trecho: `de600a74e4ea42d13dd5f4551e1c2994a34577db47e93503126dc90ccf59f6cf`.

### evaluation:590041

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.idleDeadlineMs`, `this.name`.

SHA-256 do trecho: `de600a74e4ea42d13dd5f4551e1c2994a34577db47e93503126dc90ccf59f6cf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
