# `isStaleRefDriverError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727262-727264](../../../../../../../reference/runtime/host-main.cjs#L727262-L727264) | `FunctionDeclaration` | não | `error64` |
| [evaluation:561779-561781](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561779-L561781) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727262-727264](../../../../../../../reference/runtime/host-main.cjs#L727262-L727264) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561779-561781](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561779-L561781) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:727262

Chamadas escritas diretamente neste corpo: `error64.includes`.

SHA-256 do trecho: `4ef1e51855cddcd7929f77c6071273eadaf0b525c60d6b2c8560f0039384dd8b`.

### evaluation:561779

Chamadas escritas diretamente neste corpo: `error63.includes`.

SHA-256 do trecho: `2703258b98778deac80e38616c8154e06f5a324734328c11bcd70fca163499e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
